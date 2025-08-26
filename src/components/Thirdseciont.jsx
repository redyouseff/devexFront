
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import card2 from "/images/home/Responsive Web.svg"
import card3 from "/images/home/Group3.svg"
import card4 from "/images/home/Vector4.svg"
import card5 from "/images/home/Vector5.svg"
import card6 from "/images/home/Vector6.svg"

import downthird from "/images/home/Frame 16.svg"
import upthird from "/images/home/Frame 15.svg"
import rectangle from "/images/home/Rectangle 3.svg"
import downarrow from "/images/home/Vector1.svg"
import { Navigation, Pagination } from 'swiper/modules';
import downarrow2green from "/images/home/arrow Down.svg"

const Thirdseciont = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);
    
    const cardone =[{
        id:1,
        icon:rectangle,
        title:"Custom Web Design", 
        description:"Each website we create is meticulously crafted to deliver a 100% unique online experience tailored to your brand. Our expert designers transform your vision into a dynamic, custom design that enhances your brand’s visibility, boosts engagement, and drives conversions. With us, your website will not only stand out but also connect deeply with your audience. ",
    
      },
      {
        id:2,
        icon:card2,
        title:"Responsive Web Design", 
        description:"We deliver seamless user experiences across all devices. Our responsive designs adapt flawlessly to any screen size, ensuring that your website not only meets but exceeds user expectations. From planning to design and development, we ensure a consistent, engaging experience for every visitor, no matter how they access your site.",
      },
      {
        id:3,
        icon:card3,
        title:"Website Redesign", 
        description:"Whether you need a design refresh or a complete website overhaul, we analyze your site’s pain points and opportunities to revitalize your digital presence. Our award-winning web designers will breathe new life into your website, enhancing its functionality, user experience, and aesthetic appeal. The result? A modern, dynamic site that drives increased traffic and bolsters your industry reputation. ",
      },
      {
        id:4,
        icon:card4,
        title:"UX/UI Web Design", 
        description:"Our award-winning designers use trusted methods and innovative approaches to create engaging visual experiences and seamless user journeys. Whether you’re looking to build a custom UX/UI or redesign your current one, we’ll enhance your visual identity and ensure your website is both aesthetically pleasing and highly functional. ",
      },
      {
        id:5,
        icon:card5,
        title:"SEO", 
        description:"Our award-winning designers use trusted methods and innovative approaches to create engaging visual experiences and seamless user journeys. Whether you’re looking to build a custom UX/UI or redesign your current one, we’ll enhance your visual identity and ensure your website is both aesthetically pleasing and highly functional.",
      },
      {
        id:6,
        icon:card6,
        title:"eCommerce sOLUTIONS", 
        description:"We specialize in design and development for leading content management systems (CMSs) like Shopify, Magento, and WooCommerce. Our experts can help you build and scale your eCommerce website across platforms, ensuring a seamless and robust online shopping experience for your customers. ",
      },
      
    ]
      


