import Navbar from "../components/Navbar"
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionDiv = motion.div;



export const OdooPartnerShip =()=>{

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [submitError, setSubmitError] = useState('');

    const fadeLeft = {
        hidden: { opacity: 0, x: -24 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
      };
    
      const fadeRight = {
        hidden: { opacity: 0, x: 24 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
      };

      const items=[
        {
            title:"Sales",
            image:"https://res.cloudinary.com/daop3bufa/image/upload/v1779109857/icon1_eny4hn.svg"
        },
        {
            title:"Inventory",
            image:"https://res.cloudinary.com/daop3bufa/image/upload/v1779109857/icon2_b8p8ao.svg"
        },
        {
            title:"Email Marketing",
            image:"https://res.cloudinary.com/daop3bufa/image/upload/v1779109858/icon3_l1sdri.svg"
        },
        {
            title:"Purchase",
            image:"https://res.cloudinary.com/daop3bufa/image/upload/v1779109858/icon4_tzw0fx.svg"
        },
        {
            title:"Projects",
            image:"https://res.cloudinary.com/daop3bufa/image/upload/v1779109859/icon5_wdo7hg.svg"
        },
        {
            title:"HR",
            image:"https://res.cloudinary.com/daop3bufa/image/upload/v1779109860/icon6_vmiksi.svg"
        },
        {
            title:"Point Of Sale",
            image:"https://res.cloudinary.com/daop3bufa/image/upload/v1779109861/icon7_pspr6a.svg"
        },
        {
            title:"CRM",
            image:"https://res.cloudinary.com/daop3bufa/image/upload/v1779109862/icon8_k5ap0v.svg"
        },
        {
            title:"Knowledge",
            image:"https://res.cloudinary.com/daop3bufa/image/upload/v1779109857/icon9_w886a4.svg"
        },
        {
            title:"Accounting",
            image:"https://res.cloudinary.com/daop3bufa/image/upload/v1779109857/icon10_c3jx7c.svg"
        }
      ]

      const cards=[
        {
            title:"Cost Effective Solution",
            paragraph:"Odoo offers a low-cost solution compared to high-end ERP systems, making it accessible for small and mid-sized businesses.",
            Icon:"https://res.cloudinary.com/daop3bufa/image/upload/v1779131286/icon11_ddrhdm.svg"
        },
        {
            title:"User-Friendly Interface",
            paragraph:" With its ease of use, Odoo simplifies ERP implementation and adoption across your organization.",
            Icon:"https://res.cloudinary.com/daop3bufa/image/upload/v1779131286/icon12_vbnmza.svg"
        },
        {
            title:"Extensive Selection of Apps",
            paragraph:"Choose from a wide range of Odoo apps tailored to your business needs, covering CRM, operations, and financial management.",
            Icon:"https://res.cloudinary.com/daop3bufa/image/upload/v1779131286/icon13_yqpuec.svg"
        },
        {
            title:"Seamless Integration",
            paragraph:"Easily integrate Odoo with third-party apps to streamline your business processes and improve efficiency",
            Icon:"https://res.cloudinary.com/daop3bufa/image/upload/v1779131287/icon14_fp2zuj.svg"
        },
        {
            title:"Customizable CRM",
            paragraph:"Opt for either Odoo CRM or integrate with Salesforce to manage your customer relationships effectively.",
            Icon:"https://res.cloudinary.com/daop3bufa/image/upload/v1779131287/icon15_jtjbcj.svg"
        },
        {
            title:"Developer- Friendly",
            paragraph:"For IT developers familiar with Python and other coding languages, Odoo’s Community edition offers a free desktop solution, albeit with limited features.",
            Icon:"https://res.cloudinary.com/daop3bufa/image/upload/v1779131287/icon16_dtry3m.svg"
        }
      ]




    return (
        <div className="w-full overflow-x-hidden">
        <Navbar />
        <div className="bg-[#FEF9D0]">


        <section
                className="relative isolate w-full min-h-[60vh] md:min-h-[80vh] lg:min-h-[80vh] sm:min-h-[42.1875rem] xl:min-h-[42.1875rem] bg-[#2F5B44] flex items-center justify-center text-[#FEF9D0] overflow-hidden"
            >
                <div className="relative z-10 container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 mt-[7rem] sm:mt-[10rem] px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <MotionDiv 
                        className="col-span-1 flex flex-col gap-5  justify-center "
                        variants={fadeRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >  
                        <h6 className="text-[#FEF9D0] font-inter text-[40px] not-italic font-semibold lg:whitespace-nowrap ">Odoo ERP System</h6>
                        <p className="text-[#FEF9D0] font-inter text-[24px] not-italic font-normal  ">  Odoo Enterprise is a comprehensive and flexible ERP system that can be deployed on-premise or in the cloud through Odoo Online, and can be accessed from any device, including iOS and Android smartphones and tablets. </p>
                        <a 
                            href="https://wa.me/201200064762" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex rounded-full border-2 border-[#FEF9D0] px-12 py-2.5 justify-center items-center gap-2.5 w-fit"
                        >
                            Get in touch 
                            <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1779105619/Vector_kzgaqi.svg" alt="arrow right" className="w-4 h-4" />
                        </a>
                    </MotionDiv>
                    <MotionDiv 
                        className="col-span-1 flex items-center  lg:justify-end justify-center "
                        variants={fadeLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >  
                        <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1779105487/ChatGPT_Image_Mar_4_2026_01_24_15_AM_1_wdgbsl.svg" alt="hero section image" className="relative z-10 w-full h-auto" />
                    </MotionDiv>
                </div>
               
                {/* Background logo — last in DOM, lowest stacking layer */}
                <img
                    src="https://res.cloudinary.com/daop3bufa/image/upload/v1759050998/Mask_group_wlabwd.svg"
                    alt=""
                    aria-hidden="true"
                    className="absolute z-0 top-0 bottom-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain pointer-events-none hidden sm:block sm:inset-0 sm:w-full sm:h-full sm:left-0 sm:translate-x-0 object-left"
                />
            </section>


            <section>
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 ">
                    <h1 className="text-[#2F5B44] font-Inter text-2xl not-italic font-medium text-center container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 leading-normal">
                    In contrast, Odoo Community is limited to a desktop-based ERP and CRM solution. Additionally, Odoo Enterprise includes a wider range of advanced features and functionalities.
                    </h1>
                </div>
            </section>


            <section>
                <div className="bg-[#2F5B44] py-16 md:py-20 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-center items-center">
                        <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1779106722/Gemini_Generated_Image_8j7qiy8j7qiy8j7q_1_nurfny.svg" alt="hero section image" className="w-full h-auto " />
                        </div>
                        <div className="flex flex-col justify-center text-center md:text-left">
                            <h1 className="text-[#FEF9D0] font-Inter text-3xl sm:text-4xl font-semibold leading-normal mb-5"> What is Odoo ERP?</h1>
                            <p className="text-[#FEF9D0] font-Inter text-lg sm:text-2xl font-normal leading-normal max-w-[35rem] mx-auto md:mx-0">
                            Odoo ERP is enterprise resource planning software that manages company-wide business processes. It offers integrated functional apps called Odoo apps that together form a complete ERP solution. Odoo is open-source and available as a free Community version or with a SaaS subscription as the Enterprise edition.
                            </p>
                            
                        </div>

                    </div>
                    
                </div>
            </section>


            <section className="py-12 md:py-20 lg:py-24">
                <MotionDiv
                    className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.15 }}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                    }}
                >
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-10 sm:gap-x-6 md:gap-y-12 lg:gap-x-10">
                        {items.slice(0, 6).map((item) => (
                            <div
                                key={item.title}
                                className="flex flex-col items-center gap-3 sm:gap-4 text-center"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-[4.5rem] md:h-[4.5rem] lg:w-20 lg:h-20 object-contain"
                                />
                                <p className="text-[#2F5B44] font-inter text-sm sm:text-base md:text-lg font-medium leading-snug">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 sm:mt-14 md:mt-16 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-8 md:gap-x-12 md:gap-y-12">
                        {items.slice(6).map((item) => (
                            <div
                                key={item.title}
                                className="flex flex-col items-center gap-3 sm:gap-4 text-center"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-[4.5rem] md:h-[4.5rem] lg:w-20 lg:h-20 object-contain"
                                />
                                <p className="text-[#2F5B44] font-inter text-sm sm:text-base md:text-lg font-medium leading-snug">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </MotionDiv>
            </section>


            <section className="overflow-x-hidden px-4 sm:px-6 lg:px-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl gap-12 md:gap-0">
                    <div className="flex flex-col gap-6 md:gap-10" >
                        <div className="flex justify-center items-center">
                        <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1779114659/screen_vdncfz.svg" alt="hero section image"  />
                        </div>

                        <p  className="text-[#2F5B44] font-Inter text-xl md:text-3xl max-w-[30rem] font-semibold leading-normal text-center md:text-left" > It offers robust functionality across various industries, making it a versatile ERP solution.</p>

                    </div>
            
                        
                    <div className="flex flex-col gap-10 md:gap-32  " >
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-10 md:-ml-8 lg:-ml-16">
                            <p className="text-[#2F5B44] font-kalam text-3xl md:text-4xl font-semibold leading-normal text-center sm:text-left">And 85+ Apps More</p>
                            <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1779127759/arrow1_nm2w4d.svg" alt="arrow right" className="w-12 h-auto sm:w-auto" />
                            
                        </div>
                        <div className="bg-[#2F5B44]/70 py-14 px-6 sm:px-10 rounded-[2.5rem] sm:rounded-[3rem] md:-ml-8 lg:-ml-12">
                            <h2 className="text-[#FEF9D0] text-center font-Inter text-3xl max-w-[20rem] mx-auto font-semibold leading-normal">
                                 Which Types of Businesses Use Odoo?
                            </h2>
                            <p className="text-[#FEF9D0] font-inter max-w-[25rem] mt-4  text-base sm:text-lg font-normal leading-normal mb-5 sm:mb-6">
                                 Odoo is ideal for small to mid-sized businesses and is particularly suited for:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-10 gap-y-2">
                                <ul className= "text-[#FEF9D0] list-disc pl-5 space-y-5 font-inter text-sm text-Inter sm:text-base md:text-lg leading-normal marker:text-[#FEF9D0]">
                                    <li>Manufacturing companies</li>
                                    <li>Retailers (both online and brick-and-mortar)</li>
                                    <li>R&amp;D companies</li>
                                    <li>Marketing agencies</li>
                                    <li>Consultants and Odoo Partners</li>
                                    <li>Accounting firms</li>
                                </ul>
                                <ul className="text-[#FEF9D0] list-disc pl-5 space-y-5 font-inter text-Inter text-sm sm:text-base md:text-lg leading-normal marker:text-[#FEF9D0]">
                                    <li>Distribution companies</li>
                                    <li>Field service operations</li>
                                    <li>Service providers</li>
                                    <li>Training providers</li>
                                    <li>IT companies with trained developers</li>
                                </ul>
                            </div>
                        </div> 
                        
                    </div>

                 </div>
            </section>

            <section className="overflow-x-hidden px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">   
                <div className="mt-10">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0">               
                     <h1 className="text-[#2F5B44] font-kalam text-3xl sm:text-4xl md:text-5xl text-center  max-w-[40rem] font-semibold leading-normal">
                               Key Features and Advantages of Odoo
                      </h1>
                      <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1779127759/arrow2_mqrx7l.svg" alt="arrow right" className="w-16 h-auto md:w-auto" />
                            
                    </div>


                    <MotionDiv
                        className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.08 },
                            },
                        }}
                    >
                        {cards.map((card, index) => (
                            <MotionDiv
                                key={card.title}
                                variants={{
                                    hidden: { opacity: 0, y: 16 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                className="flex flex-col rounded-[1.75rem] sm:rounded-[2rem] border-2 border-[#2F5B44] px-6 py-7 sm:px-7 sm:py-8"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-[#2F5B44]/70">
                                        <img
                                            src={card.Icon}
                                            alt=""
                                            className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
                                        />
                                    </div>
                                    <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-[#2F5B44]/70 font-inter text-lg sm:text-xl font-bold text-[#FEF9D0]">
                                        {index + 1}
                                    </span>
                                </div>
                                <h3 className="mt-5 sm:mt-6 font-inter text-base sm:text-lg font-bold uppercase leading-snug text-[#2F5B44]">
                                    {card.title}
                                </h3>
                                <p className="mt-3 font-inter text-sm sm:text-base font-normal leading-normal text-[#2F5B44]">
                                    {card.paragraph}
                                </p>
                            </MotionDiv>
                        ))}
                    </MotionDiv>
                </div>

                <div className="mt-20 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0 px-4">
                <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1779130333/arrow3_a77wqf.svg" alt="arrow right" className="w-20 h-auto md:w-auto" />
                <p className="text-[#2F5B44] text-3xl sm:text-4xl md:text-5xl font-kalam max-w-[30rem] font-semibold leading-normal md:-mt-10 text-center md:text-left" > Need More Details Start Now</p>
                </div>


            </section>


            <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden mt-20" style={{ background: '#2F5B44' }}>
              <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  
                  {/* Left Side - Text Content */}
                  <MotionDiv
                    className="space-y-1 lg:space-y-20 pb-4 text-left mr-0 lg:mr-[3rem] lg:order-1 order-2 mt-10 lg:mt-0"
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <div>
                      <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] xl:text-[27px] font-bold text-[#FEF9D0] leading-tight " style={{ fontFamily: 'Inter' }}>
                        DIGITIZING YOUR BUSINESS<br />
                        GROWTH
                      </h2>
                    </div>

                    <div className="space-y-6">
                      {/* Email */}
                      <div>
                        <h4 className="text-[#FEF9D0] text-[16px] sm:text-[18px] font-semibold mb-2">Email</h4>
                        <p className="text-[#FEF9D0] text-[14px] sm:text-[15px] opacity-90">info@devext.io</p>
                      </div>

                      {/* Contact Number */}
                      <div>
                        <h4 className="text-[#FEF9D0] text-[16px] sm:text-[18px] font-semibold mb-2">Contact Number</h4>
                        <p className="text-[#FEF9D0] text-[14px] sm:text-[15px] opacity-90">+20 - 1200064762</p>
                      </div>

                      {/* Location */}
                      <div>
                        <h4 className="text-[#FEF9D0] text-[16px] sm:text-[18px] font-semibold mb-2">Location</h4>
                        <p className="text-[#FEF9D0] text-[14px] sm:text-[15px] opacity-90">Alexandria, Egypt</p>
                      </div>
                    </div>

                    {/* Follow Us */}
                    <div className="pt-2 flex justify-between">
                      <p className="text-[#FEF9D0] text-[16px] sm:text-[18px] font-semibold mb-2">FOLLOW US</p>
                      <div className="flex items-center gap-4 mb-2 ">
                        <a href="#" className="hover:opacity-70 transition-opacity" aria-label="WhatsApp">
                          <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759052727/WhatsApp_udvzpw.svg" alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                        <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
                          <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759052651/Instagram_kkvsnz.svg" alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                        <a href="#" className="hover:opacity-70 transition-opacity" aria-label="LinkedIn">
                          <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759052651/Linkedin_sqzkyo.svg" alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                      </div>
                    </div>
                  </MotionDiv>

                  {/* Right Side - Contact Form */}
                  <MotionDiv
                    className="bg-transparent lg:order-2 order-1 ml-0 lg:ml-[2rem]"
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <div className="mb-6 sm:mb-8 text-center lg:text-left ">
                      <h3 className="text-[24px] sm:text-[28px] lg:text-[29px] font-bold text-[#FEF9D0] mb-2 leading-tight">
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

                        const res = await fetch('https://api.web3forms.com/submit', {
                          method: 'POST',
                          body: formData,
                          headers: { Accept: 'application/json' }
                        });
                        const data = await res.json().catch(() => ({ success: false, message: 'Invalid response from server' }));
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
                          <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759052599/Company_Name_jsmiuk.svg" alt="company icon" className="w-5 h-5" />
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
                          <img src="https://res.cloudinary.com/daop3bufa/image/upload/v1759052653/message_hiaunj.svg" alt="message icon" className="w-5 h-5" />
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
                  </MotionDiv>
                </div>
              </div>
            </section>


            



        </div>

        </div>
    )
}