import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';

// Smooth scroll styles
const smoothScrollStyles = `
  /* Smooth and slower page scroll */
  html {
    scroll-behavior: smooth;
    scroll-snap-type: y proximity;
  }
  
  body {
    scroll-behavior: smooth;
  }
  
  * {
    scroll-behavior: smooth;
  }
  
  /* Make scroll even smoother and slower */
  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }
  
  /* Add momentum scrolling for iOS */
  body {
    -webkit-overflow-scrolling: touch;
  }
  
  /* Custom scrollbar styling for smoother experience */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #2F5B44;
    border-radius: 4px;
    transition: background 0.3s ease;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #1e3d2a;
  }
`;
import uparrow from "/images/home/Vector.svg"
import downarrow from "/images/home/Vector1.svg"
import Footer from '../components/Footer';
import logo  from "/images/about/Devext Pattern 1 1.svg"
import logo2  from "/images/about/Devext Pattern 1 2.svg"
import name from "/images/about/Vector.svg"
import email from "/images/about/Vector3.svg"
import phone from "/images/about/Vector4.svg"
import message from "/images/about/Vector5.svg"
import company from "/images/about/Vector6.svg"

import whatsapp from "/images/home/WhatsApp.svg"
import instagram from "/images/home/Instagram.svg"
import linkedin from "/images/home/Linkedin.svg"
import line from "/images/home/Line 1.svg"
import basm from "/images/about/Frame 432.svg"

import yousef from "/images/about/Frame 433.svg"

import pansee from "/images/about/Frame 434.svg"
import mohamed from "/images/about/Frame 435.svg"
import abdelrahman from "/images/about/Frame 436.svg"
import thirdsection from "/images/about/mobile app mockup 1 1.svg"
import secondsection from "/images/about/website mockup 1 1.svg"
import downarrow2green from "/images/home/arrow Down.svg"
import icon2 from "/images/home/Vector2.png"


