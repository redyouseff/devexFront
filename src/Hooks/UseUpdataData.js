import BaseUrl from "../Api/BaseUrl";


const UseUpdataDataWithImage=async(url,params)=>{
    const config={
        "content-type":"multipart/form-data",
        headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},
        params:params
    }
    const res=await BaseUrl.put(url,config);
    return res.data;

}

const useupdataDataWithToken=async(url,params)=>{
    const config={
        headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},
        params:params
    }
    const res=await BaseUrl.put(url,config);
    return res.data;

}


export {UseUpdataDataWithImage,useupdataDataWithToken};