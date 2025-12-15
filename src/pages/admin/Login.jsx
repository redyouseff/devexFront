

import { ToastContainer } from "react-toastify";
import { LoginHook } from "../../Hook/auth/LoginHook";




const  image1 ="https://res.cloudinary.com/daop3bufa/image/upload/v1764682829/Logo_W_Slogan_1_pd34mk.svg"

const background="https://res.cloudinary.com/daop3bufa/image/upload/v1764682828/Devext_Pattern_w0paij.svg"

export const Login =()=>{
    const {handleLogin,register,handleSubmit,errors}=LoginHook();

  
    
        
   
    return(
        <>
        <div className="relative min-h-[46rem] overflow-hidden"> 
        <img
                    src={background}
                    alt="background"
                    aria-hidden="true"
                    className="absolute inset-y-0 right-0 h-full w-auto max-w-none object-contain md:object-cover object-right pointer-events-none select-none"
                />
            <div className="relative z-10 max-w-7xl m-auto pt-20 px-4 sm:px-6 lg:px-8">
                <div className="mb-[5rem]">
                <img src={image1} className="w-45 h-45"></img>
                </div>

                <div className="text-white font-inter text-4xl sm:text-5xl lg:text-[62.665px] font-semibold capitalize mb-5">
                    login

                </div>
                <form onSubmit={handleSubmit(handleLogin)} noValidate>
                <div className="border-b-[2.611px] border-[#FEF9D0] 
            flex 
            w-full
            px-[28.722px] py-[30.027px] pl-[8px]
            items-center 
            gap-[13.055px] 
            self-stretch  
            max-w-2xl">

    <input
        type="email"
        {...register("email")}
        name="email"
        placeholder="Enter Your user Email"
        className="bg-transparent text-white
               placeholder-[#FEF9D0]
               focus:outline-none
               font-inter

               font-semibold"
        autoComplete="email"
        aria-invalid={!!errors.email}

    />
</div>
{errors.email && (
    <p className="text-red-400 text-sm mt-2 max-w-2xl">{errors.email.message}</p>
)}


<div className="border-b-[2.611px] border-[#FEF9D0] 
            flex 
            w-full
            px-[28.722px] py-[30.027px] pl-[8px]
            items-center 
            gap-[13.055px] 
            self-stretch
            max-w-2xl
             mb-10">

    <input
        type="password"
        {...register("password")}
        name="password"
        placeholder="Enter  password"
        className="bg-transparent text-white
               placeholder-[#FEF9D0]
               focus:outline-none
               font-inter

               font-semibold"
        autoComplete="current-password"
        aria-invalid={!!errors.password}
    />
</div>
{errors.password && (
    <p className="text-red-400 text-sm -mt-8 mb-8 max-w-2xl">{errors.password.message}</p>
)}




           <div>
             
             <button className="bg-[#FEF9D0] text-[#2F5B44] px-4 py-2 rounded-xl font-medium text-[16px] hover:bg-[#2F5B44] hover:text-[#FEF9D0] transition-all duration-300 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed group" type="submit">
                login
             </button>
           </div>
               </form>







               

            </div>
            <ToastContainer />  

            
        </div>
        
        </>
    )
}