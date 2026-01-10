

import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import SEO from "../../components/SEO";
import { BlogHook } from "../../Hook/blogs/BlogHook";
import Navbar2 from "../../components/Navbar2";
import { ToastContainer } from "react-toastify";

 


export const Blog=()=>{
    const {canonical}=useParams();
    const [blog,loading,blogPostStructuredData]=BlogHook(canonical);



    let HeadingTag = blog?.sectionOne?.typeOfH|| "h2"
    let HeadingTagTwo = blog?.sectionTwo?.typeOfH || "h2"
    let HeadingTagThree = blog?.sectionThree?.typeOfH || "h2"
    let HeadingTagFour = blog?.sectionFour?.typeOfH || "h2"
    let HeadingTagFive = blog?.sectionFive?.typeOfH || "h2"
    let HeadingTagSix = blog?.sectionSix?.typeOfH || "h2"
    let HeadingTagSeven = blog?.sectionSeven?.typeOfH || "h2"
    let HeadingTagEight = blog?.sectionEight?.typeOfH || "h2"



  // if(blog?.title){
  //   const HeadingTag = getSafeHeadingTag(blog?.sectionOne?.typeOfH, "h1");
  //   const HeadingTagTwo = getSafeHeadingTag(blog?.sectionTwo?.typeOfH, "h2");
  //   const HeadingTagThree = getSafeHeadingTag(blog?.sectionThree?.typeOfH, "h3");
  //   const HeadingTagFour = getSafeHeadingTag(blog?.sectionFour?.typeOfH, "h4");
  //   const HeadingTagFive = getSafeHeadingTag(blog?.sectionFive?.typeOfH, "h5");
  //   const HeadingTagSix = getSafeHeadingTag(blog?.sectionSix?.typeOfH, "h6");
  //   const HeadingTagSeven = getSafeHeadingTag(blog?.sectionSeven?.typeOfH, "h7");
  //   const HeadingTagEight = getSafeHeadingTag(blog?.sectionEight?.typeOfH, "h8");
  // }
    const formatDate = (dateValue) => {
   
      if (!dateValue) return "";
      const d = new Date(dateValue);
      if (Number.isNaN(d.getTime())) return "";
      const parts = new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }).formatToParts(d);

      const day = parts.find((p) => p.type === "day")?.value;
      const month = parts.find((p) => p.type === "month")?.value;
      const year = parts.find((p) => p.type === "year")?.value;

      if (!day || !month || !year) return "";
      const monthWithDot = month.endsWith(".") ? month : `${month}.`;
      return `${day} ${monthWithDot} ${year}`;
    };

  

    // =============================


    useEffect(()=>{
        window.scrollTo(0,0)
      }
      ,[])


       // Smooth scroll styles
