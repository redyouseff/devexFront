import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Custom styles for Swiper
const swiperStyles = `
  .swiper-container {
    overflow: hidden !important;
  }
  .swiper-wrapper {
    display: flex !important;
  }
  .swiper-slide {
    flex-shrink: 0 !important;
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
`;
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import uparrow from "/images/home/Vector.svg"
import logo2  from "/images/about/Devext Pattern 1 2.svg"
import image1 from "/images/services/314320 1 1.svg";
import image2 from "/images/services/314320 1 2.svg";
import image3 from "/images/services/314320 1 3.svg";
import image5 from "/images/services/314320 1 5.svg";
import card1 from "/images/services/screencapture-alwidadtaxation-2025-07-11-16_12_43 1.svg";
import card2 from "/images/services/screencapture-alwidadtaxation-2025-07-11-16_12_43 2.svg";
import card3 from "/images/services/screencapture-alwidadtaxation-2025-07-11-16_12_43 3.svg";
import card4 from "/images/services/screencapture-alwidadtaxation-2025-07-11-16_12_43 4.svg";
import firstsectionarrow from "/images/services/Vector.svg";
import leftarrow from "/images/services/Frame 18.svg";
import rightarrow from "/images/services/Frame 17.png";


function Services() {
  // Cards data array
  const cardsData = [
    {
      id: 1,
      type: 'image',
      title: 'What Tech Company Executives Expect From Branding In 2026  ',
      image: card1
    },
    {
      id: 2,
      type: 'image',
      title: 'What Tech Company Executives Expect From Branding In 2026 ',
      image: card2
    },
    {
      id: 3,
      type: 'image',
      title: 'What Tech Company Executives Expect From Branding In 2026  ',
      image: card3
    },
    {
      id: 4,
      type: 'image',
      title: 'What Tech Company Executives Expect From Branding In 2026  ',
      image: card4
    },
  
   
  ];

  // Swiper instance ref
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Navigation functions for custom arrows
  const nextSlide = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  const prevSlide = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  return (
    <>
    <style>{swiperStyles}</style>
    <div className="min-h-screen bg-gray-100">

    <Navbar />
               
      {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
           {/* Video Background */}
           <div className="absolute inset-0 w-full h-full overflow-hidden">
                                 <div className="absolute inset-0 bg-[linear-gradient(257.99deg,rgba(254,249,208,0.1)_0%,#FEF9D040_1%,#2F5B44_95%)] z-10"></div>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute w-full h-full object-cover"
                  style={{ 
                    width: '100vw',
                    height: '100vh',
                    left: '0',
                    top: '0',
                    objectFit: 'cover',
                    position: 'absolute'
                  }}
                >
                  <source src="https://res.cloudinary.com/dp5bcywc7/video/upload/v1754999153/Untitled_Video_1_rthb85.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

         {/* Content */}
          
         <div className="container mx-auto max-w-6xl relative z-20 px-4 sm:px-6 pt-10 sm:pt-20 flex justify-center -mt-20">
            <div className="max-w-4xl text-center">
            <p className="text-[48px] sm:text-[56px] lg:text-[24px]  text-[#FFFFFF] mb-5">
            From Concept To Reality
            </p>
            
           
            <h4 className="text-[18px] sm:text-[20px] lg:text-[40px] mb-8 leading-relaxed text-[#E9F2CD] opacity-90 max-w-3xl mx-auto">
            Fusing Creativity With Marketing &<br/>
             Technology To Drive Business Growth
            </h4>
            <div className="flex  sm:flex-row gap-4 justify-center items-center pt-1">
            
              <Link 
                to="/services"
                className="bg-transparent border-2 border-[#E9F2CD] text-[#E9F2CD] px-6 py-3 rounded-full font-medium hover:bg-[#E9F2CD] hover:text-[#2F5B44] transition-colors flex items-center justify-center text-base"
              >
                Speak With Our Experts
                <img src={uparrow} alt="arrow" className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>   


                  {/* first Section */}
         <section className="relative min-h-[70vh]">
        <div className="absolute inset-0 hidden md:block">
          <div className="flex h-full">
            <div className="w-1/2 bg-[#E9F2CD]"></div>
            <div className="w-1/2 bg-[#2F5B44]"></div>
          </div>
        </div>
        
        <div className="relative h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
            
            {/* Left Content */}
            <div className="relative flex items-center justify-center p-8 sm:p-12 lg:p-16 bg-[#E9F2CD] overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute -left-90 top-0 w-full h-full flex items-center justify-start opacity-15">
                <img 
                  src={logo2} 
                  alt="Background Pattern" 
                  className="w-auto h-full object-contain object-left"
                  style={{ 
                    transform: 'scale(1.2) translateX(10%)',
                    filter: 'brightness(1.5) contrast(1.5) saturate(1.3)',
                    mixBlendMode: 'multiply'
                  }}
                />
              </div>
              
              {/* Content */}
              <div className="relative z-10 max-w-lg text-left">
                <h2 className="text-[36px] font-medium text-[#2F5B44] mb-6 leading-none tracking-normal uppercase whitespace-nowrap" style={{ fontFamily: 'Inter' }}>
                  WEB DESIGN & DEVELOPMENT
                </h2>
                <p className="text-[16px] sm:text-[17px] lg:text-[20px] font-normal text-[#2F5B44] mb-8 leading-relaxed">
                  Custom web & app development with strategic insights to generate greater brand engagement, higher conversions & measurable results
                </p>
                
                {/* Services List */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-[14px] sm:text-[15px] lg:text-[20px] text-[#2F5B44]">
                    <span className="w-2 h-2 bg-[#2F5B44] rounded-full mr-3"></span>
                    Custom Web Design & Development
                  </li>
                  <li className="flex items-center text-[14px] sm:text-[15px] lg:text-[20px] text-[#2F5B44]">
                    <span className="w-2 h-2 bg-[#2F5B44] rounded-full mr-3"></span>
                    Information Architecture & UX
                  </li>
                  <li className="flex items-center text-[14px] sm:text-[15px] lg:text-[20px] text-[#2F5B44]">
                    <span className="w-2 h-2 bg-[#2F5B44] rounded-full mr-3"></span>
                    eCommerce Design & Development
                  </li>
                  <li className="flex items-center text-[14px] sm:text-[15px] lg:text-[20px] text-[#2F5B44]">
                    <span className="w-2 h-2 bg-[#2F5B44] rounded-full mr-3"></span>
                    App Design & Development
                  </li>
                </ul>
                
                {/* Button */}
                <div className="flex justify-end">
                  <Link 
                    to="/services"
                    className="inline-flex items-right border-2 border-[#2F5B44] text-[#2F5B44] px-6 py-3 rounded-full hover:bg-[#2F5B44] hover:text-[#E9F2CD] transition-colors font-medium text-[16px]"
                  >
                    Explore Web Design Services
                    <img src={firstsectionarrow} alt="arrow" className="w-4 h-4 ml-4 mt-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative flex items-center justify-center bg-[#2F5B44] overflow-hidden">
              <img 
                src={image1} 
                alt="Services Image" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


                  {/* second Section */}
                  <section className="relative min-h-[80vh]">
        <div className="absolute inset-0 hidden md:block">
          <div className="flex h-full">
            <div className="w-1/2 bg-[#E9F2CD]"></div>
            <div className="w-1/2 bg-[#2F5B44]"></div>
          </div>
        </div>
        
        <div className="relative h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
            
            {/* Left Content */}
            <div className="relative flex items-center justify-center bg-[#2F5B44] overflow-hidden">
              <img 
                src={image2} 
                alt="Services Image" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="relative flex items-center justify-center p-8 sm:p-12 lg:p-16 font-['Inter'] overflow-hidden bg-[#2F5B44]">
              <div className="relative z-10 max-w-lg text-left">
                <h2 className="text-[36px] font-medium text-[#FEF9D0] mb-6 leading-none tracking-normal uppercase whitespace-nowrap" style={{ fontFamily: 'Inter' }}>
                  APP DESIGN & DEVELOPMENT
                </h2>
                <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal text-[#FEF9D0] mb-8 leading-relaxed">
                  Custom web & app development with strategic insights to<br/>
                  generate greater brand engagement, higher conversions &<br/>
                  measurable results
                </p>
                
                {/* Services List */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-[14px] sm:text-[15px] lg:text-[20px] text-[#FEF9D0]">
                    <span className="w-2 h-2 bg-[#FEF9D0] rounded-full mr-3"></span>
                    Custom Web Design & Development
                  </li>
                  <li className="flex items-center text-[14px] sm:text-[15px] lg:text-[20px] text-[#FEF9D0]">
                    <span className="w-2 h-2 bg-[#FEF9D0] rounded-full mr-3"></span>
                    Information Architecture & UX
                  </li>
                  <li className="flex items-center text-[14px] sm:text-[15px] lg:text-[20px] text-[#FEF9D0]">
                    <span className="w-2 h-2 bg-[#FEF9D0] rounded-full mr-3"></span>
                    eCommerce Design & Development
                  </li>
                  <li className="flex items-center text-[14px] sm:text-[15px] lg:text-[20px] text-[#FEF9D0]">
                    <span className="w-2 h-2 bg-[#FEF9D0] rounded-full mr-3"></span>
                    App Design & Development
                  </li>
                </ul>
                
                {/* Button */}
                <div className="flex justify-end">
                  <Link 
                    to="/services"
                    className="inline-flex items-center border-2 border-[#FEF9D0] text-[#FEF9D0] px-6 py-3 rounded-full hover:bg-[#FEF9D0] hover:text-[#2F5B44] transition-colors font-medium text-[16px]"
                  >
                    Explore App Developing Services
                    <img src={uparrow} alt="arrow" className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



               {/* third Section */}
        <section className="relative min-h-[70vh]">
         <div className="absolute inset-0 hidden md:block">
           <div className="flex h-full">
             <div className="w-1/2 bg-[#E9F2CD]"></div>
             <div className="w-1/2 bg-[#2F5B44]"></div>
           </div>
         </div>
         
         <div className="relative h-full">
           <div className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
             
             {/* Left Content */}
             <div className="relative flex items-center justify-center p-8 sm:p-12 lg:p-16 bg-[#E9F2CD] overflow-hidden">
               {/* Background Pattern */}
               <div className="absolute -left-90 top-0 w-full h-full flex items-center justify-start opacity-15">
                 <img 
                   src={logo2} 
                   alt="Background Pattern" 
                   className="w-auto h-full object-contain object-left"
                   style={{ 
                     transform: 'scale(1.2) translateX(10%)',
                     filter: 'brightness(1.5) contrast(1.5) saturate(1.3)',
                     mixBlendMode: 'multiply'
                   }}
                 />
               </div>
               
               {/* Content */}
               <div className="relative z-10 max-w-lg text-left">
                 <h2 className="text-[36px] font-medium text-[#2F5B44] mb-6 leading-none tracking-normal uppercase whitespace-nowrap" style={{ fontFamily: 'Inter' }}>
                   ECOMMERCE DEVELOPMENT
                 </h2>
                 <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal text-[#2F5B44] mb-8 leading-relaxed">
                   Custom eCommerce sites developed for superior performance,<br/>
                   greater conversions and engagement
                 </p>
                 
                 {/* Services List */}
                 <ul className=" mb-8">
                   <li className="flex items-center text-[14px] sm:text-[15px] lg:text-[16px] text-[#2F5B44]">
                     <span className="w-2 h-2 bg-[#2F5B44] rounded-full mr-3"></span>
                     eCommerce Design
                   </li>
                   <li className="flex items-center text-[14px] sm:text-[15px] lg:text-[16px] text-[#2F5B44]">
                     <span className="w-2 h-2 bg-[#2F5B44] rounded-full mr-3"></span>
                     eCommerce Development
                   </li>
                   <li className="flex items-center text-[14px] sm:text-[15px] lg:text-[16px] text-[#2F5B44]">
                     <span className="w-2 h-2 bg-[#2F5B44] rounded-full mr-3"></span>
                     eCommerce SEO
                   </li>
                   <li className="flex items-center text-[14px] sm:text-[15px] lg:text-[16px] text-[#2F5B44]">
                     <span className="w-2 h-2 bg-[#2F5B44] rounded-full mr-3"></span>
                     eCommerce Marketing
                   </li>
                 </ul>
                 
                 {/* Button */}
                 <div className="flex justify-end">
                   <Link 
                     to="/services"
                     className="inline-flex items-center border-2 border-[#2F5B44] text-[#2F5B44] px-6 py-3 rounded-full hover:bg-[#2F5B44] hover:text-[#E9F2CD] transition-colors font-medium text-[16px]"
                   >
                     Explore Ecommerce Services
                     <img src={firstsectionarrow} alt="arrow" className="w-4 h-4 ml-2" />
                   </Link>
                 </div>
               </div>
             </div>

             {/* Right Content */}
             <div className="relative flex items-center justify-center bg-[#2F5B44] overflow-hidden">
               <img 
                 src={image3} 
                 alt="Services Image" 
                 className="w-full h-full object-cover"
               />
             </div>
           </div>
         </div>
       </section>



        {/* fourth Section */}
        <section className="relative min-h-[80vh]">
        <div className="absolute inset-0 hidden md:block">
          <div className="flex h-full">
            <div className="w-1/2 bg-[#E9F2CD]"></div>
            <div className="w-1/2 bg-[#2F5B44]"></div>
          </div>
        </div>
        
        <div className="relative h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
            
            {/* Left Content */}
            <div className="relative flex items-center justify-center bg-[#2F5B44] overflow-hidden">
              <img 
                src={image2} 
                alt="Services Image" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="relative flex items-center justify-center p-8 sm:p-12 lg:p-16 font-['Inter'] overflow-hidden bg-[#2F5B44]">
              <div className="relative z-10 max-w-lg text-left">
                <h2 className="text-[36px] font-medium text-[#FEF9D0] mb-6 leading-none tracking-normal uppercase whitespace-nowrap" style={{ fontFamily: 'Inter' }}>
                  SHOPIFY WEBSITES
                </h2>
                <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal text-[#FEF9D0] mb-8 leading-relaxed">
                  Custom Shopify eCommerce sites designed, developed and<br/>
                  optimized for superior performance, better rankings and higher conversion
                  
                </p>
                
                {/* Services List */}
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center text-[14px] sm:text-[15px] lg:text-[16px] text-[#FEF9D0]">
                    <span className="w-2 h-2 bg-[#FEF9D0] rounded-full mr-3"></span>
                    Custom Web Design & Development
                  </li>
                  <li className="flex items-center text-[14px] sm:text-[15px] lg:text-[16px] text-[#FEF9D0]">
                    <span className="w-2 h-2 bg-[#FEF9D0] rounded-full mr-3"></span>
                    Information Architecture & UX
                  </li>
                  <li className="flex items-center text-[14px] sm:text-[15px] lg:text-[16px] text-[#FEF9D0]">
                    <span className="w-2 h-2 bg-[#FEF9D0] rounded-full mr-3"></span>
                    eCommerce Design & Development
                  </li>
                  <li className="flex items-center text-[14px] sm:text-[15px] lg:text-[16px] text-[#FEF9D0]">
                    <span className="w-2 h-2 bg-[#FEF9D0] rounded-full mr-3"></span>
                    App Design & Development
                  </li>
                </ul>
                
                {/* Button */}
                <div className="flex justify-end">
                  <Link 
                    to="/services"
                    className="inline-flex items-center border-2 border-[#FEF9D0] text-[#FEF9D0] px-6 py-3 rounded-full hover:bg-[#FEF9D0] hover:text-[#2F5B44] transition-colors font-medium text-[16px]"
                  >
                    Explore App Developing Services
                    <img src={uparrow} alt="arrow" className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


              {/* fifth Section */}
              <section className="relative min-h-[70vh]">
         <div className="absolute inset-0 hidden md:block">
           <div className="flex h-full">
             <div className="w-1/2 bg-[#E9F2CD]"></div>
             <div className="w-1/2 bg-[#2F5B44]"></div>
           </div>
         </div>
         
         <div className="relative h-full">
           <div className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
             
             {/* Left Content */}
             <div className="relative flex items-center justify-center p-8 sm:p-12 lg:p-16 bg-[#E9F2CD] overflow-hidden">
               {/* Background Pattern */}
               <div className="absolute -left-90 top-0 w-full h-full flex items-center justify-start opacity-15">
                 <img 
                   src={logo2} 
                   alt="Background Pattern" 
                   className="w-auto h-full object-contain object-left"
                   style={{ 
                     transform: 'scale(1.2) translateX(10%)',
                     filter: 'brightness(1.5) contrast(1.5) saturate(1.3)',
                     mixBlendMode: 'multiply'
                   }}
                 />
               </div>
               
               {/* Content */}
               <div className="relative z-10 max-w-lg text-left">
                 <h2 className="text-[36px] font-medium text-[#2F5B44] mb-6 leading-none tracking-normal uppercase" style={{ fontFamily: 'Inter' }}>
                   DIGITAL STRATEGIES &<br/>BRANDING
                 </h2>
                 <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal text-[#2F5B44] mb-8 leading-relaxed">
                   Integrating brand strategy with digital initiatives to improve<br/>
                   customer experience online & offline
                 </p>
                 
                 {/* Services List */}
                 <ul className=" mb-8">
                   <li className="flex items-center text-[14px] sm:text-[15px] lg:text-[16px] text-[#2F5B44]">
                     <span className="w-2 h-2 bg-[#2F5B44] rounded-full mr-3"></span>
                     Digital Strategy
                   </li>
                   <li className="flex items-center text-[14px] sm:text-[15px] lg:text-[16px] text-[#2F5B44]">
                     <span className="w-2 h-2 bg-[#2F5B44] rounded-full mr-3"></span>
                     Brand Strategy
                   </li>
                   <li className="flex items-center text-[14px] sm:text-[15px] lg:text-[16px] text-[#2F5B44]">
                     <span className="w-2 h-2 bg-[#2F5B44] rounded-full mr-3"></span>
                     Brand Identity
                   </li>
                   <li className="flex items-center text-[14px] sm:text-[15px] lg:text-[16px] text-[#2F5B44]">
                     <span className="w-2 h-2 bg-[#2F5B44] rounded-full mr-3"></span>
                     Logo Design
                   </li>
                 </ul>
                 
                 {/* Button */}
                 <div className="flex justify-center">
                   <Link 
                     to="/services"
                     className="inline-flex items-center border-2 border-[#2F5B44] text-[#2F5B44] px-6 py-3 rounded-full hover:bg-[#2F5B44] hover:text-[#E9F2CD] transition-colors font-medium text-[16px]"
                   >
                     Explore Digital & Branding Services
                     <img src={firstsectionarrow} alt="arrow" className="w-4 h-4 ml-2" />
                   </Link>
                 </div>
               </div>
             </div>

             {/* Right Content */}
             <div className="relative flex items-center justify-center bg-[#2F5B44] overflow-hidden">
               <img 
                 src={image5} 
                 alt="Services Image" 
                 className="w-full h-full object-cover"
               />
             </div>
           </div>
         </div>
       </section>

               {/* sixth Section */}
        <section className="relative py-20 px-6 bg-[#2F5B44]">
          <div className="container mx-auto max-w-6xl">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-[42px] font-medium text-[#FEF9D0] mb-4 leading-none tracking-normal text-center uppercase" style={{ fontFamily: 'Inter' }}>
                DIGITAL TRENDS
              </h2>
              <p className="text-[16px] sm:text-[18px] text-[#FEF9D0] opacity-90 max-w-2xl mx-auto">
                Discover The Latest Digital Strategies & Emerging Ideas For<br/>
                Business Growth
              </p>
              
              {/* Navigation Arrows */}
              <div className="flex items-center justify-start gap-4 mt-8">
                <button onClick={prevSlide} className="hover:opacity-70 transition-opacity">
                  <img src={leftarrow} alt="Previous" className="w-10 h-10" />
                </button>
                <button onClick={nextSlide} className="hover:opacity-70 transition-opacity">
                  <img src={rightarrow} alt="Next" className="w-10 h-10" />
                </button>
              </div>
            </div>

            {/* Swiper Container */}
            <div className="max-w-7xl mx-auto px-6">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={32}
                slidesPerView={3}
                slidesPerGroup={1}
                loop={true}
                speed={700}
                onSwiper={setSwiperInstance}
                centeredSlides={false}
                watchOverflow={true}
                freeMode={false}
                allowTouchMove={true}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                  },
                }}
                className="!overflow-hidden !pb-4"
                style={{ paddingLeft: '0px', paddingRight: '0px' }}
              >
              {cardsData.map((card) => (
                <SwiperSlide key={card.id}>
                  <div className="bg-[#FEF9D0] rounded-3xl overflow-hidden p-4 flex flex-col w-full" style={{ height: '220px' }}>
                    {/* Dynamic Card Content */}
                    <div className="h-32 relative overflow-hidden rounded-2xl">
                      {card.image ? (
                        // Use image from array if available
                        <img 
                          src={card.image} 
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        // Use pattern based on type if no image
                        <>
                          {card.type === 'tech' && (
                            <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-black relative overflow-hidden w-full h-full">
                              {/* Tech Network Pattern */}
                              <div className="absolute inset-0">
                                {/* Network nodes and connections */}
                                <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
                                  {/* Connection lines */}
                                  <g stroke="#3B82F6" strokeWidth="1" opacity="0.6">
                                    <line x1="50" y1="50" x2="120" y2="80" />
                                    <line x1="120" y1="80" x2="200" y2="60" />
                                    <line x1="200" y1="60" x2="280" y2="90" />
                                    <line x1="280" y1="90" x2="350" y2="70" />
                                    <line x1="50" y1="50" x2="80" y2="120" />
                                    <line x1="80" y1="120" x2="150" y2="140" />
                                    <line x1="150" y1="140" x2="250" y2="120" />
                                    <line x1="250" y1="120" x2="320" y2="150" />
                                    <line x1="120" y1="80" x2="150" y2="140" />
                                    <line x1="200" y1="60" x2="250" y2="120" />
                                  </g>
                                  
                                  {/* Network nodes */}
                                  <g fill="#3B82F6" opacity="0.8">
                                    <circle cx="50" cy="50" r="3" />
                                    <circle cx="120" cy="80" r="4" />
                                    <circle cx="200" cy="60" r="3" />
                                    <circle cx="280" cy="90" r="4" />
                                    <circle cx="350" cy="70" r="3" />
                                    <circle cx="80" cy="120" r="3" />
                                    <circle cx="150" cy="140" r="4" />
                                    <circle cx="250" cy="120" r="3" />
                                    <circle cx="320" cy="150" r="4" />
                                  </g>
                                  
                                  {/* Glowing effects */}
                                  <g fill="#60A5FA" opacity="0.4">
                                    <circle cx="120" cy="80" r="8" />
                                    <circle cx="280" cy="90" r="6" />
                                    <circle cx="150" cy="140" r="7" />
                                  </g>
                                </svg>
                                
                                {/* Additional geometric elements */}
                                <div className="absolute top-4 right-4 text-blue-400 opacity-30">
                                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          )}

                          {card.type === 'social' && (
                            <div className="bg-gradient-to-br from-blue-500 to-blue-700 relative overflow-hidden flex items-center justify-center w-full h-full">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                                  <span className="text-blue-600 font-bold text-xl">f</span>
                                </div>
                                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                                  <span className="text-white font-bold text-xl">▶</span>
                                </div>
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                  <span className="text-white font-bold text-xl">📷</span>
                                </div>
                                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                  <span className="text-white font-bold text-xl">in</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {card.type === 'grid' && (
                            <div className="bg-gray-100 relative overflow-hidden flex items-center justify-center w-full h-full">
                              <div className="grid grid-cols-3 gap-2 opacity-60">
                                {[...Array(9)].map((_, i) => (
                                  <div key={i} className="w-8 h-8 border border-gray-400 rounded"></div>
                                ))}
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>

                    <div className="pt-2 pb-2 flex-1 flex items-end">
                      <h3 className="text-[16px] font-medium text-[#2F5B44] text-center leading-tight w-full line-clamp-2" 
                          style={{ 
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}>
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
          </div>
        </section>

               





      <Footer />

      </div>

    </>
  
  );
}

export default Services;
