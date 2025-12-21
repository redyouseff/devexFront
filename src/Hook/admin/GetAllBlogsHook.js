import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../../redux/Actions/BlogsActions";
import { useEffect, useState, useCallback, useRef } from "react";
import notify from "../useNotification"




export const GetAllBlogsHook = () => {
    const [allblogs, setAllBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [posted, setPosted] = useState(true);
    const [post, setPost] = useState(true);
    const [unpost, setUnpost] = useState(false);
    const [all, setAll] = useState(false);
    const dispatch = useDispatch();

    const res = useSelector((state) => state.AllBlogs.allblogs);

    // Debounce ref for search
    const debounceRef = useRef(null);

    // Effect to dispatch API call when filters change
    useEffect(() => {
        // Clear any pending debounce
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        setLoading(true);

        // Debounce search calls to prevent excessive API requests
        const timeoutId = setTimeout(() => {
            dispatch(getAllBlogs(keyword, posted));
        }, keyword ? 500 : 0); // No debounce for initial load or filter changes

        debounceRef.current = timeoutId;

        return () => clearTimeout(timeoutId);
    }, [keyword, posted, dispatch]);

    // Effect to handle API responses
    useEffect(() => {
        if (!res) return;

        if (res?.status === 500) {
            if (res.data?.error?.message === "jwt expired" || res.data?.error?.message === "jwt malformed") {
                notify("Session expired, please login again", "error");
                setTimeout(() => {
                    localStorage.removeItem("token");
                    window.location.href = "/login";
                }, 2000);
            } else {
                setLoading(false);
            }
        } else if (res?.pagination) {
            setAllBlogs(res.data);
            setLoading(false);
        }
    }, [res]);

    // Memoized search handler with debouncing
    const handleSearch = useCallback((e) => {
        const newKeyword = e.target.value;
        setKeyword(newKeyword);
    }, []);

    // Memoized filter handler
    const handlePosted = useCallback((filterType) => {
        if (filterType === "posted") {
            setPosted("true");
            setPost(true);
            setUnpost(false);
            setAll(false);
        } else if (filterType === "unposted") {
            setPosted("false");
            setPost(false);
            setUnpost(true);
            setAll(false);
        } else {
            setPosted("");
            setPost(false);
            setUnpost(false);
            setAll(true);
        }
    }, []);

    // Cleanup debounce on unmount
    useEffect(() => {
        return () => {
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
        };
    }, []);

    return [allblogs, loading, handleSearch, handlePosted, post, unpost, all];
};