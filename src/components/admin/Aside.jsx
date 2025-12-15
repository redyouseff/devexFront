import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const  image1 ="https://res.cloudinary.com/daop3bufa/image/upload/v1764682829/Logo_W_Slogan_1_pd34mk.svg"
const image2 ="https://res.cloudinary.com/daop3bufa/image/upload/v1765374131/All_Blogs_Normal_jvle3k.svg"
const image3 ="https://res.cloudinary.com/daop3bufa/image/upload/v1765101986/Vector2_ssrs83.svg"

const image5 ="https://res.cloudinary.com/daop3bufa/image/upload/v1765101985/66_bowstz.svg"


const createIconActive="https://res.cloudinary.com/daop3bufa/image/upload/v1765374131/Create_a_blog_active_j9d7f6.svg"
const allBlogsIconActive="https://res.cloudinary.com/daop3bufa/image/upload/v1765101985/Vector_hpj63u.svg"



export const Aside = () => {

  const navigate = useNavigate();
  const location = useLocation();
 
  const [isOpen, setIsOpen] = useState(false)
  const handleLogout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  
   
  }


  return (

    <>
    {/* Mobile trigger button (hamburger) */}
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden fixed top-4 left-4 z-50 text-[#FEF9D0] p-2 rounded-lg bg-[#2F5B44] shadow-[0_0_30px_6px_rgba(0,0,0,0.45)]"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {isOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>

    {/* Mobile overlay */}
    {isOpen && (
      <div
        className="md:hidden fixed inset-0 bg-black/60 z-40"
        onClick={() => setIsOpen(false)}
      />
    )}

    {/* Mobile drawer */}
    <div className={`sm:hidden fixed top-0 left-0 h-full w-72 transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="relative h-full m-2 rounded-2xl bg-[#2F5B44] shadow-[0_0_30px_6px_rgba(0,0,0,0.45)]">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-[#FEF9D0] p-2 rounded-lg hover:bg-white/10 focus:outline-none"
          aria-label="Close sidebar"
        >
          ×
        </button>
        <div className="flex-1 flex flex-col justify-between p-6 h-full">
          <div className="flex flex-col gap-10">
            <div className="mt-4">
              <img src={image1} alt="logo" className="mx-auto block"  width={180} height={180} />
            </div>
            <nav className="flex flex-col gap-8 mt-10">
              <div className=" flex flex-row items-center gap-3 ">
                  <img src={location.pathname === "/admin/allblogs" ? allBlogsIconActive : image2} alt="logo" className=""  width={40} height={40} />
                  <Link to="/admin/allblogs" onClick={() => setIsOpen(false)}>
                    <span className={`font-inter text-xl font-normal capitalize ${location.pathname === "/admin/allblogs" ? "text-yellow-400" : "text-[#FEF9D0]"}`}>All Blogs</span>
                  </Link>
              </div>
              <div className=" flex flex-row items-center gap-3 ">
                  <img src={location.pathname === "/admin/createblog" ? createIconActive : image3} alt="logo" className=""  width={40} height={40} />
                  <Link to="/admin/createblog" onClick={() => setIsOpen(false)}>
                    <span className={`font-inter text-xl font-normal capitalize ${location.pathname === "/admin/createblog" ? "text-yellow-400" : "text-[#FEF9D0]"}`}>Create a Blog</span>
                  </Link>
              </div>
            </nav>
          </div>
          <div className=" flex flex-row items-center gap-3">
              <img src={image5} alt="logo" className=""  width={40} height={40} />
              <Link to="/admin/blogs" onClick={() => setIsOpen(false)}>
                <span className="text-[#FEF9D0] font-inter text-2xl font-normal capitalize">Logout</span>
              </Link> 
          </div>
        </div>
      </div>
    </div>

    {/* Desktop / Web sidebar (unchanged) */}
    <div className="min-h-[100vh]   flex flex-col    m-2 rounded-2xl bg-[#2F5B44] shadow-[0_0_30px_6px_rgba(0,0,0,0.45)] hidden md:flex"> 
      <div className="flex-1 flex flex-col justify-between p-6">
        <div className="flex flex-col gap-10">
          <div className="mt-4">
            <img src={image1} alt="logo" className="mx-auto block"  width={180} height={180} />
          </div>
          <nav className="flex flex-col gap-8 mt-10">
            <div className=" flex flex-row items-center gap-3 ">
                <img src={location.pathname === "/admin/allblogs" ? allBlogsIconActive : image2} alt="logo" className=""  width={40} height={40} />
                <Link to="/admin/allblogs">
                  <span className={`font-inter text-xl font-normal capitalize ${location.pathname === "/admin/allblogs" ? "text-yellow-400" : "text-[#FEF9D0]"}`}>All Blogs</span>
                </Link>
            </div>
            <div className=" flex flex-row items-center gap-3 ">
                <img src={location.pathname === "/admin/createblog" ? createIconActive : image3} alt="logo" className=""  width={40} height={40} />
                <Link to="/admin/createblog">
                  <span className={`font-inter text-xl font-normal capitalize ${location.pathname === "/admin/createblog" ? "text-yellow-400" : "text-[#FEF9D0]"}`}>Create a Blog</span>
                </Link>
            </div>
          </nav>
        </div>
        <div className=" flex flex-row items-center gap-3 cursor-pointer" onClick={handleLogout}>
            <img src={image5} alt="logo" className=""  width={40} height={40} />
         
              <span className="text-[#FEF9D0] font-inter text-2xl font-normal capitalize">Logout</span>
          
        </div>
      </div>
    </div>
  
    </>
  )

}