import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { getBlogByCanonical } from "../../redux/Actions/BlogsActions";



 export const BlogHook =(canonical)=>{
    const [blog,setBlog]=useState([]);
    const [loading,setLoading]=useState(false);
    const dispatch=useDispatch();
    const res=useSelector(state=>state.AllBlogs.getBlogByCanonical);
    let blogPostStructuredData=null;

       
   

  useEffect(()=>{
    setLoading(true);
    dispatch(getBlogByCanonical(canonical));

  },[])

  useEffect(()=>{

    if(res?.status=="success"){
        setLoading(false);
        setBlog(res.data);
       
       
    }
  },[res])   
  


  if(res?.data){
     blogPostStructuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": `${res?.data?.title}`,
        "description": `${res?.data.description}`,
        "url": `https://devext.io/DigitalTrends/${res?.data?.canonical}`,
        "datePublished": "2025-09-18",
        "dateModified": "2025-09-18",
        "author": {
          "@type": "Organization",
          "name": "Devext"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Devext",  
          "logo": {
            "@type": "ImageObject",
            "url": "https://devext.io/images/navbar/Logo_Devext-removebg-preview 1.png"
          }
        },
        "image": "https://res.cloudinary.com/daop3bufa/image/upload/v1759050848/39fe9b9d1d42d713a96f4061d8de02a0c59fabde_sm65le.jpg",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://devext.io/DigitalTrends/${res?.data?.canonical}`
        }
      };
  }









  return [blog,loading,blogPostStructuredData]   
   
}