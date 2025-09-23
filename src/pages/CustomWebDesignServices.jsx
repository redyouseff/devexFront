
import backgroundlogo from "/images/EcommerceDesign/Mask group.svg";
import image from "/images/CustomWebDesignServices/website mockup image 2.svg";
import Navbar from "../components/Navbar";
import icon1 from "/images/CustomWebDesignServices/Vector.svg";
import icon2 from "/images/CustomWebDesignServices/custom we design.svg"
import icon3 from "/images/CustomWebDesignServices/Mask group.svg";
import icon4 from "/images/CustomWebDesignServices/Responsive Web.svg";
import downarrow2green from "/images/home/arrow Down.svg"
import downarrow from "/images/home/Vector1.svg"
import image1 from "/images/CustomWebDesignServices/Rectangle 2.svg";
import vector1 from "/images/CustomWebDesignServices/Vector11.svg";
import vector2 from "/images/CustomWebDesignServices/Vector12.svg";
import vector3 from "/images/CustomWebDesignServices/Vector13.svg";
import vector4 from "/images/CustomWebDesignServices/Group 14.svg";
import vector5 from "/images/CustomWebDesignServices/Vector15.svg";
import vector6 from "/images/CustomWebDesignServices/Vector16.svg";
import vector7 from "/images/CustomWebDesignServices/Vector17.svg";
import vector8 from "/images/CustomWebDesignServices/Vector18.svg";

import { Link} from "react-router-dom";
import SwiperComponent from "../components/customWebDesign/SwiperComponent";




