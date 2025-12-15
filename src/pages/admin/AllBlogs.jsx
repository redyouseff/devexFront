
import { all } from "axios";
import { Aside } from "../../components/admin/Aside"
import { Card } from "../../components/admin/Card";
import { GetAllBlogsHook } from "../../Hook/admin/GetAllBlogsHook";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
const image1 ="https://res.cloudinary.com/daop3bufa/image/upload/v1765105085/search_vgtbcg.svg"
const blogImage="https://res.cloudinary.com/daop3bufa/image/upload/v1759050848/39fe9b9d1d42d713a96f4061d8de02a0c59fabde_sm65le.jpg"



export const AllBlogs = () => {
    const [allblogs,loading,handleSearch]=GetAllBlogsHook();
  
  

    const blogs =new Array(10).fill({
        title:"Blog Title",
        description:"Blog Description",
        image:blogImage
    })
  return (
    <>

    <div className="grid grid-cols-1 md:grid-cols-10 w-full h-full gap-2">
    <div className="col-span-1 md:col-span-2 mb-5 ml-0 md:ml-3">
      <Aside />
    </div>

    <div className="col-span-1 md:col-span-8 p-4 sm:p-6 md:p-10 lg:p-16 m-2 rounded-2xl bg-[#2F5B44] shadow-[0_0_30px_6px_rgba(0,0,0,0.45)] h-auto md:h-[calc(100vh-1rem)] md:overflow-y-auto scrollbar-yellow">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-10 lg:gap-14 border-b-[2.611px] border-[#FEF9D0]">

            <img src={image1} alt="search" className="w-8 h-8 sm:w-10 sm:h-10" />
            <div className="
            flex 
            w-full
            px-2 py-3 sm:px-4 sm:py-4
            items-center 
            gap-3 sm:gap-4 
            self-stretch  
            max-w-4xl">

    <input 
        type="text" 
       
        name="search"
        placeholder="Search with Blog name"
        className="bg-transparent text-white 
               placeholder-[#FEF9D0] 
               focus:outline-none 
               font-inter 
             
               font-semibold w-full"
        autoComplete="off"
        onChange={handleSearch}
      

    />
</div> 

            


        </div>


        <div className="mt-10">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {/* {
                    blogs.map((blog,index)=>(
                        <Card key={index} title={blog.title} description={blog.description} image={blog.image} />
                    ))
                    

                } */}

                {
                    loading==false?
                    allblogs.map((blog,index)=>(
                     
                        <Link to={`/admin/editeblog/${blog._id}`} key={blog._id}>

                              <Card key={blog._id} title={blog.title} description={blog.description} images={blog.images} id={blog._id}  />
                        </Link>
                    ))
                    :
                    <div className="flex justify-center items-center h-full">
                        <div className="w-12 h-12 border-4 border-[#FEF9D0] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                }


              



           


            </div>

            
        </div>
    </div>
    <ToastContainer />

    </div>
   


    
    </>   

  )
  
}      





