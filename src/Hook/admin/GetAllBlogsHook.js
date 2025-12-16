import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../../redux/Actions/BlogsActions";
import { useEffect, useState } from "react";
import notify from "../useNotification"




export const GetAllBlogsHook =()=>{

    const [allblogs,setAllBlogs]=useState([]);
    const [loading,setLoading]=useState(false);
    const [keyword,setKeyword]=useState(" ");
    const dispatch=useDispatch();
 

    const res=useSelector((state)=>state.AllBlogs.allblogs);

    useEffect(()=>{
        setLoading(true);
        dispatch(getAllBlogs(keyword));
    },[dispatch, keyword])

    useEffect(()=>{
        if(keyword !== " ") {
                setLoading(true);
            dispatch(getAllBlogs(keyword));
        }

    },[dispatch, keyword])


   

    useEffect(()=>{

       if(res?.status==500){
        if(res.data.error.message=="jwt expired" || res.data.error.message=="jwt malformed"){
            notify("Session expired, please login again","error");
            setTimeout(() => {
                localStorage.removeItem("token");
                window.location.href="/login";
                
            }, 2000);
           
        }
     
        else{
            setLoading(false);
        }
       }
       else if(res?.pagination){
        setAllBlogs(res?.data);
        setLoading(false);
    }
     
       
    },[res])   

    const handleSearch=(e)=>{
        const newKeyword = e.target.value;
        setKeyword(newKeyword);
        setLoading(true);
        dispatch(getAllBlogs(newKeyword));
        console.log(newKeyword,"keyword");
    }

   



    return [allblogs,loading,handleSearch]

}