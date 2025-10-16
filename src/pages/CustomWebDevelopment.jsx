
/* eslint-disable no-irregular-whitespace */

import Navbar from "../components/Navbar";
import SEO from '../components/SEO';
const image2 = "https://res.cloudinary.com/daop3bufa/image/upload/v1759051036/ecommerce_website_3_2_lw4ewc.svg";
import { useEffect, useState } from "react";
const image1 = "https://res.cloudinary.com/daop3bufa/image/upload/v1760610715/Group_4_m5eatr.svg";
const image3 = "https://res.cloudinary.com/daop3bufa/image/upload/v1760610790/Vector_prqjyg.svg"
const image4 = "https://res.cloudinary.com/daop3bufa/image/upload/v1760610825/Vector4_rfbwy1.svg"
const image5 = "https://res.cloudinary.com/daop3bufa/image/upload/v1760610864/carbon_development_l2ddly.svg"
const image6 = "https://res.cloudinary.com/daop3bufa/image/upload/v1760610896/Group_4_gsdxvk.svg"
const image7 = "https://res.cloudinary.com/daop3bufa/image/upload/v1760610935/Vector7_hypupt.svg"
const image9 = "https://res.cloudinary.com/daop3bufa/image/upload/v1760610971/Vector9_a8ik1j.svg"
const image8 = "https://res.cloudinary.com/daop3bufa/image/upload/v1760611008/Devext_Pattern_inepkt.png"
const image10 = "https://res.cloudinary.com/daop3bufa/image/upload/v1760611044/d491b2dbc4c0ac592aff2da00e1ed6656b01ac11_n0rczg.png"
const image11 = "https://res.cloudinary.com/daop3bufa/image/upload/v1760611083/Frame_517_ncobsz.svg"

