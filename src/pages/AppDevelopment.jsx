import Navbar from "../components/Navbar";
import { motion } from 'framer-motion';

const MotionDiv = motion.div;



const image4 ="https://res.cloudinary.com/daop3bufa/image/upload/v1762435935/Frame1_tyqrsx.svg"
const image5 ="https://res.cloudinary.com/daop3bufa/image/upload/v1762435939/Frame4_ex6gh4.svg"
const image6 ="https://res.cloudinary.com/daop3bufa/image/upload/v1762435931/Frame_guzc9z.svg"
const image7 ="https://res.cloudinary.com/daop3bufa/image/upload/v1762435939/Frame7_sy88pb.svg"
const image8 ="https://res.cloudinary.com/daop3bufa/image/upload/v1762435947/Frame8_ab9y4r.svg"
const image9 ="https://res.cloudinary.com/daop3bufa/image/upload/v1762435944/Frame9_pxqgrp.svg"


const icon1 ="https://res.cloudinary.com/daop3bufa/image/upload/v1762435931/devicon_flutter_r2y4km.svg"
const icon2 ="https://res.cloudinary.com/daop3bufa/image/upload/v1762437017/test_mvosmq.png"
const icon3 ="https://res.cloudinary.com/daop3bufa/image/upload/v1762435947/Vector_k3ysoo.svg"


const albazar ="https://res.cloudinary.com/daop3bufa/image/upload/v1762435946/Albazar_Mockup_q3qtuz.png"
const travel ="https://res.cloudinary.com/daop3bufa/image/upload/v1762435948/Frame_536_cpikmz.png" 
const beating ="https://res.cloudinary.com/daop3bufa/image/upload/v1762435937/Frame_537_g0zdck.png"
const location ="https://res.cloudinary.com/daop3bufa/image/upload/v1762435946/Group_vbaufy.svg"
import { Link } from "react-router-dom";






