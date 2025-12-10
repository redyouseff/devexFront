import { UseInsertData } from "../../Hooks/UseInsertData"
import { LOGIN_USER } from "../type"



export const loginUser=(data)=>async(dispatch)=>{
 
    try{
        const response=await  UseInsertData("/api/auth/login",data)
        
        dispatch({
            type:LOGIN_USER,
            payload:response,
            loading:true
        }
            
        )
    }
    catch(e){
        dispatch({
            type:LOGIN_USER,
            payload:e.response
        })


    }
    

}




