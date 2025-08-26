import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Thirdseciont from '../components/Thirdseciont';
import cardsShape from "/images/home/Frame 416.svg"

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
import icons from "/images/home/Frame 7.png"
import uparrow from "/images/home/Vector.svg"
import downarrow from "/images/home/Vector1.svg"
import icon1 from "/images/home/website mockup image 1.svg"
import icon2 from "/images/home/Vector2.png"
import icon3 from "/images/home/Devext Pattern 1 1.svg"

import logoFourthsection from "/images/home/Devext Pattern 2 1.svg"
import fifthsectionbackgroundIcon from "/images/home/Devext Pattern 2 2.svg"
import fiftharrowright from "/images/home/Frame 17.svg"
import fiftharrowleft from "/images/home/Frame 18.svg"
import image1 from "/images/home/screencapture-alwidadtaxation-2025-07-11-16_12_43 1.svg"
import image2 from "/images/home/screencapture-alwidadtaxation-2025-07-11-16_12_43 2.svg"
import image3 from "/images/home/screencapture-alwidadtaxation-2025-07-11-16_12_43 3.svg"
import image4 from "/images/home/screencapture-alwidadtaxation-2025-07-11-16_12_43 4.svg"
import image5 from "/images/home/screencapture-alwidadtaxation-2025-07-11-16_12_43 5.svg"
import image6 from "/images/home/screencapture-alwidadtaxation-2025-07-11-16_12_43 6.svg"
import circle1 from "/images/home/Ellipse 7.svg"
import circle2 from "/images/home/Ellipse 8.svg"
import circle3 from "/images/home/Ellipse 9.svg"
import circle4 from "/images/home/Ellipse 10.svg"
import circle5 from "/images/home/Ellipse 11.svg"
import circle6 from "/images/home/Ellipse 12.svg" 
import downarrow2green from "/images/home/arrow Down.svg"







// import location from "/images/home/Group.svg"

import name from "/images/home/name.svg"
import email from "/images/home/email.svg"
import phone from "/images/home/phone.svg"
import message from "/images/home/message.svg"
import companyname from "/images/home/Company Name.svg"

import whatsapp from "/images/home/WhatsApp.svg"
import instagram from "/images/home/Instagram.svg"
import linkedin from "/images/home/Linkedin.svg"
import line from "/images/home/Line 1.svg"
import backgroundsectionseven from "/images/home/Devext Pattern 1 7.png"

