import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Using images from your existing assets
import slide_image_1 from "/images/home/screencapture-alwidadtaxation-2025-07-11-16_12_43 1.svg";
import slide_image_2 from "/images/home/3788abf59bb8563cfad9a30cbb8be62658a13910.png";
import slide_image_3 from "/images/home/screencapture-alwidadtaxation-2025-07-11-16_12_43 3.svg";
import slide_image_4 from "/images/home/3d7675919d681e878c4dbc9cc7684b49b3b2807e.png";
import slide_image_5 from "/images/home/20a22ebbdefa41431733ac1b9ec7ce874179aa06.png";
import slide_image_6 from "/images/home/screencapture-alwidadtaxation-2025-07-11-16_12_43 6.svg";
import slide_image_7 from "/images/home/e149bc6f4d10dac13f72230078469be1d13dbf6d.png";

function CircularSwiper() {
  const applyOneRight = (swiper) => {
    try {
      if (!swiper) return;
      const slides = swiper.slides || [];
      slides.forEach((slide) => slide.classList.remove('one-right'));
      const nextSlide = swiper.el && swiper.el.querySelector('.swiper-slide-next');
      if (nextSlide) nextSlide.classList.add('one-right');
    } catch (e_) {
      console.log(e_);
    }
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="heading text-center text-3xl font-bold text-[#2F5B44] mb-8">Our Projects Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        speed={600}
        className="swiper_container"
        onSwiper={(sw) => applyOneRight(sw)}
        onSlideChange={(sw) => applyOneRight(sw)}
      >
        <SwiperSlide     >
          <img  src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide >
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler flex justify-center items-center gap-4 mt-8">
          <div className="swiper-button-prev slider-arrow w-12 h-12 bg-[#2F5B44] text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#1e3d2a] transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="swiper-button-next slider-arrow w-12 h-12 bg-[#2F5B44] text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#1e3d2a] transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      
      <style jsx>{`
        .one-right {
        rotate: 20deg;
        margin-top: 3rem;
        margin-left: 2rem;
        
        }
        .swiper_container {
          padding: 2rem 0;
        }
        
        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 300px;
          height: 300px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transition: transform 0.45s ease, box-shadow 0.45s ease;
        }
        
        .swiper-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .swiper-slide-shadow-left,
        .swiper-slide-shadow-right {
          border-radius: 20px;
        }
        
        .swiper-pagination-bullet {
          background: #2F5B44;
          opacity: 0.3;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
        
        @media (max-width: 768px) {
          .swiper-slide {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
}

export default CircularSwiper;