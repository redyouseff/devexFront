import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import location from "/images/home/Group.svg";
import image8 from "/images/circleSwiperHome/Ellipse 7.svg";
import image1 from "/images/circleSwiperHome/Ellipse 1.svg";
import image2 from "/images/circleSwiperHome/Ellipse 2.svg";
import image7 from "/images/circleSwiperHome/Ellipse 77.svg";
import greenicon from "/images/circleSwiperHome/Group.svg";

const MotionDiv = motion.div;

const ImageSlider2 = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const [screenSize, setScreenSize] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {  
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5    
      );

      return updatedIndexes;
    });
  };

  const cards = [
    {
      id: 1, 
      image: image1, 
      title: "We've worked with several agencies before, but DEVEXT stands out for their creativity and reliability. They delivered our project on time and exceeded our expectations in every way.",
      name: "Bedayt Meshwar",
      location: "Dubai"
    },
    {
      id: 2, 
      image: image2, 
      title: "Working with DEVEXT was a seamless experience. They understood our goals from the start and provided innovative solutions that added real value to our business.",
      name:"Joud&Karam",
      location: "Dubai"
    },
    {
      id: 3, 
      image: image7, 
      title: "The team at DEVEXT combines professionalism with a personal touch. Their attention to detail and commitment to quality gave us confidence throughout the entire project.",
      name: "Altal Alkabeer",
      location: "Riyadh",
    },
    {
      id: 4, 
      image: image8, 
      title: "DEVEXT transformed our website into a modern, user-friendly platform that truly reflects our brand. Their team went the extra mile to ensure everything was perfectly tailored to our needs.",
      name: "Joud&Karam",
      location: "Dubai",
    },
    {
      id: 5, 
      image: image2, 
      title: "Thanks to DEVEXT, our new app is not only functional but also engaging and easy to use. We've received great feedback from our customers since its launch.",
      name:"Joud&Karam",
      location: "Dubai",
    },
  ];

  const positions = ["center", "left1", "left", "right", "right1"];

  // Responsive variants based on screen size
  const getImageVariants = () => {
    if (screenSize === 'mobile') {
      return {
        center: { x: "0%", scale: 1, zIndex: 5, opacity: 1 },
        left1: { x: "-120%", scale: 0.8, zIndex: 3, opacity: 0 },
        left: { x: "-200%", scale: 0.7, zIndex: 2, opacity: 0 },
        right: { x: "200%", scale: 0.7, zIndex: 1, opacity: 0 },
        right1: { x: "120%", scale: 0.8, zIndex: 3, opacity: 0 },
      };
    } else if (screenSize === 'tablet') {
      return {
        center: { x: "0%", scale: 1, zIndex: 5, opacity: 1 },
        left1: { x: "-100%", scale: 0.85, zIndex: 3, opacity: 1 },
        left: { x: "-180%", scale: 0.75, zIndex: 2, opacity: 0 },
        right: { x: "180%", scale: 0.75, zIndex: 1, opacity: 0 },
        right1: { x: "100%", scale: 0.85, zIndex: 3, opacity: 1 },
      };
    } else {
      return {
        center: { x: "0%", scale: 1, zIndex: 5, opacity: 1 },
        left1: { x: "-90%", scale: 0.9, zIndex: 3, opacity: 1 },
        left: { x: "-160%", scale: 0.85, zIndex: 2, opacity: 1 },
        right: { x: "160%", scale: 0.85, zIndex: 1, opacity: 1 },
        right1: { x: "90%", scale: 0.9, zIndex: 3, opacity: 1 },
      };
    }
  };

  const imageVariants = getImageVariants();
  
  return (
    <div className="relative flex items-center flex-col justify-center  min-h-screen py-8 sm:py-12 lg:py-0 lg:mb-9"> 
      <div
        className="relative w-full max-w-screen-xl overflow-hidden px-4 sm:px-8"
        style={{ height: "clamp(380px, 70vh, 640px)" }}
      >
      {/* Controls - responsive positioning */}
      <div className="absolute top-2  sm:top-4 sm:left-4 md:top-6 md:left-6 z-10 flex flex-row ">

                <div className="flex gap-4">
                <button 
                    onClick={handleNext}
                    className="hover:opacity-70 transition-opacity"
                  >
                    <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759052644/Frame_18_wju3de.svg" alt="Previous" className="w-10 h-10" />
                  </button>
                  

                  <button 
                    onClick={handleBack}
                    className="hover:opacity-70 transition-opacity"
                  >
                    <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759052642/Frame_17_owqmwt.svg" alt="Next" className="w-10 h-10" />
                  </button>
                </div>
           
        
      </div>
      </div>
      {cards.map((card, index) => (
        <MotionDiv
          key={index}
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ position: "absolute", marginTop: "9rem" }}
        >
          {positions[positionIndexes[index]] === 'center' ? (
            <div className="relative z-20 flex w-[16rem] h-[22rem] sm:w-[18rem] sm:h-[24rem] md:w-[20rem] md:h-[26rem] lg:w-[20.625rem] lg:h-[27.125rem] px-4 py-6 sm:px-5 sm:py-7 md:px-6 md:py-8 flex-col justify-between items-start gap-4 sm:gap-5 shrink-0 rounded-[2rem] sm:rounded-[2.25rem] md:rounded-[2.5rem] bg-[#FEF9D0] shadow-[0_12px_16px_-8px_rgba(0,0,0,0.25),0_-12px_16px_-8px_rgba(0,0,0,0.25)]  overflow-hidden">
              <p className="text-[#2F5B44] text-center font-inter text-[14px] sm:text-[15px] md:text-[16px] lg:text-[1.125rem] not-italic font-normal leading-[1.6rem] sm:leading-[1.7rem] md:leading-[1.8rem] w-full break-words whitespace-normal overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:8] [-webkit-box-orient:vertical]">
                {card.title}
              </p>
              <div className="flex items-center gap-2 sm:gap-3 self-start mt-auto">
                <img src={card.image} alt="logo" className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full" />
                <div className="flex flex-col items-start">
                  <p className="text-[#2F5B44] font-inter text-[14px] sm:text-[15px] md:text-[16px] lg:text-[1.125rem] not-italic font-semibold leading-normal">{card.name}</p>
                  <div className="flex items-center gap-1 sm:gap-[0.375rem] opacity-90">
                    <img src={greenicon} alt="location" className="w-3 h-4 sm:w-[0.875rem] sm:h-[1.125rem] md:w-[1rem] md:h-[1.25rem]" />
                    <span className="text-[#2F5B44] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[0.9375rem]">{card.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative z-20 flex w-[16rem] h-[22rem] sm:w-[18rem] sm:h-[24rem] md:w-[20rem] md:h-[26rem] lg:w-[20.625rem] lg:h-[27.125rem] px-4 py-6 sm:px-5 sm:py-7 md:px-6 md:py-8 flex-col justify-between items-start gap-4 sm:gap-5 shrink-0 rounded-[2rem] sm:rounded-[2.25rem] md:rounded-[2.5rem] bg-[#2F5B44] shadow-[0_12px_16px_-8px_rgba(0,0,0,0.25),0_-12px_16px_-8px_rgba(0,0,0,0.25)] overflow-hidden ">
              <p className="text-[#FEF9D0] text-center font-inter text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-normal leading-normal">
                {card.title}
              </p>
              <div className="flex items-center gap-2 sm:gap-3 self-start mt-auto">
                <img src={card.image} alt="logo" className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full" />
                <div className="flex flex-col items-start">
                  <p className="text-[#FEF9D0] font-inter text-[14px] sm:text-[15px] md:text-[16px] lg:text-[1.125rem] not-italic font-semibold leading-normal">{card.name}</p>
                  <div className="flex items-center gap-1 sm:gap-[0.375rem] opacity-90">
                    <img src={location} alt="location" className="w-3 h-4 sm:w-[0.875rem] sm:h-[1.125rem] md:w-[1rem] md:h-[1.25rem]" />
                    <span className="text-[#FEF9D0] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[0.9375rem]">{card.location}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </MotionDiv>
      ))}
    </div>
  );
};

export default ImageSlider2;    