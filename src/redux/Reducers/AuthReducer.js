import { LOGIN_USER } from "../type"


const intail={
    loginUser:[],
    loading:true
}

const AuthReducer=(state=intail,action)=>{
    switch(action.type){  

        case LOGIN_USER:  
          
            return {      
                ...state,  
                loginUser:action.payload,
                loading:false   
            }

        default:
            return state
    }
}



export default AuthReducer 