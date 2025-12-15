import { useDispatch, useSelector } from "react-redux";
import { updateBlog } from "../../redux/Actions/BlogsActions";
import { useEffect, useState } from "react";
import notify from "../useNotification";



export const UpdateBlogHook=(id)=>{
    const [loadingUpdate,setLoadingUpdate]=useState(false);
    const [blogUpdate,setBlogUpdate]=useState([]);
    const dispatch=useDispatch();
    const res=useSelector((state)=>state.AllBlogs.updateBlog);

    const handleUpdate=(data)=>{
        setLoadingUpdate(true);
        dispatch(updateBlog(id,data));
       
    }

    useEffect(()=>{
        if(res?.data){
            if(res?.status=="success" && res?.data){
                notify("Blog updated successfully","success");
                setTimeout(() => {
                    window.location.href=`/admin/editeblog/${id}`
                }, 2000);
            }
            else if(res?.status=="error"){
                notify("Failed to update blog","error");
            }
            else{
                notify("Failed to update blog","error");
            }
        }
     


     
    },[res]);

    return[handleUpdate,loadingUpdate,blogUpdate]
}