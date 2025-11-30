
import BaseUrl from "../Api/BaseUrl"

const UseGetDate=async(url,params)=>{

    const  res= await BaseUrl.get(url,params)
    return res.data;


}

const UseGetDataWithToken=async(url,params)=>{
    const config={
        headrs:{Authorization:`Bearer ${localStorage.getItem("token")}`}
    }
    const res=await BaseUrl.get(url,config)
    return res.data;
}





export {UseGetDate,UseGetDataWithToken};