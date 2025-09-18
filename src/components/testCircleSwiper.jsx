import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import logo from "/images/home/Ellipse 7.svg";
import location from "/images/home/Group.svg";

const defaultSlides = [
  { image: '/images/about/Frame 432.jpg', title: 'Slide 1', description: 'Sample description 1' },
  { image: '/images/about/Frame 432.jpg', title: 'Slide 2', description: 'Sample description 2' },
  { image: '/images/about/Frame 432.jpg', title: 'Slide 3', description: 'Sample description 3' },
  { image: '/images/about/Frame 432.jpg', title: 'Slide 4', description: 'Sample description 4' },
  { image: '/images/about/Frame 432.jpg', title: 'Slide 5', description: 'Sample description 5' },
  { image: '/images/about/Frame 432.jpg', title: 'Slide 6', description: 'Sample description 6' },
  { image: '/images/about/Frame 432.jpg', title: 'Slide 7', description: 'Sample description 7' },
  { image: '/images/about/Frame 432.jpg', title: 'Slide 8', description: 'Sample description 8' },
];

function TestCircleSwiper({ slides = defaultSlides, autoMs = 0, className = '' }) {
  const imagesRef = useRef(null);
  const rotateAdd = useMemo(() => 360 / Math.max(slides.length, 1), [slides.length]);
  const [rotateDeg, setRotateDeg] = useState(0);
  const timerRef = useRef(null);

  const goNext = useCallback(() => {          
    setRotateDeg((deg) => deg + rotateAdd);
  }, [rotateAdd]);

  const goPrev = useCallback(() => {
    setRotateDeg((deg) => deg - rotateAdd);
  }, [rotateAdd]);

  // rotation is applied via inline style transform on the circle container, with Tailwind transition classes

  useEffect(() => {
    if (autoMs <= 0) return undefined;
    timerRef.current = setInterval(goNext, autoMs);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [autoMs, goNext]);

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
    el.addEventListener('wheel', prevent, opts);
    return () => {
      el.removeEventListener('touchstart', prevent);
      el.removeEventListener('touchmove', prevent);
      el.removeEventListener('pointerdown', prevent);
      el.removeEventListener('mousedown', prevent);
      el.removeEventListener('wheel', prevent);
    };
  }, []);

  

  return (
    <>
      <div className={`relative w-full h-screen overflow-hidden bg-gradient-to-r from-[#2B2F3A] to-[#0D0E12] ${className}`}>
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[#E88735]" />

        <div
          ref={imagesRef}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full outline outline-[3px] outline-dashed outline-white/30 transition-transform duration-500 ease-in-out"
          style={{ width: '1550px', height: '1550px', transform: `translate(-50%, 50%) rotate(${rotateDeg}deg)`, touchAction: 'none', userSelect: 'none', WebkitUserSelect: 'none' }}
        >
          {slides.map((s, idx) => (
            <div key={idx} className="absolute inset-0 text-center transform" style={{ transform: `rotate(${(idx + 1) * rotateAdd}deg)` }}>
              <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:top-[12%] z-20 flex w-[20.625rem] h-[27.125rem] px-[1.5rem] py-[2rem] flex-col justify-between items-start gap-[1.25rem] shrink-0 rounded-[2.5rem] bg-[#2F5B44] shadow-[0.125rem_0.3125rem_0.25rem_0_rgba(0,0,0,0.25)] overflow-hidden">
                <p className="text-[#FEF9D0] text-center font-inter text-[1.125rem] not-italic font-normal leading-[1.8rem] w-full break-words whitespace-normal overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:8] [-webkit-box-orient:vertical]">
                  DEVEXT transformed our website into a modern, user-friendly platform that truly reflects our brand. Their team went the extra mile to ensure everything was perfectly tailored to our needs.
                </p>
                <div className="flex items-center gap-[0.75rem] self-start mt-auto">
                  <img src={logo} alt="logo" className="w-[3rem] h-[3rem] rounded-full" />
                  <div className="flex flex-col items-start">
                    <p className="text-[#FEF9D0] font-inter text-[1.125rem] not-italic font-semibold leading-normal">Joud&Karam</p>
                    <div className="flex items-center gap-[0.375rem] opacity-90">
                      <img src={location} alt="location" className="w-[1rem] h-[1.25rem]" />
                      <span className="text-[#FEF9D0] text-[0.9375rem]">Dubai</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={goPrev}
          className="absolute top-1/2 left-64 -translate-y-1/2 text-white text-[6rem] font-bold opacity-30 hover:opacity-100 select-none"
        >
          {'<'}
        </button>
        <button
          type="button"
          onClick={goNext}
          className="absolute top-1/2 right-64 -translate-y-1/2 text-white text-[6rem] font-bold opacity-30 hover:opacity-100 select-none"
        >
          {'>'}
        </button>
      </div>
    </>
  );
}

export default TestCircleSwiper;