import BaseUrl from "../Api/BaseUrl";


const UseUpdataDataWithImage=async(url,params)=>{
    console.log(localStorage.getItem("token"),"token");

    const config={
        "content-type":"multipart/form-data",
        headers:{Authorization:`Bearer ${ localStorage.getItem("token")}`},
       
    }
    const res=await BaseUrl.patch(url,params,config);
    return res.data;

}

const useupdataDataWithToken=async(url,params)=>{
    const config={
        headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}  
    }
    const res=await BaseUrl.patch(url,params,config);
    return res.data;

}


export {UseUpdataDataWithImage,useupdataDataWithToken};