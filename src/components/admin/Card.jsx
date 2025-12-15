

import { Link } from "react-router-dom";
import { CardHook } from "../../Hook/admin/CardHook";
import { ToastContainer } from "react-toastify";
const blogImage="https://res.cloudinary.com/daop3bufa/image/upload/v1759050848/39fe9b9d1d42d713a96f4061d8de02a0c59fabde_sm65le.jpg"
const edite="https://res.cloudinary.com/daop3bufa/image/upload/v1765105085/edite_qugvii.svg";
const deleteImage="https://res.cloudinary.com/daop3bufa/image/upload/v1765106546/delete_unlqol.svg"

export const Card = ({title,description,images,id}) => {
    
   
    const [loading,handleDelete]=CardHook();
     
    

  

    return(
        <>
                 <div className="rounded-2xl bg-[#FEF9D0]/10 p-4">
                <img src={images[0]?.secure_url || blogImage} alt="blog image" className=" w-full rounded-2xl h-48 "   />



                <h3 className="text-xl font-bold text-[#FEF9D0] mb-4 text-center">{title || "Explore the Latest Digital Trends"}</h3>
                <p className="text-[#FEF9D0] opacity-80 text-sm mb-6 leading-relaxed text-center">{description || "Lorem Ipsum is simply dummy text of the printing and typesetting  dummy text ever since the 1500s, when an unknown prin"}</p>
                <div className="flex flex-row items-center justify-end gap-3">
                    <Link to={`/admin/editeblog/${id}`}>
                    <img src={edite} alt="edit" className="w-4 h-4" />
                    </Link>

                    

                   
                   <div>
                   {loading ? (
                       <div className="w-4 h-4 border-2 border-[#FEF9D0] border-t-transparent rounded-full animate-spin"></div>
                   ) : (
                       <Link>
                       <img src={deleteImage} alt="delete" className="w-4 h-4 cursor-pointer" onClick={() => handleDelete(id)} />
                       </Link>
                   )}
                   </div>
                   

                </div>
                <ToastContainer />

                </div>

        </>
    )
}