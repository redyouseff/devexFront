import { Navigate, Outlet } from "react-router-dom"


export const ProductRoute=({auth, children, loading = false})=>{
   

    // If still loading, don't render anything yet
    if(loading){
        return <div>Loading...</div>; // Or a proper loading component
    }

    if(auth==false){
        return <Navigate to="/login" />
    }

    return children || <Outlet /> ;


}