const smoothScrollStyles = `
/* Smooth and slower page scroll */
html {
  scroll-behavior: smooth;
  scroll-snap-type: y proximity;
}

body {
  scroll-behavior: smooth;
}

* {
  scroll-behavior: smooth;
}

/* Make scroll even smoother and slower */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

/* Add momentum scrolling for iOS */
body {
  -webkit-overflow-scrolling: touch;
}

/* Custom scrollbar styling for smoother experience */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #2F5B44;
  border-radius: 4px;
  transition: background 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: #1e3d2a;
}

/* Swiper custom styles */
.swiper-slide {
  width: calc((100% - 64px) / 3) !important;
  max-width: 400px !important;
}

@media (max-width: 1023px) {
  .swiper-slide {
    width: calc((100% - 24px) / 2) !important;
  }
}

@media (max-width: 767px) {
  .swiper-slide {
    width: 100% !important;
  }
}

/* Third section Swiper styles */
.third-section-swiper {
  height: 100% !important;
  min-height: 100% !important;
}

.third-section-swiper .swiper-slide {
  width: 100% !important;
  max-width: none !important;
  height: 100% !important;
  min-height: 100% !important;
}

.third-section-swiper .swiper-slide-active {
  transform: scale(1.02);
  transition: all 0.3s ease;
}

.third-section-swiper .swiper-slide-prev,
.third-section-swiper .swiper-slide-next {
  opacity: 0.7;
  transition: all 0.3s ease;
}

/* Vertical Swiper specific styles */
.third-section-swiper.swiper-vertical {
  height: 100% !important;
  min-height: 100% !important;
}

.third-section-swiper.swiper-vertical .swiper-wrapper {
  flex-direction: column;
  height: 100% !important;
}

.third-section-swiper .swiper-wrapper {
  height: 100% !important;
}
`;


   
    
    
     
    
    return (
        <>
        {
            blog?.title?(
                
                <>

               <SEO
                title= {blog?.title}
                description={blog?.description}
                keywords={blog?.keywords}
                canonical= {`/DigitalTrends/AffordableWebDesign/${blog?.canonical}`}
                structuredData={blogPostStructuredData}
              />

                <div className="min-h-screen bg-[#FEF9D0]"> 

                    <Navbar2 />   
                    <style>{smoothScrollStyles}</style>
                   <main className="container mx-auto max-w-7xl px-8 py-8">
                   <section>
                   <div className="flex items-center justify-between  mt-[10rem] mb-6"> 
                        <div>
                           <HeadingTag className="text-5xl sm:text-3xl font-semibold text-[#2F5B44] max-w-2xl break-words ">
                             {blog?.sectionOne?.title}
                           </HeadingTag>
                        </div>
                        <div className="shrink-0 flex items-center gap-2 mr-[2rem]">                                                              
                            <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759050824/Group_1_lgh8oa.svg" alt="Published icon" className="w-4 h-4" />
                            <span className="hidden sm:inline text-[#2F5B44] font-bold">DEVEXT</span>
                            <span className="text-[rem] text-[#2F5B44]" >{formatDate(blog?.data|| blog?.createdAt)}</span>       
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 items-center justify-between mt-2 text-[#2F5B44] text-sm mb-[2rem]">
                      <p>{blog?.sectionOne?.paragraph1}</p>
                      <p>{blog?.sectionOne?.paragraph2}</p>

                    </div>
                    <div className="mt-4 rounded-xl overflow-hidden relative">
                      <img src={blog?.images[0]?.secure_url  || "https://res.cloudinary.com/daop3bufa/image/upload/v1759050848/39fe9b9d1d42d713a96f4061d8de02a0c59fabde_sm65le.jpg"} alt={blog?.altImageOne} className="w-full h-[600px] object-cover " />
                      <span className="ml-[2rem] mb-[2rem] absolute bottom-3 left-3 inline-flex items-center gap-2 text-white text-lg">
                        Written By
                        <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759050825/Ellipse_9_kvhzov.svg" alt="DEVEXT logo" className="w-12 h-12" />
                        </span>

                    </div>
                    <div>
                      <a href={blog?.linkOne} target="_blank" rel="noopener noreferrer" >
                      <p className="mt-4 underline decoration-1 underline-offset-4">{blog?.linkOne}</p>

                      </a>
                      
                      
                    </div>
                    
                    

                   </section>  


                   {/* section two  */}

                   <section className="mt-6 space-y-6 text-[#2F5B44] leading-relaxed ">

                    <HeadingTagTwo className="text-3xl sm:text-2xl font-semibold text-[#2F5B44] max-w-2xl break-words">
                      {blog?.sectionTwo?.title}
                    </HeadingTagTwo>
                    <p>{blog?.sectionTwo?.paragraph1}</p>
                    <ul>
                      {blog?.sectionTwo?.paragraphs.map((item, index) => (
                        <li className="list-disc list-inside mb-4" key={index}>{item}</li>
                      ))}
                    </ul>
                    <ol>
                      {blog?.sectionTwo?.ul.map((item, index) => (
                        <li className="list-decimal list-inside mb-4" key={index}>{item}</li>
                      ))}
                    </ol>

                    <a href={blog?.linkTwo} target="_blank" rel="noopener noreferrer">
                    <p className="mt-4 underline decoration-1 underline-offset-4">{blog?.linkTwo}</p>
                    


                    </a>
                      
                  

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="rounded-xl overflow-hidden">
                        <img src={blog?.images[1]?.secure_url  || "https://res.cloudinary.com/daop3bufa/image/upload/v1759050847/1cc2cadd3aac660d21d6e6394f98d416cda2ffda_a3irmh.jpg"} alt={blog?.altImageTwo} className="w-full h-full object-cover" />
                      </div>
                      <div className="rounded-xl overflow-hidden">
                        <img src={blog?.images[2]?.secure_url  || "https://res.cloudinary.com/daop3bufa/image/upload/v1759050847/1cc2cadd3aac660d21d6e6394f98d416cda2ffda_a3irmh.jpg"} alt={blog?.altImageThree} className="w-full h-full object-cover" />
                      </div>
                    </div>




                   </section>

                    {/* section three */}
                   <section className="mt-6 space-y-6 text-[#2F5B44] leading-relaxed "> 

                    <HeadingTagThree className="text-3xl sm:text-2xl font-semibold text-[#2F5B44] max-w-3xl break-words">{blog?.sectionThree?.title}</HeadingTagThree>
                    <p>{blog?.sectionThree?.paragraph1}</p>
                    <a href={blog?.linkThree} target="_blank" rel="noopener noreferrer">
                    <p className="mt-4 underline decoration-1 underline-offset-4">{blog?.linkThree}</p>
                      
                    </a>
                      
                    

                    <ul>
                      {blog?.sectionThree?.paragraphs?.map((item, index) => (
                        <li className="list-disc list-inside mb-4" key={index}>{item}</li>
                      ))}
                    </ul>
                    <ol>
                      {blog?.sectionThree?.ol?.map((item, index) => (
                        <li className="list-decimal list-inside mb-4" key={index}>{item}</li>
                      ))}
                    </ol>




                   </section>


                   {/* section four */}
                   <section className="mt-6 space-y-6 text-[#2F5B44] leading-relaxed ">

                    <HeadingTagFour className="text-3xl sm:text-2xl font-semibold text-[#2F5B44]">{blog?.sectionFour?.title}</HeadingTagFour>
                    <p>{blog?.sectionFour?.paragraph1}</p>
                    <ul>
                      {blog?.sectionFour?.paragraphs?.map((item, index) => (
                        <li className="list-disc list-inside mb-4" key={index}>{item}</li>
                      ))}
                    </ul>
                    <ol>
                      {blog?.sectionFour?.ul?.map((item, index) => (
                        <li className="list-decimal list-inside mb-4" key={index}>{item}</li>
                      ))}
                    </ol>





                   </section>


                   {/* section five */}
                   <section className="mt-6 space-y-6 text-[#2F5B44] leading-relaxed ">
                    <HeadingTagFive className="text-3xl sm:text-2xl font-semibold text-[#2F5B44]">{blog?.sectionFive?.title}</HeadingTagFive>
                    <p>{blog?.sectionFive?.paragraph1}</p>
                    <ul>
                      {blog?.sectionFive?.paragraphs?.map((item, index) => (
                        <li className="list-disc list-inside mb-4" key={index}>{item}</li>
                      ))}
                    </ul>
                    <ol>
                      {blog?.sectionFive?.ul?.map((item, index) => (
                        <li className="list-decimal list-inside mb-4" key={index}>{item}</li>
                      ))}
                    </ol>

                   </section>


                   {/* section six  */}

                   <section className="mt-6 space-y-6 text-[#2F5B44] leading-relaxed">
                   <HeadingTagSix className="text-3xl sm:text-2xl font-semibold text-[#2F5B44]">{blog?.sectionSix?.title}</HeadingTagSix>
                   <p>{blog?.sectionSix?.paragraph1}</p>
                   <ul>
                    {blog?.sectionSix?.paragraphs?.map((item, index) => (
                      <li className="list-disc list-inside mb-4" key={index}>{item}</li>
                    ))}
                   </ul>
                   <ol>
                    {blog?.sectionSix?.ul?.map((item, index) => (
                      <li className="list-decimal list-inside mb-4" key={index}>{item}</li>
                    ))}
                   </ol>

                   
                   </section>

                   {/* section seven */}
                   <section className="mt-6 space-y-6 text-[#2F5B44] leading-relaxed">

                    <HeadingTagSeven className="text-3xl sm:text-2xl font-semibold text-[#2F5B44]">{blog?.sectionSeven?.title}</HeadingTagSeven>
                    <p>{blog?.sectionSeven?.paragraph1}</p>
                    <ul>
                      {blog?.sectionSeven?.paragraphs?.map((item, index) => (
                        <li className="list-disc list-inside mb-4" key={index}>{item}</li>
                      ))}
                    </ul>
                    <ol>
                      {blog?.sectionSeven?.ul?.map((item, index) => (
                        <li className="list-decimal list-inside mb-4" key={index}>{item}</li>
                      ))}
                    </ol>

                  

                   </section>

                   {/* section eight */}

                   <section className="mt-6 space-y-6 text-[#2F5B44] leading-relaxed">

                    <HeadingTagEight className="text-3xl sm:text-2xl font-semibold text-[#2F5B44]">{blog?.sectionEight?.title}</HeadingTagEight>
                    <p>{blog?.sectionEight?.paragraph1}</p>
                    <ul>
                      {blog?.sectionEight?.paragraphs?.map((item, index) => (
                        <li className="list-disc list-inside mb-4" key={index}>{item}</li>
                      ))}
                    </ul>
                    <ol>
                      {blog?.sectionEight?.ul?.map((item, index) => (
                        <li className="list-decimal list-inside mb-4" key={index}>{item}</li>
                      ))}
                    </ol>

               


                   </section>


    
                   </main>




                 </div>  

                </>



            ):(
              loading ? (
                <div className="min-h-screen bg-[#FEF9D0] flex items-center justify-center">
                  <div
                    className="h-12 w-12 rounded-full border-4 border-[#2F5B44]/20 border-t-[#2F5B44] animate-spin"
                    aria-label="Loading blog"
                    role="status"
                  />
                </div>
              ) : (
                <div className="min-h-screen bg-[#FEF9D0] flex items-center justify-center text-[#2F5B44]">
                  Blog not found
                </div>
              )
            )
        }

        <ToastContainer></ToastContainer>
        
        
        </>
    )

}