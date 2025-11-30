import blogs from "../../pages/blogs"
import { GET_ALL_BLOGS } from "../type"


const intail={
    blogs:[],
    loading:true,

}

const BlogsReducer=(state=intail,actain)=>{
    switch(actain.type){
        case GET_ALL_BLOGS:

            return{
                loading:false,
                blogs:actain.payload

            }

            default:
                return state
    }

}

export default BlogsReducer