const  AppDevelopment =()=>{

    const fadeLeft = {
        hidden: { opacity: 0, x: -24 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
      };
    
      const fadeRight = {
        hidden: { opacity: 0, x: 24 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
      };

    

    const cardsData = [
        {
            num: "1",
            img: image4,
            title: "Android",
            desc: "Building Android apps using Gradle building tool and Android Studio, for different devices and screen sizes.",
            titleClass: "uppercase text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] leading-normal text-center"
        },
        {
            num: "2",
            img: image5,
            title: "iOS",
            desc: "Building iOS apps using Swift programming language, for both iPhone and iPad.",
            titleClass: "uppercase text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] leading-normal text-center"
        },
        {
            num: "3",
            img: image6,
            title: "DevOps",
            desc: "Continuous integration for the project life cycle, starting from development and ending with automatic store submission.",
            titleClass: "uppercase text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] leading-normal text-center"
        },
        {
            num: "4",
            img: image7,
            title: "User-Friendly Designs",
            desc: "By following the latest platform-specific guidelines and design trends, we create professional apps that are visually appealing .",
            titleClass: "uppercase text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px] leading-normal text-center lg:whitespace-nowrap"
        },
        {
            num: "5",
            img: image8,
            title: "Quality",
            desc: "Our mobile apps undergo multiple stages of testing, including functional, compatibility, security, and UI testing.",
            titleClass: "uppercase text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] leading-normal text-center"
        },
        {
            num: "6",
            img: image9,
            title: "Testing on Different Devices",
            desc: "We ensure top-quality apps by testing them across various devices ",
            titleClass: "uppercase text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px] leading-normal "
        }
    ];

    return (
        <>
        <Navbar />
        <div className="bg-[#FEF9D0] overflow-x-hidden">

 
      

        <section
                className="relative w-full min-h-[60vh] md:min-h-[80vh] lg:min-h-[80vh] sm:min-h-[42.1875rem] xl:min-h-[42.1875rem] bg-[#2F5B44] flex items-center justify-center text-[#FEF9D0] overflow-hidden"
            >
                {/* Background logo: full width, never cropped */}
                <img
                    src="https://res.cloudinary.com/daop3bufa/image/upload/v1759050998/Mask_group_wlabwd.svg"
                    alt="hero section background"
                    aria-hidden="true"
                    className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain pointer-events-none hidden sm:block sm:inset-0 sm:w-full sm:h-full sm:left-0 sm:translate-x-0 object-left"
                />
                

                <div className=" container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2  mt-[7rem] sm:mt-[10rem] px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <MotionDiv 
                        className="col-span-1 flex flex-col gap-5  justify-center "
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >  
                        <h6 className="text-[#FEF9D0] font-inter text-[40px] not-italic font-semibold lg:whitespace-nowrap ">Build High Quality Scalable Mobile <br /> Application</h6>
                        <p className="text-[#FEF9D0] font-inter text-[24px] not-italic font-normal  ">  Devext is among the leading mobile app development companies, with a vision that goes beyond simply delivering a functional app to the store. </p>
                    </MotionDiv>
                    <MotionDiv 
                        className="col-span-1 flex items-center  lg:justify-end justify-center "
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >  
                        <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1762160512/9226d22cee17d0df8da0451222535267a6b4577f_qg9ezd.png" alt="hero section image" className="w-full max-w-[25rem] h-auto " />
                    </MotionDiv>
                </div>
               
            </section>


            <section>
                <div className="bg-[#FEF9D0] min-h-[50vh]">
                    <p className="text-[#2F5B44] text-center font-inter text-[24px] sm:text-[32px] md:text-[36px] lg:text-[42px] not-italic font-medium leading-normal uppercase  pt-[2rem] pb-[4rem]">Project execution handled  by <br />  seasoned  product  builders</p>

                    <div className=" container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 gap-5 pb-[4rem]">

                     {cardsData.map((card, index) => (
                            <MotionDiv 
                                key={index}
                                className="flex flex-col items-start space-y-4  w-full px-5 py-7     rounded-2xl border-2 border-[#2F5B44]"
                                variants={fadeRight}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <div className="flex justify-between items-center w-full px-4   sm:px-0">
                                    <div>
                                        <img src={card.img} alt={`icon ${card.num}`} className="w-16  " />
                                    </div>
                                    <div className="ml-auto flex flex-col justify-center items-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2F5B44B2]">
                                        <p className="text-[#FEF9D0] text-center font-inter text-base md:text-2xl font-normal leading-none">{card.num}</p>
                                    </div>
                                </div>
                                <p className={`px-4 sm:px-0 text-[#2F5B44] font-inter font-normal ${card.titleClass}`}>
                                    {card.title}
                                </p>
                                <p className="px-4 sm:px-0 text-[#2F5B44] font-inter font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                                    {card.desc}
                                </p>
                            </MotionDiv>
                        ))}
                    </div>

                </div>
            </section>


            <section>
                <div className="bg-[#2F5B44] min-h-[25vh]">
                    <p className="text-[#FEF9D0] text-center font-inter text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold not-italic leading-normal uppercase py-[1.5rem] sm:py-[2rem]">technologies We use!</p>

                    <div className="container mx-auto max-w-7xl grid grid-cols-3 md:grid-cols-3   lg:grid-cols-3 px-3 gap-3 sm:gap-4 md:gap-5 mt-6 sm:mt-10 md:mt-[5rem] pb-8 sm:pb-12 md:pb-[4rem]">
                        <div className="col-span-1 text-center flex justify-center gap-2 sm:gap-3 md:gap-5 items-center">
                            <img src={icon1} alt="icon1" className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />
                            <p className="text-[#FEF9D0] font-inter text-[14px] sm:text-[18px] md:text-[30px] lg:text-[36.07px] not-italic font-normal leading-normal uppercase"> Flutter</p>
                            
                        </div>
                        <div className="col-span-1 text-center flex justify-center gap-2 sm:gap-3 md:gap-5 items-center">
                            <img src={icon2} alt="icon2" className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />
                            <p className="text-[#FEF9D0] font-inter text-[14px] sm:text-[18px] md:text-[30px] lg:text-[36.07px] not-italic font-normal leading-normal uppercase"> Dart</p>
                           
                        </div>
                        <div className="col-span-1 text-center flex justify-center gap-2 sm:gap-3 md:gap-5 items-center">
                            <img src={icon3} alt="icon3" className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />
                            <p className="text-[#FEF9D0] font-inter text-[14px] sm:text-[18px] md:text-[30px] lg:text-[36.07px] not-italic font-normal leading-normal uppercase"> Kotlin</p>
                        </div>

                    

                    </div>

                </div>
            </section>



            <section>
                <div className=" mt-5  bg-[#2F5B44B2] min-h-[25vh]  ">

                    <div className="  mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-[6rem] py-[5rem] px-7 sm:px-6 lg:px-8 items-center  ">


                        
            <motion.div 
	             variants={fadeLeft}
	             initial="hidden"
	             whileInView="visible"
	             viewport={{ once: false, amount: 0.2 }}>
                    <img src={albazar} alt="albazar" className="w-full h-full object-cover" />

                    

            </motion.div>

            <motion.div 
	             variants={fadeRight}
	             initial="hidden"
	             whileInView="visible"
	             viewport={{ once: false, amount: 0.2 }}>
                      <div className="flex flex-col gap-3 ">
                            <p className="text-[#FEF9D0] font-inter text-[42px] md:text-[36px] sm:text-[28px] font-bold not-italic leading-normal uppercase">Marketplace App</p>
                            <p className="text-[#FEF9D0] font-inter text-[24px] md:text-[15px] sm:text-[12px] not-italic font-normal leading-normal">AlBazar is a comprehensive marketplace app designed for users in Syria to easily buy, sell, and rent properties, cars, lands, and buildings. The platform connects buyers and sellers in one place, making it simple to browse listings, compare options, and communicate directly. With its user-friendly interface and advanced search filters, AlBazar makes trading and renting faster, safer, and more convenient for everyone.</p>
                            <div className="flex mt-3 ">
                                <img src={location} alt="location" className="w-10 h-10" />
                                <p className="text-[#FEF9D0] font-inter text-[24px] md:text-[20px] sm:text-[16px] not-italic font-normal leading-normal">Syria</p>


                            </div>


                        </div>


                    

            </motion.div>


                        
                    

                        <motion.div 
	             variants={fadeLeft}
	             initial="hidden"
	             whileInView="visible"
	             viewport={{ once: false, amount: 0.2 }}>
                                            <div className=" flex flex-col gap-3 ">
                            <p className="text-[#FEF9D0] font-inter text-[42px] md:text-[36px] sm:text-[28px] font-bold not-italic leading-normal uppercase">Marketplace App</p>
                            <p className="text-[#FEF9D0] font-inter text-[24px] md:text-[15px] sm:text-[12px] not-italic font-normal leading-normal">This travel agency app is designed to make trip planning in Turkey effortless and enjoyable. It allows users to explore famous destinations, book complete travel packages, and discover top activities all in one place. With an elegant interface and detailed information about each location, hotel, and experience, the app helps travelers find the perfect getaway while simplifying the booking process for tours, accommodations, and services across Turkey.</p>
                            <div className="flex mt-3 ">
                                <img src={location} alt="location" className="w-10 h-10" />
                                <p className="text-[#FEF9D0] font-inter text-[24px] md:text-[20px] sm:text-[16px] not-italic font-normal leading-normal">Turkey</p>


                            </div>


                        </div>

                    

            </motion.div>


            <motion.div 
	             variants={fadeRight}
	             initial="hidden"
	             whileInView="visible"
	             viewport={{ once: false, amount: 0.2 }}>
                     <img src={travel} alt="albazar" className="w-full h-full object-cover" />

                    

            </motion.div>







                        
                     


                        <motion.div 
	             variants={fadeLeft}
	             initial="hidden"
	             whileInView="visible"
	             viewport={{ once: false, amount: 0.2 }}>
                       <img src={beating} alt="albazar" className="w-full h-full object-cover" />

                    

            </motion.div>



            <motion.div 
	             variants={fadeRight}
	             initial="hidden"
	             whileInView="visible"
	             viewport={{ once: false, amount: 0.2 }}>

                       <div className=" flex flex-col gap-3 ">
                            <p className="text-[#FEF9D0] font-inter text-[42px] md:text-[36px] sm:text-[28px] font-bold not-italic leading-normal uppercase">Beating Games App</p>
                            <p className="text-[#FEF9D0] font-inter text-[24px] md:text-[15px] sm:text-[12px] not-italic font-normal leading-normal">This betting game app, developed for Youmi Tech in the Philippines, offers an engaging and secure platform for sports enthusiasts to place bets and track live match results in real time. With a sleek, modern interface and smooth user experience, users can easily explore various sports categories, view match statistics, and make informed bets. The app is designed to combine excitement, strategy, and convenience — bringing the thrill of sports betting right to users’ fingertips.</p>
                          <div className="flex mt-3 ">
                                <img src={location} alt="location" className="w-10 h-10" />
                                <p className="text-[#FEF9D0] font-inter text-[24px] md:text-[20px] sm:text-[16px] not-italic font-normal leading-normal">Turkey</p>


                            </div>


                        </div>

                    

            </motion.div>

                     







                    </div>
                    

                </div>
               
            </section>



            <section>
                <div className="mt-20 bg-[#2F5B44] min-h-[25vh]  " >

                    <div className=" container mx-auto  max-w-7xl py-[5rem] flex flex-col md:flex-row w-full  justify-between items-center gap-6">
  

                        <motion.div 
	             variants={fadeLeft}
	             initial="hidden"
	             whileInView="visible"
	             viewport={{ once: false, amount: 0.2 }}>
                         <p className="text-[#FEF9D0] font-inter text-[28px] sm:text-[32px] md:text-[40px] not-italic font-medium leading-normal uppercase text-center md:text-left">
                        Have an App Development <br /> project? <br /> Contact us Now
                        </p>

                    

            </motion.div>


                        <motion.div 
	             variants={fadeRight}
	             initial="hidden"
	             whileInView="visible"
	             viewport={{ once: false, amount: 0.2 }}>

                        <Link 
                            to="/calculator"
                            className="inline-flex items-center bg-transparent text-[#FEF9D0] px-8 py-3 rounded-full font-medium text-[14px] sm:text-[16px] hover:bg-[#FEF9D0] hover:text-[#2F5B44] transition-all duration-300 transform hover:scale-105 group mt-4 md:mt-0"
                            style={{ border: '2px solid #FEF9D0' }}
                            >
                            Request A quote
                             <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759052696/Vector1_yust9l.svg" alt="arrow" className="w-5 h-5 ml-3 transition-all duration-300 group-hover:hidden" />
                             <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759052589/arrow_Down_jlay7a.svg" alt="arrow" className="w-5 h-5 ml-3 transition-all duration-300 hidden group-hover:block" />
                        </Link>

                    

            </motion.div>


                    </div>
                    

                </div>

            </section>

            <div className="mt-20 bg- min-h-[1vh] ">
                
            </div>


           


        </div>

        </> 
    )

}

export default AppDevelopment;