const CustomWebDesignServices = () => {
	const features = [
		{
			title: "UI/UX DESIGN",
			desc:
				"Tailored designs that reflect your brand identity and engage your target audience.",
			icon:icon1,
		},
		{
			title: "CUSTOM WEB DESIGN",
			desc:
				"Tailored designs that reflect your brand identity and engage your target audience.",
			icon: icon2
		},
		{
			title: "LANDING PAGE DESIGN",
			desc:
				"Tailored designs that reflect your brand identity and engage your target audience.",
			icon: icon3
		},
		{
			title: "RESPONSIVE DESIGN",
			desc:
				"Tailored designs that reflect your brand identity and engage your target audience.",
			icon:icon4
		},
	];

    return(
        <>
        <Navbar />

        <section
                className="relative w-full min-h-[60vh] md:min-h-[80vh] lg:min-h-[80vh] sm:min-h-[42.1875rem] xl:min-h-[42.1875rem] bg-[#2F5B44] flex items-center justify-center text-[#FEF9D0] overflow-hidden"
            >
                {/* Background logo: full width, never cropped */}
                <img
                    src={backgroundlogo}
                    alt=""
                    aria-hidden="true"
                    className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain pointer-events-none sm:inset-0 sm:w-full sm:h-full sm:left-0 sm:translate-x-0 object-left"
                />

                <div className=" container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2  mt-[7rem] sm:mt-[10rem] px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <div className="col-span-1 flex flex-col  justify-center ">  
                        <h6 className="text-[#FEF9D0] font-inter text-[40px] not-italic font-semibold leading-normal">Custom Website Design <br /> Services</h6>
                        <p className="text-[#FEF9D0] font-inter text-[24px] not-italic font-normal leading-normal"> is a full-service agency comprised of leading web designers from around the globe. Whether building a website from scratch or redesigning your current digital presence, our web design services include:</p>
                    </div>
                    <div className="col-span-1 flex items-center  lg:justify-end justify-center ">  
                        <img src={image} alt="" />
                    </div>
                </div>
               
            </section>

            {/* second section */}
            <section>

			<div className="bg-[#FEF9D0] flex justify-center items-center min-h-[30vh] py-10 sm:py-12 md:py-16">
				<p className="max-w-[901px] w-full px-4 sm:px-6 lg:px-8 text-[#2F5B44] font-inter text-base sm:text-lg md:text-xl lg:text-[28px] not-italic font-semibold leading-normal text-center mt-5">
				is a full-service agency comprised of leading web designers from around the globe. Whether building a website from scratch or redesigning your current digital presence, our web design services include:
				</p>

			</div>

			
            </section>

		{/* third section */}
		<section>
			<div className="bg-[#2F5B44]">
				<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
						{features.map(({ title, desc, icon }, index) => (
							<div key={index} className="relative bg-[#FEF9D0] text-[#2F5B44] rounded-3xl p-8 sm:p-10 shadow-[0_8px_0_#254C3A]">
								<div className="w-full flex justify-center md:justify-center mb-6"> 
									<img src={icon} alt="" />
								</div>
								<h3 className="text-center font-inter text-2xl sm:text-3xl font-semibold tracking-tight">
									{title}
								</h3>
								<p className="mt-4 text-center font-inter text-sm sm:text-base md:text-lg leading-relaxed text-[#2F5B44]/90">
									{desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>


        {/* fourth section */}
        <section>
            <div className="bg-[#FEF9D0] min-h-[20vh] flex justify-center items-center">  
                <p className="text-[#2F5B44] text-center font-inter text-[42px] not-italic font-medium leading-normal uppercase"> Our Custom Website Design Process</p>


            </div>
        </section>

        {/* fifth section */}
        <div className="">
            <div className="bg-[#2F5B44] min-h-[90vh] flex justify-center items-center">
                <SwiperComponent />

            </div>

        </div>

        {/* sixth section */}
        <div className="bg-[#FEF9D0] min-h-[300vh] ">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 ">
            <div className="col-span-1 text-[#2F5B44] font-inter text-[40px] not-italic font-medium leading-normal uppercase flex items-center justify-start  ">Why Your  Business <br /> Needs Custom  Web  <br />  Design Services</div>
                <img
                    src={image1}
                    alt="image1"
                    className="w-full h-full object-cover ]"
                    style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)' }}
                />

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-12 md:py-16  ">
                {/* {secondrow} */}

                {/* leftside */}
                <div className="ml-[3rem]">
                <div className="flex flex-col gap-4  items-start justify-start">
                    <img src={vector1} alt="vector1" className="w-20 h-20 " />
                    <h6 className="col-span-1 text-[#2F5B44] font-inter text-[40px] not-italic font-medium leading-normal uppercase flex items-center justify-center "> Establish Your Brand Identity</h6>
                    <p className="text-[#2F5B44] font-inter text-[20px] not-italic font-normal leading-normal max-w-[40rem]"> Your brand’s unique identity is reflected through visuals — like your logo, color palette, typography, imagery and illustrations. <br /> As a recognized web design agency, Digital Silk helps <br /> businesses use their signature brand voice and messaging to boost user engagement, foster long-term loyalty and increase <br />  conversions. <br /> Our experienced web designers can create visually appealing, brand-specific and engaging visuals that separate your business from the competition and effectively target your audience’s pain points. </p>


                </div>
                </div>
                {/* rightside */}
               <div className="ml-[5rem]"> 
               <div className="flex flex-col gap-4  items-start justify-start ">
                    <img src={vector2} alt="vector2" className="w-20 h-20  " />
                    <h6 className="col-span-1 text-[#2F5B44] font-inter text-[40px] not-italic font-medium leading-normal uppercase flex items-center justify-center "> Establish Your Brand Identity</h6>
                    <p className="text-[#2F5B44] font-inter text-[20px] not-italic font-normal leading-normal max-w-[40rem] "> It takes only a few seconds for users to form an opinion about your website and Devext can help you take advantage of this short time window. <br />
                    Devext’s custom web designs can improve brand recognition and credibility through high-performance <br /> and conversion-focused sites that resonate with your target <br /> demographic. </p>

                </div>

               </div>

                {/* thirdrow */}
               <div className="ml-[3rem]">
               <div className="flex flex-col gap-4  items-start justify-start ">
                    <img src={vector3} alt="vector3" className="w-20 h-20 mt-[rem] " />
                    <h6 className="col-span-1 text-[#2F5B44] font-inter text-[40px] not-italic font-medium leading-normal uppercase flex items-center justify-center ">Enhance User Experience And <br /> Navigation</h6>
                    <p className="text-[#2F5B44] font-inter text-[20px] not-italic font-normal leading-normal max-w-[40rem]"> Navigation menus provide an overview of your website’s structural organization — from the home page to all relevant child pages or subcategories. <br /> Devext’s custom web designs can help users find relevant information through seamless layouts that guide their attention to the desired action. <br /> This minimizes bounce rates, establishes proper conversion funnels and encourages visitors to continue browsing. <br /> Our SEO-optimized custom web designs can boost your search engine rankings and build your authority in your chosen market</p>

                </div>  

               </div>
                <div className="ml-[5rem]">
                <div className="flex flex-col gap-4  items-start justify-center  ">  
                    <img src={vector4} alt="vector3" className="w-20 h-20 mt-[rem] " />
                    <h6 className="col-span-1 text-[#2F5B44] font-inter text-[40px] not-italic font-medium leading-normal uppercase flex items-center justify-center "> Drive Conversions And Boost <br />  Engagement</h6>
                    <p className="text-[#2F5B44] font-inter text-[20px] not-italic font-normal leading-normal max-w-[40rem]"> Devext’s certified web designers use compelling calls-to-action (CTAs) to turn passive visitors into active customers by aligning their actions with your brand’s goals.<br />  These design elements provide a clear sense of urgency and emphasize the benefits of the intended action to drive conversions and engagement. <br /> Our custom web design services can help businesses encourage audiences to make a purchase, subscribe to a service or engage with on-page content through strategically placed and carefully executed calls-to-action.<br /> Devext optimizes CTA sizes and relies on the calculated use of white space to make them more visible and easily noticeable on the page.  </p>

                </div> 
                </div>

                {/* fourthrow */}
                <div className="ml-[3rem]">
                <div className="flex flex-col gap-4  items-start justify-center ">
                    <img src={vector5} alt="vector3" className="w-20 h-20 mt-[rem] " />
                    <h6 className="col-span-1 text-[#2F5B44] font-inter text-[40px] not-italic font-medium leading-normal uppercase flex items-center justify-center "> Ensure Cross-Device <br />  Compatibility</h6>
                    <p className="text-[#2F5B44] font-inter text-[20px] not-italic font-normal leading-normal max-w-[40rem]"> Devext’s custom web designs ensure website layouts, images and on-page content adapt seamlessly to different screen sizes and devices. <br /> Our team uses a mobile-first approach — we plan and design the mobile version alongside the desktop site.<br /> This allows us to make proactive changes to the overall design to ensure the mobile experience is just as excellent as the desktop one. <br /> Our designers rely on Fluid Grid layouts that adapt proportionally to any screen size or device and ensure consistent layouts across all platforms.  <br /> Our custom web design company also implements CSS Media Queries to customize cross-device layouts to ensure your design is responsive and user-friendly.  </p>

                </div> 
                </div>
                <div className="ml-[5rem]">
                <div className="flex flex-col gap-4  items-start justify-start  ">  
                    <img src={vector6} alt="vector3" className="w-20 h-20 mt-[rem] " />
                    <h6 className="col-span-1 text-[#2F5B44] font-inter text-[40px] not-italic font-medium leading-normal uppercase flex items-center justify-center "> Improve Search Engine <br />  Optimization </h6>
                    <p className="text-[#2F5B44] font-inter text-[20px] not-italic font-normal leading-normal max-w-[40rem]">Devext’s custom SEO strategies deliver tailored solutions that align with target audience needs and company goals. <br /> Our data-driven strategies enhance website visibility, scalability and flexibility to adapt to changing industry trends.  <br /> Devext’s custom web designs facilitate both on and off-page SEO efforts to help your business rank higher in search engine results and attract organic traffic.  </p>

                </div> 
                </div>


                {/* fifthrow */}
               <div className="ml-[3rem]">
               <div className="flex flex-col gap-4  items-start justify-center ">
                    <img src={vector7} alt="vector3" className="w-20 h-20 mt-[rem] " />
                    <h6 className="col-span-1 text-[#2F5B44] font-inter text-[40px] not-italic font-medium leading-normal uppercase flex items-center justify-center "> Ensure Cross-Device <br />  Compatibility</h6>
                    <p className="text-[#2F5B44] font-inter text-[20px] not-italic font-normal leading-normal max-w-[40rem]"> Devext’s custom web designs ensure website layouts, images and on-page content adapt seamlessly to different screen sizes and devices. <br /> Our team uses a mobile-first approach — we plan and design the mobile version alongside the desktop site.<br /> This allows us to make proactive changes to the overall design to ensure the mobile experience is just as excellent as the desktop one. <br /> Our designers rely on Fluid Grid layouts that adapt proportionally to any screen size or device and ensure consistent layouts across all platforms.  <br /> Our custom web design company also implements CSS Media Queries to customize cross-device layouts to ensure your design is responsive and user-friendly.  </p>

                </div> 
               </div>
                <div className="ml-[5rem]">
                <div className="flex flex-col gap-4  items-start justify-start  ">  
                    <img src={vector8} alt="vector3" className="w-20 h-20 mt-[rem] " />
                    <h6 className="col-span-1 text-[#2F5B44] font-inter text-[40px] not-italic font-medium leading-normal uppercase flex items-center justify-center "> Improve Search Engine <br />  Optimization </h6>
                    <p className="text-[#2F5B44] font-inter text-[20px] not-italic font-normal leading-normal max-w-[rem]">Devext’s custom SEO strategies deliver tailored solutions that align with target audience needs and company goals. <br /> Our data-driven strategies enhance website visibility, scalability and flexibility to adapt to changing industry trends.  <br /> Devext’s custom web designs facilitate both on and off-page SEO efforts to help your business rank higher in search engine results and attract organic traffic.  </p>

                </div> 
                </div>

                
              
                
            </div>
         
               
        
        </div>

        {/* seventh section */}
        <div className=" bg-[#2F5B44] min-h-[30vh]">

            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex justify-between items-center sm:flex-row flex-col">
				<p className="text-[#FEF9D0] font-inter text-[48px] not-italic font-medium leading-normal uppercase"> Have a web design project? <br /> We build custom websites.</p>
                <Link 
            to="/calculator"
            className="inline-flex items-center bg-transparent text-[#FEF9D0] px-8 py-3 rounded-full font-medium text-[14px] sm:text-[16px] hover:bg-[#FEF9D0] hover:text-[#2F5B44] transition-all duration-300 transform hover:scale-105 group"
            style={{ border: '2px solid #FEF9D0' }}
          >
            Request A quote
            <img src={downarrow} alt="arrow" className="w-5 h-5 ml-3 transition-all duration-300 group-hover:hidden" />
            <img src={downarrow2green} alt="arrow" className="w-5 h-5 ml-3 transition-all duration-300 hidden group-hover:block" />
          </Link>


            </div>
            
            
        </div>

       

        </>
    )
}

export default CustomWebDesignServices;