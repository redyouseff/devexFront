import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import location from "/images/home/Group.svg";
import fiftharrowleft from "/images/home/Frame 18.svg";
import fiftharrowright from "/images/home/Frame 17.svg";
import image8 from "/images/circleSwiperHome/Ellipse 7.svg";
import image1 from "/images/circleSwiperHome/Ellipse 1.svg";
import image2 from "/images/circleSwiperHome/Ellipse 2.svg";
import image7 from "/images/circleSwiperHome/Ellipse 77.svg";
import greenicon from "/images/circleSwiperHome/Group.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const defaultSlides = [
  {id:1, image:image1, title: 'We’ve worked with several agencies before, but DEVEXT stands out for their creativity and reliability. They delivered our project on time and exceeded our expectations in every way.', description: 'Sample description 1' },
  {id:2, image: image2, title: 'Working with DEVEXT was a seamless experience. They understood our goals from the start and provided innovative solutions that added real value to our business.”', description: 'Sample description 2' },
  {id:3, image: image7, title: 'The team at DEVEXT combines professionalism with a personal touch. Their attention to detail and commitment to quality gave us confidence throughout the entire project.', description: 'Sample description 3' },
  {id:4, image: image8, title: 'DEVEXT transformed our website into a modern, user-friendly platform that truly reflects our brand. Their team went the extra mile to ensure everything was perfectly tailored to our needs.', description: 'Sample description 4' },
  {id:5, image: image7, title: 'The team at DEVEXT combines professionalism with a personal touch. Their attention to detail and commitment to quality gave us confidence throughout the entire project.', description: 'Sample description 5' },
  {id:6, image: image1, title: '“Thanks to DEVEXT, our new app is not only functional but also engaging and easy to use. We’ve received great feedback from our customers since its launch.”', description: 'Sample description 6' },
  {id:7, image: image7, title: 'The team at DEVEXT combines professionalism with a personal touch. Their attention to detail and commitment to quality gave us confidence throughout the entire project.”', description: 'Sample description 7' },
  {id:8, image: image8, title: 'DEVEXT transformed our website into a modern, user-friendly platform that truly reflects our brand. Their team went the extra mile to ensure everything was perfectly tailored to our needs.', description: 'Sample description 8' },
]

