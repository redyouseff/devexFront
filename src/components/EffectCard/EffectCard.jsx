
import { useEffect, useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import location from "/images/home/Group.svg";
import greenicon from "/images/circleSwiperHome/Group.svg";
import image1 from "/images/circleSwiperHome/Ellipse 1.svg";
import image2 from "/images/circleSwiperHome/Ellipse 2.svg";
import image7 from "/images/circleSwiperHome/Ellipse 77.svg";
import image8 from "/images/circleSwiperHome/Ellipse 7.svg"; 
import fiftharrowleft from "/images/home/Frame 18.svg";
import fiftharrowright from "/images/home/Frame 17.svg";


const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const [breakpoint, setBreakpoint] = useState("lg");
  const [direction, setDirection] = useState("next");

  // Determine breakpoint to tune spacing/scale per device size
  useEffect(() => {
    const computeBp = () => {
      const width = window.innerWidth;
      if (width < 640) return "sm"; // mobile
      if (width < 1024) return "md"; // tablet / small laptop
      return "lg"; // laptop/desktop
    };
    const onResize = () => setBreakpoint(computeBp());
    setBreakpoint(computeBp());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
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

  // Use same card content as in TestCircleSwiper (five items to match positions)
  const slides = [
    {
      image: image1,
      title:
        "We’ve worked with several agencies before, but DEVEXT stands out for their creativity and reliability. They delivered our project on time and exceeded our expectations in every way.",
    },
    {
      image: image2,
      title:
        "Working with DEVEXT was a seamless experience. They understood our goals from the start and provided innovative solutions that added real value to our business.",
    },
    {
      image: image7,
      title:
        "The team at DEVEXT combines professionalism with a personal touch. Their attention to detail and commitment to quality gave us confidence throughout the entire project.",
    },
    {
      image: image8,
      title:
        "DEVEXT transformed our website into a modern, user-friendly platform that truly reflects our brand. Their team went the extra mile to ensure everything was perfectly tailored to our needs.",
    },
    {
      image: image7,
      title:
        "Thanks to DEVEXT, our new app is not only functional but also engaging and easy to use. We’ve received great feedback from our customers since its launch.",
    },
  ];

  const positions = ["center", "left1", "left", "right", "right1"];

  // Responsive motion variants to keep cards within viewport without horizontal scroll
  const cardVariants = useMemo(() => {
    const offsets =
      breakpoint === "sm"
        ? { l1: "60%", l: "110%", r: "110%", r1: "60%", s1: 0.9, s: 0.8 }
        : breakpoint === "md"
        ? { l1: "75%", l: "135%", r: "135%", r1: "75%", s1: 0.88, s: 0.8 }
        : { l1: "90%", l: "150%", r: "150%", r1: "90%", s1: 0.85, s: 0.78 };

    return {
      // anchor horizontally to middle of the container: left:50% + x:calc(-50% + offset)
      center: { x: "calc(-50% + 0%)", y: "-50%", scale: 1, zIndex: 5 },
      left1: {
        x: `calc(-50% - ${offsets.l1})`,
        y: "-50%",
        scale: offsets.s1,
        zIndex: 3,
      },
      left: { x: `calc(-50% - ${offsets.l})`, y: "-50%", scale: offsets.s, zIndex: 2 },
      right: { x: `calc(-50% + ${offsets.r})`, y: "-50%", scale: offsets.s, zIndex: 2 },
      right1: {
        x: `calc(-50% + ${offsets.r1})`,
        y: "-50%",
        scale: offsets.s1,
        zIndex: 3,
      },
    };
  }, [breakpoint]);
  return (
    <div className="flex items-center flex-col justify-center w-full px-4 sm:px-6 lg:px-8">
      {/* Viewport-safe stage */}
      <div
        className="relative w-full max-w-screen-xl overflow-hidden"
        style={{ height: "clamp(420px, 70vh, 640px)" }}
      >
      {/* Controls - top left */}
      <div className="absolute top-4 left-4 z-10 flex flex-row gap-2">
        <button
          className="text-white rounded-md py-2 px-4 hover:cursor-pointer"
          onClick={handleBack}
          aria-label="Previous"
        >
          <img src={fiftharrowleft} alt="Previous" />
        </button>
        <button
          className="text-white rounded-md py-2 px-4 hover:cursor-pointer"
          onClick={handleNext}
          aria-label="Next"
        >
          <img src={fiftharrowright} alt="Next" />
        </button>
      </div>
      {slides.map((s, index) => {
        const isGreen = index % 2 === 0;
        return (
          <Motion.div
            key={index}
            className={`rounded-[2.5rem] shadow-[0.125rem_0.3125rem_0.25rem_0_rgba(0,0,0,0.25)] overflow-hidden ${
              isGreen ? "bg-[#2F5B44]" : "bg-[#FEF9D0] shadow-[-2px_6px_4px_0_rgba(0,0,0,0.25)]"
            }`}
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={cardVariants}
            transition={{ duration: 0.55, ease: direction === "next" ? [0.2, 0.8, 0.2, 1] : [0.4, 0, 0.2, 1] }}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "clamp(220px, 75vw, 330px)",
              height: "clamp(300px, 110vw, 434px)",
              padding: "2rem 1.5rem",
            }}
          >

            <div className="flex flex-col justify-between h-full my-5]">
            <p
              className={`${
                isGreen ? "text-[#FEF9D0]" : "text-[#2F5B44]"
              } text-center font-inter text-[1.125rem] font-normal leading-[1.8rem] w-full break-words whitespace-normal overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:8] [-webkit-box-orient:vertical]`}
            >
              {s.title}
            </p>
            <div className="flex items-center gap-[0.75rem] self-start mt-auto">
              <img src={s.image} alt="logo" className="w-[3rem] h-[3rem] rounded-full" />
              <div className="flex flex-col items-start">
                <p
                  className={`${
                    isGreen ? "text-[#FEF9D0]" : "text-[#2F5B44]"
                  } font-inter text-[1.125rem] not-italic font-semibold leading-normal`}
                >
                  Joud&Karam
                </p>
                <div className="flex items-center gap-[0.375rem] opacity-90">
                  <img
                    src={isGreen ? location : greenicon}
                    alt="location"
                    className="w-[1rem] h-[1.25rem]"
                  />
                  <span className={`${isGreen ? "text-[#FEF9D0]" : "text-[#2F5B44]"} text-[0.9375rem]`}>Dubai</span>
                </div>
              </div>
            </div>
            </div>
 
          </Motion.div>
        );
      })}
      </div>
    </div>
  );
};

export default ImageSlider;

