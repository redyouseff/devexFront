
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import card2 from "/images/home/Responsive Web.svg"
import card3 from "/images/home/Group3.svg"
import card4 from "/images/home/Vector4.svg"
import downthird from "/images/home/Frame 16.svg"
import upthird from "/images/home/Frame 15.svg"
import rectangle from "/images/home/Rectangle 3.svg"
import { Navigation, Pagination } from 'swiper/modules';


const Cards = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);
  
    
    const cardone =[{
        id:1,
        icon:rectangle,
        title:"Marketplace Development", 
        description:["Digital Silk takes a user-centric and data-driven approach to eCommerce marketplace development. Our team creates visually appealing, highly functional and cross-platform optimized websites. ","Our eCommerce developers use real-life consumer analytics and follow the latest industry best practices to enhance the user experience and create high-performing and conversion-focused websites. ","Digital Silk’s end-to-end solutions include intuitive navigation, fast-loading pages, mobile-first designs and interactive elements like reviews and live chat to increase engagement and build a stronger brand identity"],
    
      },
      {
        id:2,
        icon:card2,
        title:"Multi-Store Management", 
        description:["As an end-to-end eCommerce development company, Digital Silk allows businesses to streamline operations and run multiple online stores from a single platform. ","This approach offers centralized control over key business operations like inventory and order management, data storage, user behavior analysis and improved efficiency with minimal overhead costs. ","Additionally, professional development services can help businesses reach target markets more effectively, with tailored solutions that cater to specific regions, customer segments or product categories. ","This also facilitates better scalability, since brands can easily grow their online stores as their business expands, without duplicating management efforts."],
      },
      {
        id:3,
        icon:card3,
        title:"Headless Commerce", 
        description:["Headless commerce separates the front-end or user interface from the backend or admin panel for greater flexibility when designing user experiences. ","This allows eCommerce developers to change the front-end without affecting core functionalities like inventory management or payment processing. ","Our eCommerce development services use headless commerce to create highly customizable and user-centric platforms with quick front-end adaptability to different devices and channels. This ensures consistent, SEO-optimized and conversion-focused experiences across platforms"],
      },
      {
        id:4,
        icon:card4,
        title:"B2B And B2C Solutions", 
        description:["Our eCommerce development agency offers custom solutions to meet the needs of both B2B and B2C clients. ","Digital Silk’s B2B platforms focus on bulk purchases, account-based pricing and complex workflows like custom quotes or procurement. Our solutions prioritize streamlined order processing, CRM integration and personalized experiences for each transaction. ","As for B2C eCommerce websites, Digital Silk emphasizes user-friendly designs, fast checkout processes and high-volume transactions. Our team uses mobile-first optimization, personalized product recommendations and tailored loyalty programs to encourage long-term loyalty. "],
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
       
          <h2 className="text-[18px] font-inter sm:text-[22px] md:text-[26px] lg:text-[30px] font-medium text-[#FEF9D0] mb-3 sm:mb-4 md:mb-6 leading-tight uppercase">
          eCommerce Development Solutions
          </h2>
          <p className="text-[12px] font-inter  sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal text-[#FEF9D0] mb-4 sm:mb-6 md:mb-8 leading-relaxed">
          As a recognized eCommerce development agency, Digital Silk offers industry-specific and research-backed solutions that boost engagement, drive organic traffic and increase conversion rates. 
          </p>
        </div>
      </div>

      {/* Right Side - Full Height - Full Width on Mobile */}
      <div className="relative overflow-hidden h-full min-h-[80vh] sm:min-h-[90vh] md:min-h-[90vh] md:col-start-2">
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
                    
                      <h3 className={`text-[22px] font-inter sm:text-[24px] md:text-[26px] lg:text-[30px] font-medium leading-tight uppercase ${card.id % 2 === 0 ? 'text-[#FEF9D0]' : 'text-[#2F5B44]'}`}>
                        {card.title}
                      </h3>
                    </div>

                    {
                        card.description.map((description) => (
                            <p className={`text-[16px] font-inter sm:text-[16px] md:text-[16px] lg:text-[18px] font-normal mb-4 sm:mb-6 md:mb-8 leading-relaxed ${card.id % 2 === 0 ? 'text-[#FEF9D0]' : 'text-[#2F5B44]'}`}>
                                {description}
                            </p>
                        ))
                    }
                    
                    {/* <p className={`text-[16px] sm:text-[16px] md:text-[16px] lg:text-[17px] font-normal mb-4 sm:mb-6 md:mb-8 leading-relaxed ${card.id % 2 === 0 ? 'text-[#FEF9D0]' : 'text-[#2F5B44]'}`}>
                      {card.description}
                    </p> */}
                  
                    <div className="flex justify-center md:justify-end">
                  
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

export default Cards;