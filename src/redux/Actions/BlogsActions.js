import { UseGetDate } from "../../Hooks/GetUseData"
import { GET_ALL_BLOGS } from "../type"



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