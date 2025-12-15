import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBlog } from "../../redux/Actions/BlogsActions";
import notify from "../useNotification";



export const CardHook=()=>{

    const [loading,setLoading]=useState(false);
    const [deleteAttempted,setDeleteAttempted]=useState(false);
    const dispatch=useDispatch();
    const res=useSelector((state)=>state.AllBlogs.deleteBlog);

    const handleDelete=(id)=>{
        setLoading(true);
        setDeleteAttempted(true);
        dispatch(deleteBlog(id));
        console.log(res,"res");



    }

    useEffect(()=>{
       if(res && res.length>0 && deleteAttempted){
        if(res=="document deleted"){
            notify("Blog deleted successfully","success");
            setTimeout(() => {
                window.location.href="/admin/allblogs"
            }, 2000);
        }
        else{
            notify("Blog deletion failed","error");
        }
        setDeleteAttempted(false); // Reset for next delete attempt
       }

    },[res, deleteAttempted])


    return [loading,handleDelete];

}