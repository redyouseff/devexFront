import Navbar from "../components/Navbar"
import SEO from "../components/SEO"
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';








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

// import bacground from "/images/blogs/6ea1bb9e3fb7abc1288b8600edddbfc333ea0e28.jpg";
// import bacgroundSection from "/images/blogs/Devext Pattern 1 3.svg";
// import image1 from "/images/blogs/39fe9b9d1d42d713a96f4061d8de02a0c59fabde.jpg";
// import image2 from "/images/blogs/1cc2cadd3aac660d21d6e6394f98d416cda2ffda.jpg";
// import image3 from "/images/blogs/screencapture-alwidadtaxation-2025-07-11-16_12_43 1.svg";
// import image4 from "/images/blogs/39fe9b9d1d42d713a96f4061d8de02a0c59fabde.jpg";
// import image5 from "/images/blogs/39fe9b9d1d42d713a96f4061d8de02a0c59fabde.jpg";
// import image6 from "/images/blogs/1cc2cadd3aac660d21d6e6394f98d416cda2ffda.jpg";
// import downarrow from "/images/blogs/Vector.svg";


const blogs =()=>{
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

    const cards = [
      { id: 1, image: "https://res.cloudinary.com/daop3bufa/image/upload/v1759050848/39fe9b9d1d42d713a96f4061d8de02a0c59fabde_sm65le.jpg", title: 'Explore the Latest Digital Trends', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
      { id: 2, image: "https://res.cloudinary.com/daop3bufa/image/upload/v1759050834/screencapture-alwidadtaxation-2025-07-11-16_12_43_1_nhcba9.svg", title: 'Explore the Latest Digital Trends', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
      { id: 3, image: "https://res.cloudinary.com/daop3bufa/image/upload/v1759050834/screencapture-alwidadtaxation-2025-07-11-16_12_43_1_nhcba9.svg", title: 'Explore the Latest Digital Trends', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
      { id: 4, image: "https://res.cloudinary.com/daop3bufa/image/upload/v1759050848/39fe9b9d1d42d713a96f4061d8de02a0c59fabde_sm65le.jpg", title: 'Explore the Latest Digital Trends', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
      { id: 5, image: "https://res.cloudinary.com/daop3bufa/image/upload/v1759050848/39fe9b9d1d42d713a96f4061d8de02a0c59fabde_sm65le.jpg", title: 'Explore the Latest Digital Trends', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
      { id: 6, image: "https://res.cloudinary.com/daop3bufa/image/upload/v1759050834/screencapture-alwidadtaxation-2025-07-11-16_12_43_1_nhcba9.svg", title: 'Explore the Latest Digital Trends', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    ];
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
            <div className="max-w-4xl text-center">
            <h1 className="text-[20px] sm:text-[40px] lg:text-[48px] font-medium leading-tight mb-4 text-[#FEF9D0]  mx-auto  ">
            Explore the Latest Digital Trends
            </h1>
            
           
            <p className="text-base sm:text-lg mb-8 leading-relaxed text-[#FEF9D0] opacity-80 max-w-5xl mx-auto">
            Stay ahead of the curve with our curated insights into today's fast-moving digital world. From innovative technologies to creative design strategies and market shifts, we bring you the latest digital trends shaping industries and inspiring fresh ideas. 
            </p>  
          </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.map((card) => (
              <div key={card.id} className="bg-[#2F5B44] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="rounded-xl mb-6 h-48 overflow-hidden">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-[#FEF9D0] mb-4 text-center">{card.title}</h3>
                <p className="text-[#FEF9D0] opacity-80 text-sm mb-6 leading-relaxed text-center">{card.description}</p>
                <button className="relative w-40% text-center mx-auto border border-[#FEF9D0] text-[#FEF9D0] py-3 px-6 rounded-full font-medium transition-colors flex items-center justify-center">
                  Read More
                 <span className="relative w-4 h-4 ml-2 inline-block">

                 </span>
                </button>
              </div>   
            ))}
          </div>
        </div>
      </section>
       
 
        </>
    )
}

export default blogs