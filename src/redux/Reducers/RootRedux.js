
import {combineReducers} from "redux"
import BlogsReducer from "./BlogsReducer"
import AuthReducer from "./AuthReducer"



export default combineReducers ({
    AllBlogs:BlogsReducer,
    Auth:AuthReducer

}) 