function About() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');
  return (
    <>
      <style>{smoothScrollStyles}</style>
      <div className="min-h-screen bg-gray-100">   
        <Navbar />

        {/* Hero Section */}
                <section className="relative min-h-[95vh] flex items-center overflow-hidden">
             {/* Video Background */}
             <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(257.99deg,rgba(254,249,208,0.1)_0%,rgba(47,91,68,0.1)_1%,#2F5B44_95%)] z-10"></div>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute w-full h-full object-cover"
                  style={{ 
                    width: '100vw',
                    height: '100vh',
                    left: '0',
                    top: '0',
                    objectFit: 'cover',
                    position: 'absolute'
                  }}
                >
                  <source src="https://res.cloudinary.com/dp5bcywc7/video/upload/v1755000417/Untitled_Video_avcvi8.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

          {/* Content */}
          
        <div className="container mx-auto max-w-6xl relative z-20 px-4 sm:px-6 pt-10 sm:pt-20 flex justify-center -mt-23">
            <div className="max-w-4xl text-center">
            <h1 className="text-[30px] sm:text-[40px] lg:text-[48px] font-medium leading-tight mb-6 text-[#FFFFFF]">
            The Team You Need On Your Project!
            </h1>
            
           
            <p className="text-base sm:text-lg mb-8 leading-relaxed text-[#E9F2CD] opacity-80 max-w-2xl mx-auto">
            At DEVEXT, we are a team of innovators, designers, and developers dedicated to turning ideas into impactful solutions. With years of experience and a passion for excellence, we partner with businesses of all sizes to deliver web, app, and digital services that inspire growth and success.
            </p>  
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-5">
              <Link 
                to="/team"
                className="bg-transparent border-2 border-[#E9F2CD] text-[#E9F2CD] px-6 py-3 rounded-full font-medium hover:bg-[#E9F2CD] hover:text-[#2F5B44] transition-colors flex items-center justify-center text-base group"
              >
                Our Team
                <span className="relative w-4 h-4 ml-2 inline-block">
                  <img src={downarrow} alt="arrow" className="absolute inset-0 w-4 h-4 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
                  <img src={downarrow2green} alt="arrow green" className="absolute inset-0 w-4 h-4 transition-opacity duration-200 opacity-0 group-hover:opacity-100" />
                </span>
              </Link>
              <Link 
                to="/services"
                className="bg-transparent border-2 border-[#E9F2CD] text-[#E9F2CD] px-6 py-3 rounded-full font-medium hover:bg-[#E9F2CD] hover:text-[#2F5B44] transition-colors flex items-center justify-center text-base group"
              >
                Learn More
                <span className="relative w-4 h-4 ml-2 inline-block">
                  <img src={uparrow} alt="arrow" className="absolute inset-0 w-4 h-4 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
                  <img src={icon2} alt="arrow green" className="absolute inset-0 w-4 h-4 transition-opacity duration-200 opacity-0 group-hover:opacity-100" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

 {/* second Section */}
 <section className="relative min-h-[80vh]">
        <div className="absolute inset-0 hidden md:block">
          <div className="flex h-full">
            <div className="w-1/2 bg-[#E9F2CD]"></div>
            <div className="w-1/2 bg-[#2F5B44]"></div>
          </div>
        </div>
        
        <div className="relative h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
            
                         {/* Left Content */}
             <div className="relative flex items-center justify-center p-6 sm:p-8 lg:p-12 font-['Inter'] overflow-hidden bg-[#2F5B44]">
               <div className="relative z-10 max-w-lg text-left">
                 <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-medium text-[#FEF9D0] mb-4 sm:mb-6 leading-tight uppercase">
                   CREATIVE SOFTWARE<br />
                   AGENCY DELIVERING CUSTOM<br />
                   SOLUTIONS
                 </h3>
                 <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-normal text-[#FEF9D0] mb-4 sm:mb-6 leading-relaxed">
                 DEVEXT began as a small team of talented freelancers, each working on individual projects with passion and creativity. Over time, our dedication and commitment to excellence enabled us to grow into a full-service digital agency, trusted by businesses across the UAE, KSA, and Turkey.
                 </p>
                 <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-normal text-[#FEF9D0] mb-6 sm:mb-8 leading-relaxed">
                 With more than 5 years of experience in the industry, we have partnered with startups, SMEs, and large enterprises to deliver innovative solutions that meet diverse business needs. Our journey reflects not only growth in scale but also in expertise, creativity, and the ability to adapt to dynamic markets.
                 </p>
               </div>
             </div>

                        {/* Right  */}
            <div className="relative flex items-center justify-center p-6 sm:p-8 bg-[#FEF9D0] overflow-hidden">
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img 
                  src={secondsection} 
                  alt="Website Mockup" 
                  className="w-full h-auto max-w-lg object-contain -mb-8 md:-mb-14 "
                />
              </div>
                             
              <div className="absolute -right-10  top-0 w-full h-full flex items-center justify-end opacity-30">
                  <img 
                    src={logo} 
                    alt="Background Pattern" 
                    className="w-auto h-full object-contain object-right"
                    style={{ 
                      transform: 'scale(1.2) translateX(-10%)',
                      filter: 'brightness(1.5) contrast(1.5) saturate(1.3)',
                      mixBlendMode: 'multiply'
                    }}
                  />
             
              </div>
            </div>
           
          </div>
        </div>
      </section>


            {/* third Section */}
      <section className="relative min-h-[80vh]">
        <div className="absolute inset-0 hidden md:block">
          <div className="flex h-full">
            <div className="w-1/2 bg-[#E9F2CD]"></div>
            <div className="w-1/2 bg-[#2F5B44]"></div>
          </div>
        </div>
        
        <div className="relative h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
            
            {/* Left Content */}
            <div className="relative flex items-center justify-center p-6 sm:p-8 bg-[#FEF9D0] overflow-hidden">
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img 
                  src={thirdsection} 
                  alt="Mobile App Mockup" 
                  className="w-full h-auto max-w-lg object-contain"
                />
              </div>
              <div className="absolute -left-90 top-0 w-full h-full flex items-center justify-start opacity-25">
                <img 
                  src={logo2} 
                  alt="Background Pattern" 
                  className="w-auto h-full object-contain object-left"
                  style={{ 
                    transform: 'scale(1.2) translateX(10%)',
                    filter: 'brightness(1.5) contrast(1.5) saturate(1.3)',
                    mixBlendMode: 'multiply'
                  }}
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="relative flex items-center justify-center p-6 sm:p-8 lg:p-12 font-['Inter'] overflow-hidden bg-[#2F5B44]">
              <div className="relative z-10 max-w-lg text-left">
                <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-medium text-[#FEF9D0] mb-4 sm:mb-6 leading-tight uppercase">
                  CREATIVE SOFTWARE<br />
                  AGENCY DELIVERING CUSTOM<br />
                  SOLUTIONS
                </h3>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-normal text-[#FEF9D0] mb-4 sm:mb-6 leading-relaxed">
                At DEVEXT, client satisfaction is at the heart of everything we do. We follow the latest trends and best practices in web and app development to ensure that every project we deliver is modern, user-friendly, and impactful. From intuitive design to powerful functionality, we craft solutions that help our clients thrive in the digital era.
                </p>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px] font-normal text-[#FEF9D0] mb-6 sm:mb-8 leading-relaxed">
                Our success is built on innovation, collaboration, and trust. By combining technical expertise with a deep understanding of business goals, we continue to push boundaries and deliver custom solutions tailored to each client’s vision. With DEVEXT, you don’t just get a service provider—you gain a long-term partner dedicated to your success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


            {/* fourth Section */}
      <section className="relative py-20 px-6 bg-[#2F5B44]">
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-bold text-[#FEF9D0] mb-6 leading-tight">
              MEET OUR LEADERSHIP TEAM
            </h2>
            <p className="text-[18px] text-[#FEF9D0] max-w-4xl mx-auto text-center leading-relaxed">
              Top industry with proven experience who are hands-on in managing projects
              Top industry with proven experience who are hands-on in managing projects
            </p>
          </div>

          {/* Team Members */}
          <div className="flex flex-col items-center gap-4 sm:gap-6 -mt-4">
            {/* Inline TeamCard component (supports avatar images) */}
            {(() => {
              const TeamCard = ({ name = 'First & Last Name', role = 'Position & Role', img, w = 'w-40 sm:w-48 md:w-52 lg:w-56', h = 'h-52 sm:h-56 md:h-60 lg:h-64 xl:h-72' }) => (
                <div className={`relative ${w} ${h} rounded-2xl sm:rounded-3xl overflow-hidden`}>
                  {/* Card background */}
                  <div className="absolute inset-0 bg-[#2F5B44]" />
                  {/* Inner radius mask */}
                  <div className="absolute inset-1 rounded-2xl sm:rounded-3xl" />
                  {/* Avatar image or fallback silhouette */}
                  {img ? (
                    <img src={img} alt={name} className="absolute inset-0 w-full h-full object-contain object-center" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center pt-4">
                      <svg viewBox="0 0 128 160" className="w-[70%] h-[70%]" aria-hidden="true">
                        <g fill="#E9F2CD">
                          <circle cx="64" cy="44" r="24" />
                          <path d="M24,116 C24,92 44,78 64,78 C84,78 104,92 104,116 L24,116 Z" />
                        </g>
                      </svg>
                    </div>
                  )}
                  {/* Bottom label */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#214C38] px-2 sm:px-3 py-2 text-center">
                    <div className="text-[#FEF9D0] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] font-medium leading-tight mb-1 sm:mb-2">{name}</div>
                    <div className="text-[#FEF9D0] text-[8px] sm:text-[9px] md:text-[10px] opacity-80 leading-tight">{role}</div>
                  </div>
                </div>
              );

              return (
                <>
                  {/* Top Leader */}
                  <div className="relative flex flex-col items-center mb-4 sm:mb-6 lg:mb-8">
                    <TeamCard 
                      w="w-48 sm:w-56 md:w-64 lg:w-72" 
                      h="h-60 sm:h-64 md:h-68 lg:h-72 xl:h-80" 
                      name="Basma Omran" 
                      role="Founder/UX UI Designer" 
                      img={basm} 
                    />
                  </div>
                  {/* Bottom Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                    <div className="relative flex flex-col items-center">
                      <TeamCard name="Yousef Magdy" role="Lead Developer" img={yousef} />
                    </div>
                    <div className="relative flex flex-col items-center">
                      <TeamCard name="Pansee Omran" role="Graphic Designer" img={pansee} />
                    </div>
                    <div className="relative flex flex-col items-center">
                      <TeamCard name="Mohaned Altokhy" role="Sales Manager" img={mohamed} />
                    </div>
                    <div className="relative flex flex-col items-center">
                      <TeamCard name="Adbelrahman Ibrahim" role="SEO Specialist" img={abdelrahman} />
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>


 {/* fifth Section - Contact Form */}
 <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden" style={{ background: '#FEF9D0' }}>

<div className="container mx-auto max-w-6xl relative z-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
    
    {/* Left Side - Text Content */}
    <div className="space-y-6 lg:space-y-8 pb-4 text-center lg:text-left">
             <div>
         <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] xl:text-[36px] font-bold text-[#2F5B44] mb-4 sm:mb-6 leading-tight  whitespace-nowrap" style={{ fontFamily: 'Inter' }}>
           DIGITIZING YOUR BUSINESS<br />
           GROWTH
         </h2>
         <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-between mb-6 sm:mb-8 mt-6 sm:mt-10 gap-4 sm:gap-0">
           <img src={line} alt="line"  className=" w-24 sm:w-32 order-1 sm:order-none" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(25%) saturate(1000%) hue-rotate(120deg) brightness(95%) contrast(85%)' }} />
           <span className="text-[#2F5B44] text-base sm:text-lg font-medium order-2 sm:order-none mr-0 lg:mr-10 ">FOLLOW US</span>
           <div className="flex gap-4 sm:gap-6 order-3 sm:order-none">
             <a href="#" className="hover:opacity-70 transition-opacity">
               <img src={whatsapp} alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(25%) saturate(1000%) hue-rotate(120deg) brightness(95%) contrast(85%)' }} />
             </a>
             <a href="#" className="hover:opacity-70 transition-opacity">
               <img src={instagram} alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(25%) saturate(1000%) hue-rotate(120deg) brightness(95%) contrast(85%)' }} />
             </a>
             <a href="#" className="hover:opacity-70 transition-opacity">
               <img src={linkedin} alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(25%) saturate(1000%) hue-rotate(120deg) brightness(95%) contrast(85%)' }} />
             </a>
           </div>
         </div>
       </div>
    </div>

    {/* Right Side - Contact Form */}
    <div className="bg-transparent">
      <div className="mb-6 sm:mb-8 text-center lg:text-left">
        <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-[#2F5B44] mb-2 leading-tight">
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
          console.log(err);
        } finally {
          setIsSubmitting(false);
        }
      }}>
        {/* Name Field */}
        <div className="relative">
          <div className="flex items-center gap-3 mb-2">
            <img src={name} alt="name icon" className="w-5 h-5" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(25%) saturate(1000%) hue-rotate(120deg) brightness(95%) contrast(85%)' }} />
            <label className="text-[#2F5B44] text-sm font-medium">NAME *</label>
          </div>
          <input
            type="text"
            required
            name="name"
            className="w-full bg-transparent border-b-2 border-[#2F5B44] text-[#2F5B44] pb-2 focus:outline-none focus:border-[#2F5B44] placeholder-[#2F5B44] placeholder-opacity-60"
            placeholder=""
          />
        </div>

        {/* Company Name Field */}
        <div className="relative">
          <div className="flex items-center gap-3 mb-2">
            <img src={company} alt="company icon" className="w-5 h-5" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(25%) saturate(1000%) hue-rotate(120deg) brightness(95%) contrast(85%)' }} />
            <label className="text-[#2F5B44] text-sm font-medium">COMPANY NAME *</label>
          </div>
          <input
            type="text"
            required
            name="company"
            className="w-full bg-transparent border-b-2 border-[#2F5B44] text-[#2F5B44] pb-2 focus:outline-none focus:border-[#2F5B44] placeholder-[#2F5B44] placeholder-opacity-60"
            placeholder=""
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <div className="flex items-center gap-3 mb-2">
            <img src={email} alt="email icon" className="w-5 h-5" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(25%) saturate(1000%) hue-rotate(120deg) brightness(95%) contrast(85%)' }} />
            <label className="text-[#2F5B44] text-sm font-medium">EMAIL *</label>
          </div>
          <input
            type="email"
            required
            name="email"
            className="w-full bg-transparent border-b-2 border-[#2F5B44] text-[#2F5B44] pb-2 focus:outline-none focus:border-[#2F5B44] placeholder-[#2F5B44] placeholder-opacity-60"
            placeholder=""
          />
        </div>

        {/* Phone Field */}
        <div className="relative">
          <div className="flex items-center gap-3 mb-2">
            <img src={phone} alt="phone icon" className="w-5 h-5" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(25%) saturate(1000%) hue-rotate(120deg) brightness(95%) contrast(85%)' }} />
            <label className="text-[#2F5B44] text-sm font-medium">PHONE *</label>
          </div>
          <input
            type="tel"
            required
            name="phone"
            className="w-full bg-transparent border-b-2 border-[#2F5B44] text-[#2F5B44] pb-2 focus:outline-none focus:border-[#2F5B44] placeholder-[#2F5B44] placeholder-opacity-60"
            placeholder=""
          />
        </div>

        {/* Message Field */}
        <div className="relative">
          <div className="flex items-center gap-3 mb-2">
            <img src={message} alt="message icon" className="w-5 h-5" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(25%) saturate(1000%) hue-rotate(120deg) brightness(95%) contrast(85%)' }} />
            <label className="text-[#2F5B44] text-sm font-medium">YOUR MESSAGE*</label>
          </div>
          <textarea
            required
            rows={4}
            name="message"
            className="w-full bg-transparent border-b-2 border-[#2F5B44] text-[#2F5B44] pb-2 focus:outline-none focus:border-[#2F5B44] placeholder-[#2F5B44] placeholder-opacity-60 resize-none"
            placeholder=""
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center bg-transparent text-[#2F5B44] px-8 py-3 rounded-full font-medium text-[16px] hover:bg-[#2F5B44] hover:text-[#FEF9D0] transition-all duration-300 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed group"
            style={{ border: '2px solid #2F5B44' }}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
            <span className="relative w-4 h-4 ml-2 inline-block">
              <img src={downarrow2green} alt="arrow" className="absolute inset-0 w-4 h-4 transition-opacity duration-200 opacity-100 group-hover:opacity-0" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(25%) saturate(1000%) hue-rotate(120deg) brightness(95%) contrast(85%)' }} />
              <img src={downarrow} alt="arrow green" className="absolute inset-0 w-4 h-4 transition-opacity duration-200 opacity-0 group-hover:opacity-100" />
            </span>
          </button>
        </div>
        {(submitMessage || submitError) && (
          <div className={`mt-4 text-sm ${submitError ? 'text-red-600' : 'text-[#2F5B44]'}`}>
            {submitError || submitMessage}
          </div>
        )}
      </form>
    </div>
  </div>
</div>
</section>
    

          



      


      <Footer />
      </div>
    </>
  );
}

export default About;