function TestCircleSwiper({ slides = defaultSlides, autoMs = 0, className = '' }) {
  const imagesRef = useRef(null);
  const rotateAdd = useMemo(() => 360 / Math.max(slides.length, 1), [slides.length]);
  const [rotateDeg, setRotateDeg] = useState(0);
  const timerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const goNext = useCallback(() => {          
    setRotateDeg((deg) => deg + rotateAdd);
  }, [rotateAdd]);

  const goPrev = useCallback(() => {
    setRotateDeg((deg) => deg - rotateAdd);
  }, [rotateAdd]);

  // rotation is applied via inline style transform on the circle container, with Tailwind transition classes

  useEffect(() => {
    if (autoMs <= 0 || isMobile) return undefined;
    timerRef.current = setInterval(goNext, autoMs);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [autoMs, goNext, isMobile]);

  // Disable swipe/drag on images container; only buttons navigate
  useEffect(() => {
    const el = imagesRef.current;
    if (!el) return undefined;
    const prevent = (e) => { e.preventDefault(); e.stopPropagation(); };
    const opts = { passive: false };
    el.addEventListener('touchstart', prevent, opts);
    el.addEventListener('touchmove', prevent, opts);
    el.addEventListener('pointerdown', prevent, opts);
    el.addEventListener('mousedown', prevent, opts);
    return () => {
      el.removeEventListener('touchstart', prevent);
      el.removeEventListener('touchmove', prevent);
      el.removeEventListener('pointerdown', prevent);
      el.removeEventListener('mousedown', prevent);
    };
  }, []);

  

  return (
    <>
      {isMobile ? (
        <div className={`relative w-full h-screen overflow-hidden bg-gradient-to-r -mt-[1rem] z-10 ${className}`}>
          <Swiper
            slidesPerView={1}
            spaceBetween={16}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="w-full h-full px-4 py-8"
          >
            {slides.map((s, idx) => (
              <SwiperSlide key={idx} className="flex items-center justify-center">
                {s.id ? (
                  <div className="relative z-20 flex w-[20.625rem] h-[27.125rem] px-[1.5rem] py-[2rem] flex-col justify-between items-start gap-[1.25rem] shrink-0 rounded-[2.5rem] bg-[#2F5B44] shadow-[0.125rem_0.3125rem_0.25rem_0_rgba(0,0,0,0.25)] overflow-hidden">
                    <p className="text-[#FEF9D0] text-center font-inter text-[20px] font-normal leading-normal">
                      {s.title}
                    </p>
                    <div className="flex items-center gap-[0.75rem] self-start mt-auto">
                      <img src={s.image} alt="logo" className="w-[3rem] h-[3rem] rounded-full" />
                      <div className="flex flex-col items-start">
                        <p className="text-[#FEF9D0] font-inter text-[1.125rem] not-italic font-semibold leading-normal">Joud&Karam</p>
                        <div className="flex items-center gap-[0.375rem] opacity-90">
                          <img src={location} alt="location" className="w-[1rem] h-[1.25rem]" />
                          <span className="text-[#FEF9D0] text-[0.9375rem]">Dubai</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative z-20 flex w-[20.625rem] h-[27.125rem] px-[1.5rem] py-[2rem] flex-col justify-between items-start gap-[1.25rem] shrink-0 rounded-[2.5rem] bg-[#FEF9D0] shadow-[-2px_6px_4px_0_rgba(0,0,0,0.25)] overflow-hidden">
                    <p className="text-[#2F5B44] text-center font-inter text-[1.125rem] not-italic font-normal leading-[1.8rem] w-full break-words whitespace-normal overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:8] [-webkit-box-orient:vertical]">
                      {s.title}
                    </p>
                    <div className="flex items-center gap-[0.75rem] self-start mt-auto">
                      <img src={s.image} alt="logo" className="w-[3rem] h-[3rem] rounded-full" />
                      <div className="flex flex-col items-start">
                        <p className="text-[#2F5B44] font-inter text-[1.125rem] not-italic font-semibold leading-normal">Joud&Karam</p>
                        <div className="flex items-center gap-[0.375rem] opacity-90">
                          <img src={greenicon} alt="location" className="w-[1rem] h-[1.25rem]" />
                          <span className="text-[#2F5B44] text-[0.9375rem]">Dubai</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className={`relative w-full h-screen overflow-hidden bg-gradient-to-r -mt-[1rem] z-10  ${className}`}>
          <div className="absolute inset-y-0 left-0 w-1/2" />

          <div
            ref={imagesRef}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full outline-[3px] outline-dashed outline-white/30 transition-transform duration-500 ease-in-out  "
            style={{ width: '1950px', height: '1330px', transform: `translate(-50%, 50%) rotate(${rotateDeg}deg)`, touchAction: 'none', userSelect: 'none', WebkitUserSelect: 'none' }}
          >
            {slides.map((s, idx) => (
              <div key={idx} className="absolute inset-0 text-center transform" style={{ transform: `rotate(${(idx + 1) * rotateAdd}deg)` }}>
                {s.id ? (
                  <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:top-[-2%] z-20 flex w-[20.625rem] h-[27.125rem] px-[1.5rem] py-[2rem] flex-col justify-between items-start gap-[1.25rem] shrink-0 rounded-[2.5rem] bg-[#2F5B44] shadow-[0.125rem_0.3125rem_0.25rem_0_rgba(0,0,0,0.25)] overflow-hidden">
                    <p className="text-[#FEF9D0] text-center font-inter text-[20px] font-normal leading-normal">
                      {s.title}
                    </p>   
                    <div className="flex items-center gap-[0.75rem] self-start mt-auto">
                      <img src={s.image} alt="logo" className="w-[3rem] h-[3rem] rounded-full" />   
                      <div className="flex flex-col items-start">
                        <p className="text-[#FEF9D0] font-inter text-[1.125rem] not-italic font-semibold leading-normal">Joud&Karam</p>
                        <div className="flex items-center gap-[0.375rem] opacity-90">
                          <img src={location} alt="location" className="w-[1rem] h-[1.25rem]" />
                          <span className="text-[#FEF9D0] text-[0.9375rem]">Dubai</span>  
                        </div>
                      </div>
                    </div>  
                  </div>
                ) : (   
                  <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:top-[-2%] z-20 flex w-[20.625rem] h-[27.125rem] px-[1.5rem] py-[2rem] flex-col justify-between items-start gap-[1.25rem] shrink-0 rounded-[2.5rem] bg-[#FEF9D0] shadow-[-2px_6px_4px_0_rgba(0,0,0,0.25)] overflow-hidden">
                    <p className="text-[#2F5B44] text-center font-inter text-[1.125rem] not-italic font-normal leading-[1.8rem] w-full break-words whitespace-normal overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:8] [-webkit-box-orient:vertical]">
                      {s.title}   
                    </p>
                    <div className="flex items-center gap-[0.75rem] self-start mt-auto">
                      <img src={s.image} alt="logo" className="w-[3rem] h-[3rem] rounded-full" />
                      <div className="flex flex-col items-start">
                        <p className="text-[#2F5B44] font-inter text-[1.125rem] not-italic font-semibold leading-normal">Joud&Karam</p>
                        <div className="flex items-center gap-[0.375rem] opacity-90">
                          <img src={greenicon} alt="location" className="w-[1rem] h-[1.25rem]" />
                          <span className="text-[#2F5B44] text-[0.9375rem]">Dubai</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="absolute top-6 left-6 z-50 flex items-center gap-6">
            <button
              onClick={goPrev}
              className="hover:opacity-70 transition-opacity"
            >
              <img src={fiftharrowleft} alt="Previous" className="w-10 h-10" />
            </button>
            <button
              onClick={goNext}
              className="hover:opacity-70 transition-opacity"
            >
              <img src={fiftharrowright} alt="Next" className="w-10 h-10" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default TestCircleSwiper;  