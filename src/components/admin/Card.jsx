

import { Link } from "react-router-dom";
const blogImage="https://res.cloudinary.com/daop3bufa/image/upload/v1759050848/39fe9b9d1d42d713a96f4061d8de02a0c59fabde_sm65le.jpg"
const edite="https://res.cloudinary.com/daop3bufa/image/upload/v1765105085/edite_qugvii.svg";
const deleteImage="https://res.cloudinary.com/daop3bufa/image/upload/v1765106546/delete_unlqol.svg"

export const Card = ({title,description,image}) => {


    return(
        <>
                 <div className="rounded-2xl bg-[#FEF9D0]/10 p-4">
                <img src={blogImage} alt="blog image" className=" w-full rounded-2xl"   />

                     
                <h3 className="text-xl font-bold text-[#FEF9D0] mb-4 text-center">Explore the Latest Digital Trends</h3>
                <p className="text-[#FEF9D0] opacity-80 text-sm mb-6 leading-relaxed text-center"> Lorem Ipsum is simply dummy text of the printing and typesetting  dummy text ever since the 1500s, when an unknown prin </p>
                <div className="flex flex-row items-center justify-end gap-3">
                    <Link to="/admin/edit-blog">
                    <img src={edite} alt="edit" className="w-4 h-4" />
                    </Link>

                    <Link to="/admin/delete-blog">
                    <img src={deleteImage} alt="delete" className="w-4 h-4" />

                    </Link>
                   
                   

                </div>

                </div>

        </>
    )
}