function Home() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  // Cards data for testimonials
  const cardsData = [
    {
      id: 1,
      type: 'testimonial',
      title: 'Joya Properties is a boutique Dubai real estate agency that delivers personalized, transparent service—tailored for buyers, sellers, and investors. The agency blends market expertise with trusted partnerships across top developers.',
      image: image1,
      circle: circle1,
      name: "joyaproperties.com",
      location: "Dubai"
    },
    {
      id: 2,
      type: 'testimonial',
      title: 'LDC Investment is a dynamic Saudi-based investment firm dedicated to crafting tailored financial strategies that elevate businesses and individual investors. With a sharp focus on sustainable growth and proactive market insight.',
      image: image2,
      circle: circle2,
      name: "ldc-investment.sa",
      location: "Riyadh"
    },
    {
      id: 3,
      type: 'testimonial',
      title: 'Sada Al Awael is a Saudi-based provider of top-quality medical equipment and supplies dedicated to supporting the healthcare sector. Driven by excellence and integrated services, they ensure client satisfaction with flexible payment options & fast Delivery.',
      image: image3,
      circle: circle3,
      name: "sada-alawael.sa",
      location: "Dubai",
    },
    {
      id: 4,
      type: 'testimonial',
      title: 'Joud & Karam delivers authentic Jordanian-Palestinian hospitality in the heart of Dubai. Specializing in desert safaris,  parties, corporate buffets and furniture rentals, they blend cultural tradition with modern flair to craft unforgettable experiences.',
      image: image4,
      circle: circle4,
      name: "joudandkaram.com",
      location: "Dubai"
    },
    {
      id: 5,
      type: 'testimonial',
      title: 'Al-Tal Al-Kabir is a leading provider of heavy and light construction equipment, offering cutting-edge machinery and reliable solutions for industrial and infrastructure projects across Saudi Arabia. With a commitment to quality and efficiency.',
      image: image5,
      circle: circle5,
      name: "Alwidadtaxation.com",
      location: "Dubai"
    },
    {
      id: 6,
      type: 'testimonial',
      title: 'Al-Widad Taxation & Procedures Follow Up brings over a decade of expert experience in UAE corporate tax and procedural compliance. Built on integrity, client-focused solutions, and innovation, they offer tailored guidance for businesses and individuals. ',
      image: image6,
      circle: circle6,
      name: "Alwidadtaxation.com",
      location: "Dubai"
    }
  ];


 

  return (
    <>
      <style>{smoothScrollStyles}</style>
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Video Background */}
                                             <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(257.99deg,rgba(254,249,208,0.1)_0%,rgba(47,91,68,0.1)_1%,#2F5B44_95%)] z-10"></div>
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
                  <source src="https://res.cloudinary.com/dp5bcywc7/video/upload/v1754822729/1440X879_Final_tuvtdq.mp4" type="video/mp4" />
           
                  Your browser does not support the video tag.
                </video>
              </div>

          {/* Content */}
        <div className="container mx-auto max-w-6xl relative z-20 px-4 sm:px-6 pt-20 sm:pt-40">
            <div className="max-w-2xl">
            <h1 className="text-[40px] sm:text-[60px] lg:text-[80px] font-bold mb-0 text-[#E9F2CD]">
              DEVEXT
            </h1>
            <h2 className="text-[20px] sm:text-[26px] lg:text-[32px] leading-none mb-6 text-[#E9F2CD] -mt-2 sm:-mt-4">
              Is Your Best Solution<br />
              For A Better Tomorrow
            </h2>
            <p className="text-base sm:text-lg mb-8 leading-relaxed text-[#E9F2CD] opacity-80 max-w-md">
            From web and app development to creative design and marketing strategies, we provide end-to-end services tailored to your goals. Our mission is to help brands transform their ideas into impactful digital experiences and achieve long-term success in today’s fast-paced market.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                <div className="flex flex-col gap-1">
                  <img src={icons} alt="User Reviews" className="h-8 sm:h-10" />
                  <div className="flex">
                    {[1,2,3,4,5].map((star, index) => (
                      <svg key={index} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto ">
                  <Link 
                    to="/community"
                    className=" bg-opacity-50 bg-[#2F5B44] border border-[#E9F2CD] text-[#E9F2CD] px-4 sm:px-6 py-2 rounded-full font-medium hover:bg-[#E9F2CD] hover:text-[#2F5B44] transition-colors flex items-center justify-center text-sm group"
                  >
                    Join The Community
                    <img src={uparrow} alt="arrow" className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-all duration-300 group-hover:hidden" />
                    <img src={icon2} alt="arrow" className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-all duration-300 hidden group-hover:block" />
                  </Link>
                  <Link 
                    to="/about"
                    className= " bg-opacity-50 bg-[#2F5B44] border border-[#E9F2CD] text-[#E9F2CD] px-4 sm:px-6 py-2 rounded-full font-medium hover:bg-[#E9F2CD]  hover:text-[#2F5B44] transition-colors flex items-center justify-center text-sm  group"
                  >
                    Learn More
                    <img src={downarrow} alt="arrow" className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-all duration-300 group-hover:hidden" />
                    <img src={downarrow2green} alt="arrow" className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-all duration-300 hidden group-hover:block" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
            <div className="relative flex items-center justify-center p-6 sm:p-8 lg:p-12 font-['Inter'] overflow-hidden bg-[#E9F2CD]">
              {/* Background Pattern */}
              <div className="absolute inset-1 w-[calc(100%-0.5rem)] h-[calc(100%-0.5rem)] opacity-50 z-0">
                <img 
                  src={icon3} 
                  alt="Decorative Pattern" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-10 max-w-lg text-center md:text-left">
                <h3 className="text-[20px] sm:text-[24px] lg:text-[30px] font-medium text-[#2F5B44] mb-4 sm:mb-6 leading-tight uppercase">
                  CREATIVE<br />
                  SOFTWARE AGENCY DELIVERING<br />
                  CUSTOM SOLUTIONS
                </h3>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-normal text-[#2F5B44] mb-4 sm:mb-6 leading-relaxed">
                  Lorem ipsum is simply dummy text of the printing and typesetting 
                  industry. Lorem ipsum has been the industry's standard dummy 
                  text ever since the 1500s, when an unknown printer took a galley 
                  of type and scrambled it to make a type specimen book.
                </p>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-normal text-[#2F5B44] mb-6 sm:mb-8 leading-relaxed">
                  Lorem ipsum is simply dummy text of the printing and typesetting 
                  industry. Lorem ipsum has been the industry's standard dummy 
                  text ever since the 1500s.
                </p>
                <div className="flex justify-center md:justify-end">           
                  <Link 
                    to="/services"
                    className="inline-flex items-center border-2 border-[#2F5B44] text-[#2F5B44] px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#2F5B44] hover:text-white transition-colors font-medium text-sm sm:text-base group"
                  >
                    Discover More
                    <img src={icon2} alt="arrow" className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-all duration-300 group-hover:hidden" />
                    <img src={uparrow} alt="arrow" className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-all duration-300 hidden group-hover:block" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex items-center justify-center p-6 sm:p-8 bg-[#2F5B44] md:bg-transparent">
              <div className="relative w-full max-w-md">
                {/* Background Pattern */}
                <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 opacity-20 z-0">
                  <img 
                    src={icon3} 
                    alt="Decorative Pattern" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <img 
                  src={icon1} 
                  alt="Website Mockup" 
                  className="w-full h-auto relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Third Section */}
     <Thirdseciont />
    

      {/* fourth Section */}
      <section className="relative py-20 px-6 text-center overflow-hidden" style={{ background: '#2F5B44' }}>
        {/* Background Pattern with Logo */}
        <div className="absolute inset-0">
          {/* Curved flowing pattern background */}
          <div className="absolute inset-0">
            {/* Main curved flow design */}
            <div className="absolute top-0 right-0 w-full h-full">
              <div 
                className="w-full h-full opacity-20"
                style={{
                  background: `
                    radial-gradient(ellipse 800px 600px at 120% 20%, rgba(254, 249, 208, 0.3) 0%, transparent 50%),
                    radial-gradient(ellipse 600px 800px at -20% 80%, rgba(254, 249, 208, 0.2) 0%, transparent 50%),
                    radial-gradient(ellipse 400px 300px at 80% 60%, rgba(254, 249, 208, 0.15) 0%, transparent 70%)
                  `
                }}
              />
            </div>
            
            {/* Logo Pattern Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-90">
              <img 
                src={logoFourthsection} 
                alt="Background Pattern" 
                className="w-full h-full object-contain object-center"
                style={{ 
                  transform: 'scale(0.85)',
                  filter: 'brightness(3) contrast(1.5) saturate(1.2)',
                  mixBlendMode: 'soft-light'
                }}
              />
            </div>
            
            {/* Additional curved elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div 
                className="absolute top-10 right-10 w-96 h-96 rounded-full opacity-10"
                style={{
                  background: 'radial-gradient(circle, rgba(254, 249, 208, 0.4) 0%, transparent 70%)'
                }}
              />
              <div 
                className="absolute bottom-10 left-10 w-80 h-80 rounded-full opacity-10"
                style={{
                  background: 'radial-gradient(circle, rgba(254, 249, 208, 0.3) 0%, transparent 70%)'
                }}
              />
            </div>
          </div>
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-2xl   mb-6 text-[#FEF9D0] leading-tight tracking-wide">
            CUSTOM <span className="text-[#FEF9D0] text-3xl font-bold">WEB DESIGN</span> PRICING FOR EACH<br />
            CLIENT'S OBJECTIVES
          </h2>
          <p className="text-[#FEF9D0] mb-6 text-[18px] leading-relaxed max-w-3xl mx-auto">
            Every website design project comes with unique challenges and specific 
            requirements that influence its final cost.
          </p>
          <p className="text-[#FEF9D0] mb-12 text-[16px] leading-relaxed max-w-3xl mx-auto">
            The technical setup of your website, which directly impacts its performance, is a key 
            factor in determining cost. More complex setups that demand significant time and effort 
            will naturally increase the overall price.
          </p>
          <Link 
            to="/calculator"
            className="inline-flex items-center bg-transparent text-[#FEF9D0] px-8 py-3 rounded-full font-medium text-[14px] sm:text-[16px] hover:bg-[#FEF9D0] hover:text-[#2F5B44] transition-all duration-300 transform hover:scale-105 group"
            style={{ border: '2px solid #FEF9D0' }}
          >
            Calculate Your Website Cost
            <img src={downarrow} alt="arrow" className="w-5 h-5 ml-3 transition-all duration-300 group-hover:hidden" />
            <img src={downarrow2green} alt="arrow" className="w-5 h-5 ml-3 transition-all duration-300 hidden group-hover:block" />
          </Link>
        </div>
      </section>

 

                   {/* fifth Section - Customer Testimonials */}
          <section className="relative py-20 px-6 overflow-hidden" style={{ background: '#FEF9D0' }}>
            {/* Background Pattern */}
            <div className="absolute inset-0">
              <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-start opacity-50">
                <img 
                  src={fifthsectionbackgroundIcon} 
                  alt="Background Pattern" 
                  className="w-full h-full object-contain object-left"
                  style={{ 
                    transform: 'scale(1.6) translateX(10%)',
                    filter: 'brightness(1.5) contrast(1.5) saturate(1.3)',
                    mixBlendMode: 'multiply'
                  }}
                />
              </div>
            </div>

            <div className="w-full relative z-10">
              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-[36px] font-bold text-[#2F5B44] mb-4 leading-tight">
                  WHAT OUR CUSTOMERS SAY<br />
                  ABOUT US!
                </h2>
                <p className="text-[20px] text-[#2F5B44] max-w-4xl mx-auto text-center" style={{ fontFamily: 'Inter', fontWeight: 400, lineHeight: '100%', letterSpacing: '0%' }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                  of type and scrambled it to make a type specimen book.
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-start mb-8 mt-16">
                <div className="flex gap-4">
                  <button 
                    onClick={() => swiperInstance?.slidePrev()}
                    className="hover:opacity-70 transition-opacity"
                  >
                    <img src={fiftharrowleft} alt="Previous" className="w-10 h-10" />
                  </button>
                  <button 
                    onClick={() => swiperInstance?.slideNext()}
                    className="hover:opacity-70 transition-opacity"
                  >
                    <img src={fiftharrowright} alt="Next" className="w-10 h-10" />
                  </button>
                </div>
              </div>

              {/* Swiper Carousel */}
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
                      <div className="bg-[#2F5B44] rounded-3xl overflow-hidden p-4 sm:p-6 text-[#FEF9D0] flex flex-col w-full" style={{ height: '400px' }}>
                        {/* Image Section */}
                        <div className="h-90 sm:h-40 relative overflow-hidden rounded-lg mb-4 sm:mb-6">
                          <img 
                            src={card.image} 
                            alt={card.title}
                            className="w-full h-full object-cover"
                          />
                </div>

                        {/* Text Content */}
                        <div className="flex-1 flex flex-col">
                          <p className="text-[13px] sm:text-[14px] leading-relaxed mb-4 sm:mb-6 flex-1">
                            {card.title}
                          </p>
                          
                          {/* Client Info */}
                          <div className="flex items-center gap-3 mt-auto">
                            <img src={card.circle} alt="Client Icon" className="w-6 h-6 sm:w-8 sm:h-8" />
                    <div>
                              <p className="text-[#FEF9D0] text-xs sm:text-sm font-medium">{card.name}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <svg className="w-3 h-3 text-[#FEF9D0]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                                <p className="text-[#FEF9D0] text-xs">{card.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </section>  
          
          {/* sixth Section - FAQ */}
          <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-20" style={{ background: '#2F5B44' }}>
            <div className="container mx-auto max-w-full">
              {/* Header */}
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[36px] font-bold text-[#FEF9D0] mb-4 sm:mb-6 lg:mb-8 leading-tight" style={{ fontFamily: 'Inter' }}>
                  FREQUENTLY ASKED QUESTIONS
                </h2>
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-3 sm:space-y-4 max-w-6xl mx-auto">
                {/* FAQ Item 1 */}
                <div className="border-2 border-[#FEF9D0] rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 hover:bg-[#FEF9D0] hover:bg-opacity-20 transition-all cursor-pointer" onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium text-[#FEF9D0] pr-2 sm:pr-4">
                      What does a web design agency do?
                    </h3>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#FEF9D0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {openFaqIndex === 0 && (
                  <div className="mt-3 text-[#FEF9D0] text-xs sm:text-sm lg:text-base leading-relaxed px-3 sm:px-6 lg:px-8 py-3 sm:py-4 border-2 border-[#FEF9D0] rounded-3xl">
                   A web design agency grows your brand online by bringing a team of experts together to create a custom site that is optimized for SEO and drives higher conversions for more leads and increased sales. A custom website starts with a strategy and planning before going into design and development. The designs need to be responsive to ensure a good user experience on both mobile and desktop devices.
                  </div>
                )}

                {/* FAQ Item 2 */}
                <div className="border-2 border-[#FEF9D0] rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 hover:bg-[#FEF9D0] hover:bg-opacity-20 transition-all cursor-pointer" onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium text-[#FEF9D0] pr-2 sm:pr-4">
                      What's The Difference Between Web Design & Web Development?
                    </h3>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#FEF9D0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {openFaqIndex === 1 && (
                  <div className="mt-3 text-[#FEF9D0] text-xs sm:text-sm lg:text-base leading-relaxed px-3 sm:px-6 lg:px-8 py-3 sm:py-4 border-2 border-[#FEF9D0] rounded-3xl">
                    Web design focuses on the user experience and user flow, as well as the aesthetic appearance of the site. Web development, on the other hand, involves the technical side that makes the website function, including coding and performance across devices. Both are essential for creating a successful, user-friendly website.
                  </div>
                )}

                {/* FAQ Item 3 */}
                <div className="border-2 border-[#FEF9D0] rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 hover:bg-[#FEF9D0] hover:bg-opacity-20 transition-all cursor-pointer" onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium text-[#FEF9D0] pr-2 sm:pr-4">
                      Why is responsive web design important?
                    </h3>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#FEF9D0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {openFaqIndex === 2 && (
                  <div className="mt-3 text-[#FEF9D0] text-xs sm:text-sm lg:text-base leading-relaxed px-3 sm:px-6 lg:px-8 py-3 sm:py-4 border-2 border-[#FEF9D0] rounded-3xl">
                 A great user experience is crucial across all devices — mobile, desktop, and tablets. Mobile devices, in particular, are highly popular, with research indicating that up to 80% of your website's visitors may access it first on a phone. First impressions are key, so it's vital that your site looks professional and is easy to navigate on mobile. Additionally, search engines prioritize mobile-friendly design and may lower your ranking if your site isn't optimized for mobile access.
                  </div>
                )}

                {/* FAQ Item 4 */}
                <div className="border-2 border-[#FEF9D0] rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 hover:bg-[#FEF9D0] hover:bg-opacity-20 transition-all cursor-pointer" onClick={() => setOpenFaqIndex(openFaqIndex === 3 ? null : 3)}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium text-[#FEF9D0] pr-2 sm:pr-4">
                      How long does it take to design a website?
                    </h3>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#FEF9D0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {openFaqIndex === 3 && (
                  <div className="mt-3 text-[#FEF9D0] text-xs sm:text-sm lg:text-base leading-relaxed px-3 sm:px-6 lg:px-8 py-3 sm:py-4 border-2 border-[#FEF9D0] rounded-3xl">
                   Designing a custom website involves several phases: strategy, planning, design, development, quality assurance, and launch. For an informational website, the process typically takes up to 3 months, allowing time for detailed design and client feedback. Larger, more complex sites with advanced features may require more than 3 months. This timeline includes thorough design of key pages and a user testing phase to ensure optimal performance.
                  </div>
                )}
                   
                {/* FAQ Item 5 */}
                <div className="border-2 border-[#FEF9D0] rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 hover:bg-[#FEF9D0] hover:bg-opacity-20 transition-all cursor-pointer" onClick={() => setOpenFaqIndex(openFaqIndex === 4 ? null : 4)}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium text-[#FEF9D0] pr-2 sm:pr-4">
                      How much should I expect to pay for web design?
                    </h3>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#FEF9D0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {openFaqIndex === 4 && (
                  <div className="mt-3 text-[#FEF9D0] text-xs sm:text-sm lg:text-base leading-relaxed px-3 sm:px-6 lg:px-8 py-3 sm:py-4 border-2 border-[#FEF9D0] rounded-3xl">
                   The cost of a custom website depends on three main factors: the number of unique landing pages, backend features, and integrations. Informational websites with a few landing pages are less expensive and quicker to develop than complex sites with custom backend features, such as job portals or marketplaces.
                  </div>
                )}

                {/* FAQ Item 6 */}
                <div className="border-2 border-[#FEF9D0] rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 hover:bg-[#FEF9D0] hover:bg-opacity-20 transition-all cursor-pointer" onClick={() => setOpenFaqIndex(openFaqIndex === 5 ? null : 5)}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium text-[#FEF9D0] pr-2 sm:pr-4">
                      How can you help me generate leads after my website is launched?
                    </h3>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#FEF9D0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {openFaqIndex === 5 && (
                  <div className="mt-3 text-[#FEF9D0] text-xs sm:text-sm lg:text-base leading-relaxed px-3 sm:px-6 lg:px-8 py-3 sm:py-4 border-2 border-[#FEF9D0] rounded-3xl">
                    As a full-service web design agency, we offer comprehensive marketing support to help generate qualified leads for your brand. Our marketing team provides tailored recommendations based on your goals, industry, and budget. We can design a custom monthly marketing plan to deliver effective results efficiently. Alternatively, we can develop a marketing strategy that you can implement internally, working seamlessly with your internal teams or other agencies to drive growth. 
                  </div>
                )}

                {/* FAQ Item 7 */}
                <div className="border-2 border-[#FEF9D0] rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 hover:bg-[#FEF9D0] hover:bg-opacity-20 transition-all cursor-pointer" onClick={() => setOpenFaqIndex(openFaqIndex === 6 ? null : 6)}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium text-[#FEF9D0] pr-2 sm:pr-4">
                      Do you offer website redesign services?
                    </h3>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#FEF9D0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {openFaqIndex === 6 && (
                  <div className="mt-3 text-[#FEF9D0] text-xs sm:text-sm lg:text-base leading-relaxed px-3 sm:px-6 lg:px-8 py-3 sm:py-4 border-2 border-[#FEF9D0] rounded-3xl">
                    Yes, we offer comprehensive website redesign services. Whether you want to refresh your site's appearance, optimize user experience, or enhance overall performance, we can create a redesign that aligns perfectly with your brand and business objectives. Our focus is on crafting an engaging, effective online presence that delivers measurable results.
                  </div>
                )}

                {/* FAQ Item 8 */}
                <div className="border-2 border-[#FEF9D0] rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 hover:bg-[#FEF9D0] hover:bg-opacity-20 transition-all cursor-pointer" onClick={() => setOpenFaqIndex(openFaqIndex === 7 ? null : 7)}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium text-[#FEF9D0] pr-2 sm:pr-4">
                      Will my website be mobile-friendly?
                    </h3>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#FEF9D0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {openFaqIndex === 7 && (
                  <div className="mt-3 text-[#FEF9D0] text-xs sm:text-sm lg:text-base leading-relaxed px-3 sm:px-6 lg:px-8 py-3 sm:py-4 border-2 border-[#FEF9D0] rounded-3xl">
                    Absolutely. We prioritize mobile-friendliness because research shows that up to 80% of users may leave your site if it isn't optimized for mobile. We don't simply stretch desktop designs to fit mobile screens; instead, we tailor the messaging, layout, and design specifically for mobile users. We use tools like Figma to ensure your site performs well on both desktop and mobile devices. 
                  </div>
                )}

              
              </div>
            </div>
          </section>


          {/* seventh Section */}
          <section className="relative py-20 px-6 overflow-hidden" style={{ background: '#FEF9D0' }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute inset-0 flex items-center justify-end opacity-30">
                <img 
                  src={backgroundsectionseven} 
                  alt="Background Pattern" 
                  className="w-full h-full object-cover"
                  style={{ 
                    width: '50%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'scale(1.0001) translateX(25%)',
                    filter: 'brightness(1.2) contrast(1.3) saturate(1.1)',
                    mixBlendMode: 'multiply',
                  }}
                />
              </div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-[36px] font-bold text-[#2F5B44] mb-4 leading-tight">
                  WHAT OUR CUSTOMERS SAY<br />
                  ABOUT US!
                </h2>
                <p className="text-[20px] text-[#2F5B44] max-w-4xl mx-auto text-center" style={{ fontFamily: 'Inter', fontWeight: 400, lineHeight: '100%', letterSpacing: '0%' }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                  of type and scrambled it to make a type specimen book.
                </p>
              </div>

              {/* Navigation Arrows */}
              {/* <div className="flex justify-start mb-8">
                <div className="flex gap-4">
                  <button className="hover:opacity-70 transition-opacity">
                    <img src={fiftharrowleft} alt="Previous" className="w-10 h-10" />
                  </button>
                  <button className="hover:opacity-70 transition-opacity">
                    <img src={fiftharrowright} alt="Next" className="w-10 h-10" />
                  </button>
                </div>
              </div> */}

              {/* Cards fan replaced by a single image shape (full-bleed) */}
              <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen mt-10 -mb-[5rem]">
                <img src={cardsShape} alt="Cards Shape" className="w-screen h-auto sm:h-auto min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]" />
              </div>
            </div>
          </section>

          {/* eighth Section - Contact Form */}
          <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden" style={{ background: '#2F5B44' }}>

            <div className="container mx-auto max-w-6xl relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                
                {/* Left Side - Text Content */}
                <div className="space-y-6 lg:space-y-8 pb-4 text-center lg:text-left">
                  <div>
                    <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] xl:text-[36px] font-bold text-[#FEF9D0] mb-4 sm:mb-6 leading-tight whitespace-nowrap  " style={{ fontFamily: 'Inter' }}>
                      DIGITIZING YOUR BUSINESS<br />
                      GROWTH
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-between mb-6 sm:mb-8 mt-6 sm:mt-10 gap-4 sm:gap-0">
                      <img src={line} alt="line" className="w-24 sm:w-32 order-1 sm:order-none" />
                      <span className="text-[#FEF9D0] text-base sm:text-lg font-medium order-2 sm:order-none lg:mr-[4rem]">FOLLOW US</span>
                      <div className="flex gap-4 sm:gap-6 order-3 sm:order-none lg:mr-[3rem]">
                        <a href="#" className="hover:opacity-70 transition-opacity">
                          <img src={whatsapp} alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                        <a href="#" className="hover:opacity-70 transition-opacity">
                          <img src={instagram} alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                        <a href="#" className="hover:opacity-70 transition-opacity">
                          <img src={linkedin} alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="bg-transparent">
                  <div className="mb-6 sm:mb-8 text-center lg:text-left">
                    <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-[#FEF9D0] mb-2 leading-tight">
                      START A CONVERSATION<br />
                      WITH US
                    </h3>
                  </div>

                  <form className="space-y-4 sm:space-y-6" onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    setSubmitMessage('');
                    setSubmitError('');
                    try {
                      const formEl = e.currentTarget;
                      const formData = new FormData(formEl);
                      // Simple validation similar to provided hook
                      const name = (formData.get('name') || '').toString().trim();
                      const email = (formData.get('email') || '').toString().trim();
                      const messageVal = (formData.get('message') || '').toString().trim();
                      if (!name) {
                        setSubmitError('Please enter your name.');
                        setIsSubmitting(false);
                        return;
                      }
                      if (!email || !email.includes('@') || email.length < 5) {
                        setSubmitError('Please enter a valid email.');
                        setIsSubmitting(false);
                        return;
                      }
                      if (!messageVal) {
                        setSubmitError('Please enter your message.');
                        setIsSubmitting(false);
                        return;
                      }
                      formData.append('access_key', 'a17daa5b-725c-4354-913d-e7cd75d01bc2');
                      formData.append('subject', 'New Contact Form Submission');
                      formData.append('from_name', 'DEVEXT Website');
                      formData.append('botcheck', '');
                      formData.append('to', 'devextdeveloping@gmail.com');
                      formData.append('replyto', email);

                      // (debug logs removed per request)
                      const res = await fetch('https://api.web3forms.com/submit', {
                        method: 'POST',
                        body: formData,
                        headers: { Accept: 'application/json' }
                      });
                      const data = await res.json().catch(() => ({ success: false, message: 'Invalid response from server' }));
                      // (response debug logs removed per request)
                      if (res.ok && data.success) {
                        setSubmitMessage('Thanks! Your message has been sent.');
                        formEl.reset();
                      } else {
                        setSubmitError(data?.message || 'Submission failed. Please try again.');
                      }
                    } catch (err) {
                      setSubmitError('Submission failed. Please try again.');
                      console.log(err)
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}>
                    {/* Name Field */}
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-2">
                        <img src={name} alt="name icon" className="w-5 h-5" />
                        <label className="text-[#FEF9D0] text-sm font-medium">NAME *</label>
                      </div>
                      <input
                        type="text"
                        required
                        name="name"
                        className="w-full bg-transparent border-b-2 border-[#FEF9D0] text-[#FEF9D0] pb-2 focus:outline-none focus:border-[#E9F2CD] placeholder-[#FEF9D0] placeholder-opacity-60"
                        placeholder=""
                      />
                    </div>

                    {/* Company Name Field */}
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-2">
                        <img src={companyname} alt="company icon" className="w-5 h-5" />
                        <label className="text-[#FEF9D0] text-sm font-medium">COMPANY NAME *</label>
                      </div>
                      <input
                        type="text"
                        required
                        name="company"
                        className="w-full bg-transparent border-b-2 border-[#FEF9D0] text-[#FEF9D0] pb-2 focus:outline-none focus:border-[#E9F2CD] placeholder-[#FEF9D0] placeholder-opacity-60"
                        placeholder=""
                      />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-2">
                        <img src={email} alt="email icon" className="w-5 h-5" />
                        <label className="text-[#FEF9D0] text-sm font-medium">EMAIL *</label>
                      </div>
                      <input
                        type="email"
                        required
                        name="email"
                        className="w-full bg-transparent border-b-2 border-[#FEF9D0] text-[#FEF9D0] pb-2 focus:outline-none focus:border-[#E9F2CD] placeholder-[#FEF9D0] placeholder-opacity-60"
                        placeholder=""
                      />
                    </div>

                    {/* Phone Field */}
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-2">
                        <img src={phone} alt="phone icon" className="w-5 h-5" />
                        <label className="text-[#FEF9D0] text-sm font-medium">PHONE *</label>
                      </div>
                      <input
                        type="tel"
                        required
                        name="phone"
                        className="w-full bg-transparent border-b-2 border-[#FEF9D0] text-[#FEF9D0] pb-2 focus:outline-none focus:border-[#E9F2CD] placeholder-[#FEF9D0] placeholder-opacity-60"
                        placeholder=""
                      />
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-2">
                        <img src={message} alt="message icon" className="w-5 h-5" />
                        <label className="text-[#FEF9D0] text-sm font-medium">YOUR MESSAGE*</label>
                      </div>
                      <textarea
                        required
                        rows={4}
                        name="message"
                        className="w-full bg-transparent border-b-2 border-[#FEF9D0] text-[#FEF9D0] pb-2 focus:outline-none focus:border-[#E9F2CD] placeholder-[#FEF9D0] placeholder-opacity-60 resize-none"
                        placeholder=""
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center bg-transparent text-[#FEF9D0] px-8 py-3 rounded-full font-medium text-[16px] hover:bg-[#FEF9D0] hover:text-[#2F5B44] transition-all duration-300 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed group"
                        style={{ border: '2px solid #FEF9D0' }}
                      >
                        {isSubmitting ? 'Sending...' : 'Submit'}
                        <img src={downarrow} alt="arrow" className="w-4 h-4 ml-2 transition-all duration-300 group-hover:hidden" />
                        <img src={downarrow2green} alt="arrow" className="w-4 h-4 ml-2 transition-all duration-300 hidden group-hover:block" />
                      </button>
                    </div>
                    {(submitMessage || submitError) && (
                      <div className={`mt-4 text-sm ${submitError ? 'text-red-300' : 'text-[#FEF9D0]'}`}>
                        {submitError || submitMessage}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </section>

          <Footer />
              </div>
    </>
  );
}

export default Home;

