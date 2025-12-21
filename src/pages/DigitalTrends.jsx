
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import { GetAllBlogsHook } from "../Hook/admin/GetAllBlogsHook";
import { Link } from "react-router-dom";

const defaultImage = "https://res.cloudinary.com/daop3bufa/image/upload/v1759050834/screencapture-alwidadtaxation-2025-07-11-16_12_43_1_nhcba9.svg";



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


 const DigitalTrends =()=>{
    const MotionDiv = motion.div;
    const fadeRight = {
      hidden: { opacity: 0, x: 24 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };
    // Structured Data for Blogs Page
    const blogsStructuredData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Devext Blog",
      "description": "Articles and updates about development, programming, and modern technologies",
      "url": "https://devext.io/blogs",
      "publisher": {
        "@type": "Organization",
        "name": "Devext",
        "logo": {
          "@type": "ImageObject",
          "url": "https://devext.io/images/navbar/Logo_Devext-removebg-preview 1.png"
        }
      },
      "blogPost": [
        {
          "@type": "BlogPosting",
          "headline": "Explore the Latest Digital Trends",
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          "url": "https://devext.io/blogs/1"
        }
      ]
    };


    const [allblogs, loading, handleSearch, handlePosted, post, unpost, all]=GetAllBlogsHook();
    console.log(allblogs);

  

    return(
        <>
         <SEO 
              title="Blog - Devext"
              description="Discover the latest articles and updates about development, programming, and modern technologies in the Devext blog"
              keywords="tech blog, programming articles, web development, modern technologies, programming, app development, tech articles"
              canonical="/blogs"
              structuredData={blogsStructuredData}
            />
          <Navbar />
          <style>{smoothScrollStyles}</style>

              {/* Hero Section */}
              <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-gradient-to-br from-[#2F5B44] via-[#1e3d2a] to-[#0f1f15] -mt-[4rem]">
             {/* Image Background */}
             <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src="https://res.cloudinary.com/daop3bufa/image/upload/v1759050898/6ea1bb9e3fb7abc1288b8600edddbfc333ea0e28_argdky.jpg"
                  alt="Background"
                  className="absolute w-full h-full object-cover opacity-30"
                  style={{ 
                    width: '100vw',
                    height: '100vh',
                    left: '0',
                    top: '0',
                    objectFit: 'cover',
                    position: 'absolute'
                  }}
                />
              </div>

          {/* Content */}
          
        <div className="container mx-auto max-w-6xl relative z-20 px-4 sm:px-6 pt-10 sm:pt-20 flex justify-center -mt-23">
            <MotionDiv
              className="max-w-4xl text-center"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
            <h1 className="text-[20px] sm:text-[40px] lg:text-[48px] font-medium leading-tight mb-4 text-[#FEF9D0]  mx-auto  ">

            Explore the Latest Digital Trends

            </h1>
            
           
            <p className="text-base sm:text-lg mb-8 leading-relaxed text-[#FEF9D0] opacity-80 max-w-5xl mx-auto">
            Stay ahead of the curve with our curated insights into today's fast-moving digital world. From innovative technologies to creative design strategies and market shifts, we bring you the latest digital trends shaping industries and inspiring fresh ideas. 
            </p>  
          </MotionDiv>
        </div>
      </section>


      {/* second section */}
      <section
        className="py-20 bg-[#FEF9D0]"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/daop3bufa/image/upload/v1759050824/Devext_Pattern_1_3_kdsko3.svg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center mb-16">
        
          </div>

          <MotionDiv
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {
                loading ? (
                    <div className="flex justify-center items-center h-full">
                        <div className="w-10 h-10 border-t-transparent border-b-transparent border-r-transparent border-l-transparent border-2 border-[#FEF9D0] rounded-full animate-spin"></div>
                    </div>
                ) : (
                    allblogs.map((blog) => (   
                        <div key={blog._id} className="bg-[#2F5B44] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="rounded-xl mb-6 h-48 overflow-hidden">
                                <img src={blog.images[0]?.secure_url||defaultImage} alt={blog.title} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-[#FEF9D0] mb-4 text-center">{blog.title}</h3>
                            <p className="text-[#FEF9D0] opacity-80 text-sm mb-6 leading-relaxed text-center">{blog.description}</p>
                            <Link to={blog.canonical}>
                                <button className="relative w-40% text-center mx-auto border border-[#FEF9D0] text-[#FEF9D0] py-3 px-6 rounded-full font-medium transition-colors flex items-center justify-center">
                                    Read More
                                    <span className="relative w-4 h-4 ml-2 inline-block">
                                        <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759052693/Vector_uzjrho.svg" alt="up arrow " />
                                    </span>
                                </button>
                            </Link> 
                        </div>
                    ))
                )
            }
          </MotionDiv>
        </div>
      </section>





              
        </>
    )
}

export default DigitalTrends;