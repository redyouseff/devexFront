
import BaseUrl from "../Api/BaseUrl"

const UseDeleteData= async(url,params)=>{
    const config={
            headrs:{Authorization:`Bearer ${localStorage.getItem("token")}`}
    }
    const res=await BaseUrl.delete(url,config);
    return res.data;
}

export default {UseDeleteData};