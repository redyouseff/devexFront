
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import notify from "../useNotification";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loginUser } from "../../redux/Actions/AuthActions";

export const LoginHook=()=>{
    const [loading,setLoading]=useState(false);
    const dispatch=useDispatch();
    const res=useSelector((state)=>state.Auth.loginUser);
   


   

    const loginSchema = z.object({
        email: z.string().email("Invalid email"),
        password: z.string().min(6, "Password must be at least 6 characters"),
      });

      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(loginSchema),
      });


 

    const handleLogin=(data)=>{
       
        setLoading(false);
        dispatch(loginUser(data));
        setLoading(true);
       
    }



    useEffect(()=>{
        
        if(res.data){
            console.log(res,"res");
        if(!res.status){
            
            notify("Login successful","success");
            localStorage.setItem("token",res.token);
            localStorage.setItem("user",JSON.stringify(res.data));
            setTimeout(() => {
                window.location.href="/admin/allblogs"
            }, 2000);

        }else{
            notify("email or password is incorrect","error");
        }

        }
        
       
    },[res]);
    
    return {handleLogin,register,handleSubmit,errors};



}