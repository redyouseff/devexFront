import { UseGetDate } from "../../Hooks/UseGetData"
import { UseInsertDataWithImage } from "../../Hooks/UseInsertData"
import { CREATE_BLOG, GET_ALL_BLOGS } from "../type"



export const getAllBlogs=async(dispatch)=>{
    try{
        const response =await UseGetDate("/api/blogs")
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