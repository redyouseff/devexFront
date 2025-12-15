import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogById } from "../../redux/Actions/BlogsActions";



export const GetOneBlogHook=(id)=>{
    const [loading,setLoading]=useState(false);
    const [blog,setBlog]=useState([]);
    const dispatch=useDispatch();

    const res=useSelector((state)=>state.AllBlogs.getBlogById);

    useEffect(()=>{
        setLoading(true);
        dispatch(getBlogById(id));
    },[]);

    useEffect(()=>{
        if(res?.data){
            
            setBlog(res.data);
            setLoading(false);
        }
    },[res]);

    return [loading,blog];



}