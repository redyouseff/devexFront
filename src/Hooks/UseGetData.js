
import BaseUrl from "../Api/BaseUrl"

const UseGetDate=async(url)=>{

    const config={
        headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},

    }

    const  res= await BaseUrl.get(url,config)
    return res.data;


}

const UseGetDataWithToken=async(url)=>{
    
   
    const config={
        headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},

    }
    
    const res=await BaseUrl.get(url,config)
    
    return res.data;
}





export {UseGetDate,UseGetDataWithToken};