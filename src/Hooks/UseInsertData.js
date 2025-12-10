import BaseUrl from "../Api/BaseUrl";


const UseInsertDataWithImage=async(url,params)=>{

    const config={

        "content-type":"multipart/form-data",
        headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},
       
    }
    const res=await BaseUrl.post(url,params,config);
    return res.data;

}


const UseInsertData=async(url,params)=>{

    const config={

        headers:{Authorization:`Bearer ${localStorage.getItem("token")}`},
        params:params
    }

    const res=await BaseUrl.post(url,params,config);
    return res.data;

}


export {UseInsertDataWithImage,UseInsertData};


