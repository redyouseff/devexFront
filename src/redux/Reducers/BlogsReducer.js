
import { CREATE_BLOG, GET_ALL_BLOGS } from "../type"


const intail={
    blogs:[],
    loading:true,
    createBlog:[]
}

const BlogsReducer=(state=intail,actain)=>{

    switch(actain.type){
        case GET_ALL_BLOGS:
                        
            return{
                loading:false,
                blogs:actain.payload

            }
            case CREATE_BLOG:
                return{
                    loading:false,
                    createBlog:actain.payload
                }

            default:

                return state
    }

}

export default BlogsReducer