return(
    <section className="relative min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh]">
    <div className="absolute inset-0 hidden md:block">
      <div className="flex h-full">
        <div className="w-1/2 bg-[#2F5B44]"></div>
      
    </div>
  </div>
  
  <div className="relative h-full">
    <div className="grid grid-cols-1 md:grid-cols-2 h-[80vh] sm:h-[85vh] md:h-[90vh]">
      
      {/* Left Side - Dark Green - Hidden on Mobile */}
      <div className="hidden md:relative md:flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 font-['Inter'] overflow-hidden bg-[#2F5B44]">
        {/* Arrows - Vertically Centered on Right - Desktop Only */}
        <div className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {/* Previous Arrow */}
          <button 
            onClick={() => swiperInstance && swiperInstance.slideNext()}
            className="hover:opacity-70 transition-opacity cursor-pointer"
          >
            <img src={upthird} alt="previous arrow" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          </button>
          
          {/* Next Arrow */}
          <button 
            onClick={() => swiperInstance && swiperInstance.slidePrev()}
            className="hover:opacity-70 transition-opacity cursor-pointer"
          >
            <img src={downthird} alt="next arrow" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          </button>
        </div>

        <div className="relative z-10 max-w-sm sm:max-w-md md:max-w-lg text-center md:text-left px-2 sm:px-4">
          <h3 className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-medium text-[#FEF9D0] mb-3 sm:mb-4 md:mb-6 leading-tight uppercase">
            WHY DEVEXT?
          </h3>
          <h2 className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-medium text-[#FEF9D0] mb-3 sm:mb-4 md:mb-6 leading-tight uppercase">
            DISCOVER OUR EXPERTISE AS<br />
            A WEB DESIGN COMPANY
          </h2>
          <p className="text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal text-[#FEF9D0] mb-4 sm:mb-6 md:mb-8 leading-relaxed">
          As a full-service web design agency, we handle all your digital needs under one roof. Our custom web design services include thorough research and planning, bespoke designs and digital strategies tailored to grow your reach, drive traffic and encourage engagement.
          </p>
        </div>
      </div>

      {/* Right Side - Full Height - Full Width on Mobile */}
      <div className="relative overflow-hidden h-full min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] md:col-start-2">
        {/* Mobile Arrows - Top Right Corner */}
        <div className="absolute top-6 right-6 z-[9999] flex flex-col gap-4 md:hidden">
          <button 
            onClick={() => swiperInstance && swiperInstance.slideNext()}
            className="hover:opacity-70 transition-opacity cursor-pointer"
          >
            <img src={upthird} alt="previous arrow" className="w-8 h-8" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(25%) saturate(1000%) hue-rotate(120deg) brightness(95%) contrast(85%)' }} />
          </button>
          <button 
            onClick={() => swiperInstance && swiperInstance.slidePrev()}
            className="hover:opacity-70 transition-opacity cursor-pointer"
          >
            <img src={downthird} alt="next arrow" className="w-8 h-8" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(25%) saturate(1000%) hue-rotate(120deg) brightness(95%) contrast(85%)' }} />
          </button>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full h-full min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh]">
          <Swiper
            modules={[Navigation, Pagination]}   
            direction="vertical"
            spaceBetween={0}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            speed={800}
            onSwiper={setSwiperInstance}
            centeredSlides={true}
            watchOverflow={true}
            freeMode={false}
            allowTouchMove={false}
            grabCursor={false}
            className="!overflow-hidden third-section-swiper h-full"
            style={{ paddingLeft: '0px', paddingRight: '0px' }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            {cardone.map((card) => (
              <SwiperSlide key={card.id}>
                <div className={`relative flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 font-['Inter'] overflow-hidden h-full w-full min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] ${card.id % 2 === 0 ? 'bg-[#2F5B44]' : 'bg-[#FEF9D0]'}`}>
                  <div className="relative z-10 max-w-sm sm:max-w-md md:max-w-lg text-center md:text-left mx-auto px-2 sm:px-4">
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
                      <img src={card.icon} alt="Card Icon" className="w-10 h-10 sm:w-6 sm:h-6 md:w-10 md:h-12" />
                      <h3 className={`text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] font-medium leading-tight uppercase ${card.id % 2 === 0 ? 'text-[#FEF9D0]' : 'text-[#2F5B44]'}`}>
                        {card.title}
                      </h3>
                    </div>
                    
                    <p className={`text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal mb-4 sm:mb-6 md:mb-8 leading-relaxed ${card.id % 2 === 0 ? 'text-[#FEF9D0]' : 'text-[#2F5B44]'}`}>
                      {card.description}
                    </p>
                    <div className="flex justify-center md:justify-end">
                      <Link 
                        to="/services"
                        className={`inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full transition-colors font-medium text-xs sm:text-sm md:text-base ${
                          card.id % 2 === 0 
                            ? 'text-[#FEF9D0] hover:bg-[#FEF9D0] hover:text-[#2F5B44] border-[#FEF9D0]' 
                            : 'text-[#2F5B44] hover:bg-[#2F5B44] hover:text-white border-[#2F5B44]'
                        }`}
                        style={{ border: '2px solid' }}
                        onMouseEnter={() => setHoveredCard(card.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        Learn More
                        <img 
                          src={hoveredCard === card.id && card.id % 2 === 0 ? downarrow2green : downarrow} 
                          alt="arrow" 
                          className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-1.5 sm:ml-2" 
                          style={{ 
                            filter: hoveredCard === card.id 
                              ? (card.id % 2 === 0 ? 'none' : 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)')
                              : card.id % 2 === 0 
                                ? 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)'
                                : 'brightness(0) saturate(100%) invert(20%) sepia(25%) saturate(1000%) hue-rotate(120deg) brightness(95%) contrast(85%)'
                          }} 
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</section>

)
                

          
            

}

export default Thirdseciont;