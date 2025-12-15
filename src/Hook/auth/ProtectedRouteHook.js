import { useEffect, useState } from "react";



export const ProtectedRouteHook=()=>{
    const [userData,setUserData]=useState(localStorage.getItem("user"));
    const [isUser,setIsUser]=useState(false);
    const [isAdmin,setIsAdmin]=useState(false);
    const [isLoading,setIsLoading]=useState(true);

    // Function to update user data from localStorage
    const updateUserData = () => {
        const storedUser = localStorage.getItem("user");
        setUserData(storedUser);
    };

    useEffect(()=>{
        // Initial check
        updateUserData();
        setIsLoading(false);

        // Listen for storage changes (when localStorage is modified in other tabs/windows)
        const handleStorageChange = (e) => {
            if (e.key === "user") {
                updateUserData();
            }
        };

        window.addEventListener('storage', handleStorageChange);

        // Cleanup
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    },[])

    useEffect(()=>{

        if(userData==null){
            setIsUser(false);
            setIsAdmin(false);
            setIsLoading(false);
            return;
        }
        try {
            const user=JSON.parse(userData);

            if(user.role=="user"){
                setIsUser(true);
                setIsAdmin(false);
                setIsLoading(false);

            }
            else if(user.role=="admin"){
                setIsUser(false);
                setIsAdmin(true);
                setIsLoading(false);
            }

            else{
                setIsUser(false);
                setIsAdmin(false);
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Error parsing user data:", error);
            setIsUser(false);
            setIsAdmin(false);
            setIsLoading(false);
        }
        


    },[userData])

    return [userData,isUser,isAdmin,isLoading];


    
}