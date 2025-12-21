import UseDeleteData from "../../Hooks/UseDeleteData"
import { UseGetDataWithToken, UseGetDate } from "../../Hooks/UseGetData"
import { UseInsertDataWithImage } from "../../Hooks/UseInsertData"
import { UseUpdataDataWithImage, useupdataDataWithToken } from "../../Hooks/UseUpdataData"
import { CREATE_BLOG, DELETE_BLOG, EDITE_BLOG, GET_ALL_BLOGS, GET_BLOG_BY_CANONICAL, GET_BLOG_BY_ID, UPDATE_BLOG } from "../type"



export const getAllBlogs=(keyword="",posted)=>async(dispatch)=>{

      
    
    try{
        const response =await UseGetDate(`/api/blogs?limit=50&keyword=${keyword}&posted=${posted}`)  
        
        
        
        dispatch({
            type:GET_ALL_BLOGS,
            payload:response,
            loading:true
        })
    }
    catch(e){
        dispatch({
            type:GET_ALL_BLOGS,
            payload:e.response
        })

    }
}

export const createBlog=(data)=>async(dispatch)=>{
    try{
        const response =await UseInsertDataWithImage("/api/blogs",data);
        dispatch({
            type:CREATE_BLOG,
            payload:response,
            loading:true
        })

    }
    catch(e){
        dispatch({
            type:CREATE_BLOG,
            payload:e.response,
            loading:false
        })

    }
}

export const editeBlog=(id,data)=>async(dispatch)=>{
    try{
        const response =await UseUpdataDataWithImage("/api/blogs",id,data);
        dispatch({
            type:EDITE_BLOG,
            payload:response,
            loading:true
        })
    }
    catch(e){
        dispatch({
            type:EDITE_BLOG,
            payload:e.response,
            loading:false
        })
    }
}



export const getBlogById=(id)=>async(dispatch)=>{
   

    try{
        const response =await UseGetDataWithToken(`/api/blogs/${id}`)
        dispatch({
            type:GET_BLOG_BY_ID,
            payload:response,
            loading:true
        })
    }
    catch(e){
        dispatch({
            type:GET_BLOG_BY_ID,
            payload:e.response,
            loading:false
        })
    }
}

export const deleteBlog=(id)=>async(dispatch)=>{
    

    try{
        const response =await UseDeleteData(`/api/blogs/${id}`)
        
        dispatch({
            type:DELETE_BLOG,
            payload:response,
            loading:false
        })
    }
    catch(e){
        dispatch({
            type:DELETE_BLOG,
            payload:e.response,
            loading:false
        })

    }
}

export const updateBlog=(id,data)=>async(dispatch)=>{
    try{
        const response =await UseUpdataDataWithImage(`/api/blogs/${id}`,data);
        dispatch({
            type:UPDATE_BLOG,
            payload:response,
            loading:false
        })
    }
    catch(e){
        dispatch({
            type:UPDATE_BLOG,
            payload:e.response,
            loading:false
        })
    }
}

 export const getBlogByCanonical=(canonical)=>async(dispatch)=>{

    try{
        const response =await UseGetDataWithToken(`/api/blogs/DigitalTrends/${canonical}`)
        dispatch({
            type:GET_BLOG_BY_CANONICAL,
            payload:response,
            loading:true
        })

    }
    catch(e){
        dispatch({
            type:GET_BLOG_BY_CANONICAL,
            payload:e.response,
            loading:false
        })

    }
}
