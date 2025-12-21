
import { CREATE_BLOG, DELETE_BLOG, GET_ALL_BLOGS, GET_BLOG_BY_CANONICAL, GET_BLOG_BY_ID, UPDATE_BLOG } from "../type"


const initial={
    allblogs:[],
    loading:true,
    deleteBlog:[],
    createBlog:[],
    getBlogById:[],

}

const BlogsReducer=(state=initial,action)=>{


    switch(action.type){
        case GET_ALL_BLOGS:

            return{
                ...state,
                loading:false,
                allblogs:action.payload

            }
            case CREATE_BLOG:
                return{
                    ...state,
                    loading:false,
                    createBlog:action.payload

                }
                case DELETE_BLOG:
                    return{
                        ...state,
                        loading:false,
                        deleteBlog:action.payload
                    }
                    case GET_BLOG_BY_ID:
                        return{
                            ...state,
                            loading:false,
                            getBlogById:action.payload
                        }
                        case UPDATE_BLOG:
                            return{
                                ...state,
                                loading:false,
                                updateBlog:action.payload
                            }
                            case GET_BLOG_BY_CANONICAL:
                                return{
                                    ...state,
                                    loading:false,
                                    getBlogByCanonical:action.payload
                                }

            default:

                return state
    }

}

export default BlogsReducer