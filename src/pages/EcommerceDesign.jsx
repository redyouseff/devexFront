
import { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import backgroundlogo from "/images/EcommerceDesign/Mask group.svg";
import Cards from '../components/EcommerceDesign/Cards';
import icon1 from "/images/EcommerceDesign/Group.svg";
import icon2 from "/images/EcommerceDesign/Vector.svg";
import icon3 from "/images/EcommerceDesign/Vector3.svg";
import icon4 from "/images/EcommerceDesign/Vector4.svg";
import devexbackground from "/images/EcommerceDesign/DEVEXT.svg";
import downarrow from "/images/home/Vector1.svg"
import downarrow2green from "/images/home/arrow Down.svg"
import image1 from "/images/EcommerceDesign/ecommerce website 1.svg";
import image2 from "/images/EcommerceDesign/ecommerce website 3 2.svg";
import { Link } from 'react-router-dom';





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

const EcommerceDesign = () => {
 
    const [activeTab, setActiveTab] = useState(0);
    const [direction, setDirection] = useState('down');

    const handleSelect = (index) => {
        setDirection(index > activeTab ? 'down' : 'up');
        setActiveTab(index);
    };

    const images = [image2, image2, image2, image2];

  // Solutions grid data (4 cells)
  const solutionCards = [
    {
      id: 1,
      image: icon1,
      title: 'Our eCommerce <br /> Development Services',
      paragraphs: [
        "Our eCommerce development agency tailors its eCommerce solutions by analyzing client needs, current market trends and relevant consumer behavior.",
        "Digital Silk customizes its eCommerce websites with industry‑specific features, including manufacturing, healthcare, education, finance, fashion and retail.",
        "Our team helps clients to remain relevant in a saturated market through data‑driven strategies such as:"
      ],
      corner: ''
    },
    {
      id: 2,
      image: icon2,
      title: 'Robust Analytics',
      paragraphs: [
        "Our eCommerce development agency’s personalized analytics offer insights into customer preferences, existing sales trends and current website performance.",
        "Businesses make data‑driven decisions that drive organic traffic, boost sales and improve user experiences."
      ],
      corner: ''
    },
    {
      id: 3,
      image: icon3,
      title: 'Customization Options',
      paragraphs: [
        "Digital Silk’s development services use tailored recommendations, targeted promotions and custom interfaces to enhance engagement and target individual customer preferences.",
        "Customizations allow brands to adapt to market changes quickly, optimize internal operations and deliver unique, compelling shopping experiences that drive customer loyalty."
      ],
      corner: ''
    },
    {
      id: 4,
      image: icon4,
      title: 'Growth-Oriented Tools',
      paragraphs: [
        "Digital Silk’s growth‑oriented eCommerce development services contribute to the scalability and competitiveness of online stores.",
        "Our team offers automated marketing, dynamic pricing and detailed customer segmentation to increase sales efficiency and attract and retain customers.",
        "Moreover, our advanced analytics tracking and detailed market research help businesses track relevant metrics in real time and make decisions based on current consumer preferences."
      ],
      corner: ''
    }
  ];

    return(
        <>
        <Navbar />
        <div>
     


    
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
                        <h6 className="text-[#FEF9D0] font-inter text-[40px] not-italic font-semibold leading-normal">eCommerce Development Services</h6>
                        <p className="text-[#FEF9D0] font-inter text-[24px] not-italic font-normal leading-normal">  Providing end-to-end eCommerce design and development services, we help to build and grow your eCommerce website across platforms.</p>
                    </div>
                    <div className="col-span-1 flex items-center  lg:justify-end justify-center ">  
                        <img src={image1} alt="" />
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
                                eCommerce Web Design
                            </h2>
                            {activeTab === 0 && (
                                <p className="mt-5 text-base sm:text-lg leading-relaxed font-inter ">   
                                    Before we develop your e‑store, our award‑winning design team are on hand to
                                    craft a captivating user interface (UI) that engages your customers.<br/>
                                    Our eCommerce website design services stay true to your brand identity,
                                    strengthening brand recognition while providing a user experience (UX) tailored
                                    to connect with your <br /> customers. <br />
                                    By interweaving unique animations and interactions, we ensure your online store
                                    represents a captivating experience that keeps visitors browsing your products
                                    and services.
                                </p>
                            )}
                          
                           

                            <h3 onClick={() => handleSelect(1)} className="mt-10 font-semibold text-2xl sm:text-3xl cursor-pointer font-inter">Shopify Development</h3>
                            {activeTab === 1 && (
                                <p className="mt-5 text-base sm:text-lg leading-relaxed font-inter ">
                                    Before we develop your e‑store, our award‑winning design team are on hand to
                                    craft a captivating user interface (UI) that engages your customers.<br/>
                                    Our eCommerce website design services stay true to your brand identity,
                                    strengthening brand recognition while providing a user experience (UX) tailored
                                    to connect with your <br /> customers. <br />
                                    By interweaving unique animations and interactions, we ensure your online store
                                    represents a captivating experience that keeps visitors browsing your products
                                    and services.
                                </p>
                            )}
                            <h3 onClick={() => handleSelect(2)} className="mt-4 font-semibold text-2xl sm:text-3xl cursor-pointer font-inter">WooCommerce Development</h3>
                            {activeTab === 2 && (
                                <p className="mt-5 text-base sm:text-lg leading-relaxed font-inter ">
                                    Before we develop your e‑store, our award‑winning design team are on hand to
                                    craft a captivating user interface (UI) that engages your customers.<br/>
                                    Our eCommerce website design services stay true to your brand identity,
                                    strengthening brand recognition while providing a user experience (UX) tailored
                                    to connect with your <br /> customers. <br />
                                    By interweaving unique animations and interactions, we ensure your online store
                                    represents a captivating experience that keeps visitors browsing your products
                                    and services.
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

            {/* third section */}
            <section>
                <Cards />

            </section>

            {/* fourth section */}
            <section>
                <div className='max-w-full h-full px-4 sm:px-6 lg:px-8 bg-[#FEF9D0] text-[#2F5B44]'>


                  <div className='text-center py-12 sm:py-16 lg:py-24'>
                    <h2 className='text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-inter font-semibold leading-tight'>
                        eCommerce Development Solutions
                    </h2>

                    <p className='text-[#2F5B44] mt-10 mb-5 text-center font-inter not-italic font-normal leading-[130%] text-lg sm:text-xl md:text-2xl lg:text-[24px] lg:max-w-6xl mx-auto'>
                    Our eCommerce development agency tailors its eCommerce solutions by analyzing client needs, current market trends and relevant consumer behavior.
                    </p>
                    <p className='text-[#2F5B44] mt-5 mb-5 text-center font-inter not-italic font-normal leading-[130%] text-lg sm:text-xl md:text-2xl lg:text-[24px] lg:max-w-6xl mx-auto'>
                    Digital Silk customizes its eCommerce websites with industry-specific features, including manufacturing, healthcare, education, finance, fashion and retail.  
                    </p>
                    <p className='text-[#2F5B44] mt-5 text-center font-inter not-italic font-normal leading-[130%] text-lg sm:text-xl md:text-2xl lg:text-[24px] lg:max-w-4xl mx-auto'>
                    Our team helps clients to remain relevant in a saturated market through data-driven strategies such as:  
                    </p>

                  </div>
          

                  {/* grid cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 pb-16">
                    {solutionCards.map((card) => (
                      <div
                        key={card.id}
                        className={`bg-[rgba(47,91,68,0.70)] text-[#FEF9D0] flex w-full h-[600px] px-[68px] py-0 flex-col justify-center items-start gap-6 flex-shrink-0 rounded-[24px] ${card.corner} shadow-[0_10px_30px_rgba(47,91,68,0.15)]`}
                      >
                        <img 
                        src={card.image}
                        className='w-20 h-20'  
                        />
                      
                        <h3
                          className="text-lg sm:text-xl lg:text-2xl font-inter font-semibold leading-tight uppercase"
                          dangerouslySetInnerHTML={{ __html: card.title }}
                        />
                        {card.paragraphs.map((text, idx) => (
                          <p
                            key={idx}
                            className="text-sm sm:text-base lg:text-[17px] leading-relaxed font-inter"
                          >
                            {text}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>                                  
                </div>


               
            </section>

            {/* fifth section */}
            <section>
                   {/* CTA banner */}
                   <div className='relative w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] overflow-hidden bg-[#FEF9D0] flex items-center justify-center   '>
                    <img
                      src={devexbackground}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                    />
                    <div className='relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center '>
                      <h3 className='text-[#2F5B44] text-center font-inter text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-medium uppercase leading-normal'>
                        SPEAK WITH OUR RELIABLE        
                      </h3>
                      <h3 className='text-[#2F5B44] text-center font-inter text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] font-medium uppercase leading-normal whitespace-nowrap '>
                      ECOMMERCE DEVELOPMENT EXPERTS  
                      </h3>
                      <Link        
                    to="/services"
                    className="inline-flex items-right font-inter  mt-10 border-2 border-[#2F5B44] text-[#2F5B44] px-6 py-3 rounded-full hover:bg-[#2F5B44] hover:text-[#E9F2CD] transition-colors font-bold text-[16px] group"
                  >
                    Explore Web Design Services
                    <span className="relative w-4 h-4 ml-4 mt-1 inline-block ">
                      <img src={downarrow2green} alt="arrow" className="absolute inset-0 w-4 h-4 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
                      <img src={downarrow} alt="arrow up" className="absolute inset-0 w-4 h-4 transition-opacity duration-200 opacity-0 group-hover:opacity-100" />
                    </span>
                  </Link>
                    </div>
                
                  </div>
            </section>


                            



          
        </div>
        
        </>
    )

}


export default EcommerceDesign;