const CustomWebDevelopment =()=>{
   
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [submitError, setSubmitError] = useState('');

    const structuredData = {
		"@context": "https://schema.org",
		"@type": "Service",
		"name": "Custom Web Development",
		"description": "End-to-end custom web development services delivering secure, scalable, high-performance websites and web apps.",
		"url": "https://devext.io/custom-web-development",
		"provider": {
			"@type": "Organization",
			"name": "Devext"
		},
		"serviceType": "Web Development",
		"areaServed": "Saudi Arabia",
		"offers": {
			"@type": "Offer",
			"priceCurrency": "SAR",
			"availability": "https://schema.org/InStock"
		}
	};

    const [activeTab, setActiveTab] = useState(0);
    const [direction, setDirection] = useState('down');

    const handleSelect = (index) => {
        setDirection(index > activeTab ? 'down' : 'up');
        setActiveTab(index);
    };

    const images = [image2, image2, image2, image2,image2];

    const AnimatedImage = ({ src, alt, direction }) => {
        const [entered, setEntered] = useState(false);

        useEffect(() => {
            const id = requestAnimationFrame(() => setEntered(true));
            return () => cancelAnimationFrame(id);
        }, [src, direction]);

        const initialTranslate = direction === 'down' ? '-translate-y-8' : 'translate-y-8';

        return (
            <img
                src={src}
                alt={alt}
                className={`w-full max-w-sm md:max-w-md h-auto transition-all duration-500 ease-in-out ${entered ? 'opacity-100 translate-y-0' : `opacity-0 ${initialTranslate}`}`}
            />
        );
    };

    return (
        <>

        <SEO 
         title="Custom Web Development Services - Devext"
         description="Secure, scalable custom web development services. High-performance websites and web apps tailored to your business goals."
         keywords="custom web development, web app development, responsive websites, frontend development, backend development"
         canonical="/custom-web-development"
         structuredData={structuredData}
        />
       

        <Navbar />


        <section
                className="relative z-0 w-full min-h-[60vh] md:min-h-[80vh] lg:min-h-[80vh] sm:min-h-[42.1875rem] xl:min-h-[42.1875rem] bg-[#2F5B44] flex items-center justify-center text-[#FEF9D0] overflow-hidden"
            >
                <img
                    src="https://res.cloudinary.com/daop3bufa/image/upload/v1759050998/Mask_group_wlabwd.svg"
                    alt="hero section background"
                        aria-hidden="true"
                    className="absolute -z-10 top-0 bottom-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain pointer-events-none sm:inset-0 sm:w-full sm:h-full sm:left-0 sm:translate-x-0 object-left"
                />

                <div className=" relative z-10 container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2  mt-[7rem] sm:mt-[10rem] px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <div className="col-span-1 flex flex-col  justify-center ">  
                        <h6 className="text-[#FEF9D0] font-inter text-[40px] not-italic font-semibold leading-normal lg:whitespace-nowrap mb-3">Custom Web Development Company</h6>
                        <p className="text-[#FEF9D0] font-inter text-[24px] not-italic font-normal leading-normal mb-4"> Leverage the experience and creativity of our award-winning designers through our selection of web design services
                        Our custom solutions target measurable results for your brand. </p>   
                    </div>
                    <div className="col-span-1 flex items-center lg:justify-end justify-center  ">  
                        <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1760358066/3300d62e120a2d3112d4436cdb738e1b99de27b4_shlnuy.png" alt="hero side image" className="w-[25rem] h-[25rem] " />
                    </div>
                </div>
               
            </section>

                      {/* second section */}     
            
                      <section className="bg-[#FEF9D0] text-[#2F5B44] py-12 sm:py-16 lg:py-24">
                <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-center">  
                        {/* Text content */}
                        <div className="lg:col-span-2">
                            <h2 onClick={() => handleSelect(0)} className="mt-10 font-semibold text-2xl sm:text-3xl cursor-pointer font-inter">
                            Custom Web Design
                            </h2>
                            {activeTab === 0 && (
                                <p className="mt-5 text-base sm:text-lg leading-relaxed font-inter ">   
                                    Work with top web designers to build a custom website that’s optimized for local search and conversion.
                                    Our deliverables include thorough strategy and planning, unique UX and UI design, SEO and quality assurance to boost visibility and engagement.
                                </p>
                            )}
                          
                           

                            <h3 onClick={() => handleSelect(1)} className="mt-10 font-semibold text-2xl sm:text-3xl cursor-pointer font-inter"> Custom Website Redesign</h3>
                            {activeTab === 1 && (
                                <p className="mt-5 text-base sm:text-lg leading-relaxed font-inter ">
                                    Assess and improve your website design with the support of award-winning designers and expert digital strategists.
                                    From migrating to a new CMS to a complete website overhaul, we create an on-brand solution that’s optimized for search engines, engagement and conversion.
                                </p>
                            )}
                            <h3 onClick={() => handleSelect(2)} className="mt-4 font-semibold text-2xl sm:text-3xl cursor-pointer font-inter">eCommerce Web Design</h3>
                            {activeTab === 2 && (
                                <p className="mt-5 text-base sm:text-lg leading-relaxed font-inter ">
                                    Our experts work with all leading eCommerce platforms, including Shopify, WooCommerce and Adobe Commerce (Magento) to deliver an eCommerce web design that fits your requirements.
                                    We build a streamlined shopping experience that captures leads, reduces cart abandonment rates and drives revenue for your brand.
                                </p>
                            )}

                            <h3 onClick={() => handleSelect(3)} className="mt-4 font-semibold text-2xl sm:text-3xl cursor-pointer font-inter">B2B Web Design</h3>
                            {activeTab === 3 && (
                                <p className="mt-5 text-base sm:text-lg leading-relaxed font-inter ">
                                    
                                    Work with our team to build an industry-leading B2B website that serves as a powerful lead generation tool for your brand.
                                    With custom and professional design, we’ll help you grow your visibility, authority and trust to reach your target market and solidify new partnerships.
                                </p>
                            )}

                            <h3 onClick={() => handleSelect(4)} className="mt-4 font-semibold text-2xl sm:text-3xl cursor-pointer font-inter">Local SEO</h3>
                            {activeTab === 4 && (
                                <p className="mt-5 text-base sm:text-lg leading-relaxed font-inter ">
                                    Looking to gain visibility in the market? Partner with our strategists to plan and implement a custom search engine optimization strategy.
                                    Using insights into your industry, competitors, and audience, our team will create an SEO plan that increases your local search visibility and attracts new customers.
                                </p>
                            )}
                        </div>

                        {/* Image */}
                        <div className="lg:col-span-1 flex justify-center lg:justify-end">   
                            <AnimatedImage
                                key={`${activeTab}-${direction}`} 
                                src={images[activeTab]}
                                alt="eCommerce mobile mockups"
                                direction={direction}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-[#2F5B44]">
                   <div className="flex flex-col gap-5 justify-center items-center mt-[4rem] mb-[6rem]"> 

                    <p className="text-[#FEF9D0] font-inter text-[40px] not-italic font-semibold leading-normal text-center max-w-[39rem]">What Is Custom Web <br />  Development?</p>
                    <p className="text-[#FEF9D0] text-center font-inter max-w-[39rem] text-lg  mb-5  ">Custom web development is the process of building your website or other digital solution from the ground up, specifically tailored to suit your business needs, serve your target audience and help you grow your brand online.</p>

                   </div>



                   <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-x-2 gap-y-3  sm:px-6 lg:px-8 mb-20 gap-0 justify-items-stretch ">

                 <div className="flex flex-col items-start space-y-5 md:space-y-5 w-full   px-[14.27px] py-[19.02px] rounded-2xl border-2 border-[#FEF9D0] sm:px-4 sm:py-3 ">
                        <p className="text-[#FEF9D0] text-center font-inter text-[42px] not-italic font-semibold leading-normal uppercase mt-4">
                        It includes several stages
                        </p>
                    </div>

                    <div className="flex flex-col items-start space-y-4 md:space-y-5 w-full px-[14.27px] py-[19.02px] rounded-2xl border-2 border-[#FEF9D0] sm:px-4 sm:py-3 ">

                        <div className=" ml-auto flex  flex-col justify-center items-center gap-[16.64px] w-[49.93px] h-[49.93px] p-[16.64px] rounded-full bg-[rgba(254,249,208,0.5)]">
                            <p className="text-[#FEF9D0] text-center font-inter text-[33.29px] not-italic font-normal leading-normal" >1 </p>
                        </div>

                        <div className="flex  gap-[16.64px] justify-center items-center ">
                            <div className="flex items-center gap-[4.7px] p-[11.27px] rounded-[15.03px] bg-[rgba(254,249,208,0.5)]">
                            <img src={image1} alt="ecommerce website" className="w-20 h-20" />
                            </div>
                            <p className="text-[#FEF9D0] font-inter text-[28.53px] not-italic font-normal leading-normal uppercase">Research & <br /> analysis</p>

                        </div>    
                    </div>



                       <div className="flex flex-col items-start space-y-4 md:space-y-5 w-full px-[14.27px] py-[19.02px] rounded-2xl border-2 border-[#FEF9D0] sm:px-4 sm:py-3 ">

                        <div className=" ml-auto flex  flex-col justify-center items-center gap-[16.64px] w-[49.93px] h-[49.93px] p-[16.64px] rounded-full bg-[rgba(254,249,208,0.5)]">
                            <p className="text-[#FEF9D0] text-center font-inter text-[33.29px] not-italic font-normal leading-normal" >2 </p>
                        </div>

                        <div className="flex  gap-[16.64px] justify-center items-center ">
                            <div className="flex items-center gap-[4.7px] p-[11.27px] rounded-[15.03px] bg-[rgba(254,249,208,0.5)]">
                            <img src={image3} alt="ecommerce website" className="w-20 h-20" />
                            </div>
                            <p className="text-[#FEF9D0] font-inter text-[28.53px] not-italic font-normal leading-normal uppercase">Research & <br /> analysis</p>

                        </div>    
                    </div>

                    <div className="flex flex-col items-start space-y-4 md:space-y-5 w-full px-[14.27px] py-[19.02px] rounded-2xl border-2 border-[#FEF9D0] sm:px-4 sm:py-3 ">

<div className=" ml-auto flex  flex-col justify-center items-center gap-[16.64px] w-[49.93px] h-[49.93px] p-[16.64px] rounded-full bg-[rgba(254,249,208,0.5)]">
    <p className="text-[#FEF9D0] text-center font-inter text-[33.29px] not-italic font-normal leading-normal" >3 </p>
</div>

<div className="flex  gap-[16.64px] justify-center items-center ">
    <div className="flex items-center gap-[4.7px] p-[11.27px] rounded-[15.03px] bg-[rgba(254,249,208,0.5)]">
    <img src={image4} alt="ecommerce website" className="w-20 h-20" />
    </div>
    <p className="text-[#FEF9D0] font-inter text-[28.53px] not-italic font-normal leading-normal uppercase">Research & <br /> analysis</p>

</div>    
</div>



<div className="flex flex-col items-start space-y-4 md:space-y-5 w-full px-[14.27px] py-[19.02px] rounded-2xl border-2 border-[#FEF9D0] sm:px-4 sm:py-3 ">

<div className=" ml-auto flex  flex-col justify-center items-center gap-[16.64px] w-[49.93px] h-[49.93px] p-[16.64px] rounded-full bg-[rgba(254,249,208,0.5)]">
    <p className="text-[#FEF9D0] text-center font-inter text-[33.29px] not-italic font-normal leading-normal" >4 </p>
</div>

<div className="flex  gap-[16.64px] justify-center items-center ">
    <div className="flex items-center gap-[4.7px] p-[11.27px] rounded-[15.03px] bg-[rgba(254,249,208,0.5)]">
    <img src={image5} alt="ecommerce website" className="w-20 h-20" />
    </div>
    <p className="text-[#FEF9D0] font-inter text-[28.53px] not-italic font-normal leading-normal uppercase">Research & <br /> analysis</p>

</div>    
</div>





<div className="flex flex-col items-start space-y-4 md:space-y-5 w-full px-[14.27px] py-[19.02px] rounded-2xl border-2 border-[#FEF9D0] sm:px-4 sm:py-3 ">

<div className=" ml-auto flex  flex-col justify-center items-center gap-[16.64px] w-[49.93px] h-[49.93px] p-[16.64px] rounded-full bg-[rgba(254,249,208,0.5)]">
    <p className="text-[#FEF9D0] text-center font-inter text-[33.29px] not-italic font-normal leading-normal" >5 </p>
</div>

<div className="flex  gap-[16.64px] justify-center items-center ">
    <div className="flex items-center gap-[4.7px] p-[11.27px] rounded-[15.03px] bg-[rgba(254,249,208,0.5)]">
    <img src={image6} alt="ecommerce website" className="w-20 h-20" />
    </div>
    <p className="text-[#FEF9D0] font-inter text-[28.53px] not-italic font-normal leading-normal uppercase">Research & <br /> analysis</p>

</div>    
</div>





<div className="flex flex-col items-start  md:space-y-5 w-full px-[14.27px] py-[19.02px] rounded-2xl border-2 border-[#FEF9D0] sm:px-4 sm:py-3 ">

<div className=" ml-auto flex  flex-col justify-center items-center gap-[16.64px] w-[49.93px] h-[49.93px] p-[16.64px] rounded-full bg-[rgba(254,249,208,0.5)]">
    <p className="text-[#FEF9D0] text-center font-inter text-[33.29px] not-italic font-normal leading-normal" >6 </p>
</div>

<div className="flex  gap-[16.64px] justify-center items-center ">
    <div className="flex items-center gap-[4.7px] p-[11.27px] rounded-[15.03px] bg-[rgba(254,249,208,0.5)]">
    <img src={image7} alt="ecommerce website" className="w-20 h-20" />
    </div>
    <p className="text-[#FEF9D0] font-inter text-[28.53px] not-italic font-normal leading-normal uppercase">Research & <br /> analysis</p>

</div>    
</div>




<div className=" w-full px-[14.27px] py-[19.02px] rounded-2xl border-2 border-[#FEF9D0] min-h-[12rem] sm:px-4 sm:py-3 bg-no-repeat bg-center " style={{
    backgroundImage: `url(${image8})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}}>



  
</div>

<div className="flex flex-col items-start space-y-4 md:space-y-5 w-full px-[14.27px] py-[19.02px] rounded-2xl border-2 border-[#FEF9D0] sm:px-4 sm:py-3 ">

<div className=" ml-auto flex  flex-col justify-center items-center gap-[16.64px] w-[49.93px] h-[49.93px] p-[16.64px] rounded-full bg-[rgba(254,249,208,0.5)]">
    <p className="text-[#FEF9D0] text-center font-inter text-[33.29px] not-italic font-normal leading-normal" >9 </p>
</div>

<div className="flex  gap-[16.64px] justify-center items-center ">
    <div className="flex items-center gap-[4.7px] p-[11.27px] rounded-[15.03px] bg-[rgba(254,249,208,0.5)]">
    <img src={image9} alt="ecommerce website" className="w-20 h-20" />
    </div>
    <p className="text-[#FEF9D0] font-inter text-[28.53px] not-italic font-normal leading-normal uppercase">Research & <br /> analysis</p>

</div>    
</div>



                    

                    
                   </div>
                         
                </div>

                
            </section>


            <section>
                <div className="bg-[#FEF9D0] min-h-[30vh] flex justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                  

                        <div className="mt-10 col-span-2 mb-10 py-10 px-10">

                            <div className="flex  gap-2 justify-start items-start mb-5">
                                <img src={image10} alt="logo" className="w-20 h-20" />
                                <p className="text-[#2F5B44] font-inter text-2xl sm:text-3xl md:text-4xl not-italic font-medium leading-snug uppercase">Do You Need Custom Web Design & <br />  Development?</p>

                            </div>

                            <div className="flex flex-col gap-5">
                                <p className="text-[#2F5B44] font-inter text-base sm:text-lg md:text-xl not-italic font-normal leading-normal max-w-[60rem]">
                                17% of potential customers will abandon your brand after just one bad experience with it. From poor customer service to unresponsive websites, you want to address all the potential concerns before you lost all that potential revenue. 

                                </p>

                                
                                <p className="text-[#2F5B44] font-inter text-base sm:text-lg md:text-xl not-italic font-normal leading-normal max-w-[60rem]">
                                Custom web design and development will let you tailor your website according to your target audience and needs. 

                                </p>
                                <p className="text-[#2F5B44] font-inter text-base sm:text-lg md:text-xl not-italic font-normal leading-normal max-w-[60rem]">
                                Let’s dive into the list of benefits from having a custom website, app, eCommerce platform or any other digital product. 

                                </p>

                                <p className="text-[#2F5B44] font-inter text-base sm:text-lg md:text-xl not-italic font-normal leading-normal max-w-[60rem]">
                                Let’s dive into that list of benefits to help you understand the advantages of having a custom website, app, eCommerce platform or any other digital product.

                                </p>
                               
                               
                            </div>

                            
                          
                        </div>

                        <div className="flex justify-ends items-end ml-10 col-span-1">
                        <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1760358066/3300d62e120a2d3112d4436cdb738e1b99de27b4_shlnuy.png" alt="hero side image" className="w-[25rem] h-[25rem] " />                                       
                        </div>

                    </div>
                    

                </div>
                
            </section>


             

             <section>
                <div className="flex flex-col gap-5 justify-center items-center mt-[4rem] mb-[6rem] bg-[#2F5B44]"> 
                    <img src={image11} alt="image" className="w-50 h-50 mb-10" />

                    <div className="grid grid-cols-1 md:grid-cols-2 px-10 py-10">

                    <div className="flex flex-col justify-center items-center py-4 px-5">
                        <div className="flex justify-center items-center gap-[12.22px] h-[240px] px-[29.33px] py-[39.11px] rounded-[29.33px] bg-[rgba(254,249,208,0.1)]">
                            <p className="text-[#FEF9D0] font-inter text-[20px] not-italic font-normal leading-normal">You have specific requirements for an online platform: It may be a SaaS platform, a mobile or a web app, an online store, a subscription-based website, a booking platform, a cloud-based solution or anything else</p>
                        </div>

                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div className="flex justify-center items-center gap-[12.22px] h-[240px] px-[29.33px] py-[39.11px] rounded-[29.33px] bg-[rgba(254,249,208,0.1)]">
                            <p className="text-[#FEF9D0] font-inter text-[20px] not-italic font-normal leading-normal">You want to engage your audience with a unique, distinctive design and your audience expects nothing less from you: This is especially true for large organizations and industry leaders (think Google, Apple or IBM) which may see templates as an unacceptable solution</p>

                        </div>
                        
                    </div>

                    <div className="flex flex-col justify-center items-center py-4 px-5">
                        <div className="flex justify-center items-center gap-[12.22px] h-[240px] px-[29.33px] py-[39.11px] rounded-[29.33px] bg-[rgba(254,249,208,0.1)]">
                            <p className="text-[#FEF9D0] font-inter text-[20px] not-italic font-normal leading-normal">You have specific requirements for an online platform: It may be a SaaS platform, a mobile or a web app, an online store, a subscription-based website, a booking platform, a cloud-based solution or anything else</p>
                        </div>

                    </div>

                    <div className="flex flex-col justify-center items-center py-4 px-5">
                        <div className="flex justify-center items-center gap-[12.22px] h-[240px] px-[29.33px] py-[39.11px] rounded-[29.33px] bg-[rgba(254,249,208,0.1)]">
                            <p className="text-[#FEF9D0] font-inter text-[20px] not-italic font-normal leading-normal">You have specific requirements for an online platform: It may be a SaaS platform, a mobile or a web app, an online store, a subscription-based website, a booking platform, a cloud-based solution or anything else</p>
                        </div>

                    </div>

                    </div>

                    <div className="flex justify-center items-center -mt-9">
                    <div className="flex flex-col justify-center items-center py-4 px-5 max-w-[60%] mx-auto ">
                        <div className="flex justify-center items-center gap-[12.22px] h-[240px] px-[29.33px] py-[39.11px] rounded-[29.33px] bg-[rgba(254,249,208,0.1)]">
                            <p className="text-[#FEF9D0] font-inter text-[20px] not-italic font-normal leading-normal">You have specific requirements for an online platform: It may be a SaaS platform, a mobile or a web app, an online store, a subscription-based website, a booking platform, a cloud-based solution or anything else</p>
                        </div>

                    </div>
                    </div>

                </div>
            </section> 
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
          <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759052650/Line_1_xq3ukd.svg" alt="line" className="w-24 sm:w-32 order-1 sm:order-none" />
          <span className="text-[#FEF9D0] text-base sm:text-lg font-medium order-2 sm:order-none lg:mr-[4rem]">FOLLOW US</span>
          <div className="flex gap-4 sm:gap-6 order-3 sm:order-none lg:mr-[3rem]">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759052727/WhatsApp_udvzpw.svg" alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759052651/Instagram_kkvsnz.svg" alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759052651/Linkedin_sqzkyo.svg" alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6" />
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
            <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759052653/name_x24mhl.svg" alt="name icon" className="w-5 h-5" />
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
            <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759052601/company_kq21qx.svg" alt="company icon" className="w-5 h-5" />
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
            <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759052639/email_oc0uix.svg" alt="email icon" className="w-5 h-5" />
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
            <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759052655/phone_i9bnxz.svg" alt="phone icon" className="w-5 h-5" />
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
            <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759052639/email_oc0uix.svg" alt="message icon" className="w-5 h-5" />
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
            <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759052696/Vector1_yust9l.svg" alt="arrow" className="w-4 h-4 ml-2 transition-all duration-300 group-hover:hidden" />
            <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759052589/arrow_Down_jlay7a.svg" alt="arrow" className="w-4 h-4 ml-2 transition-all duration-300 hidden group-hover:block" />
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
    

        </>
    )
}


export default CustomWebDevelopment;