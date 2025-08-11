import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import icons from "/images/home/Frame 7.png"
import uparrow from "/images/home/Vector.svg"
import downarrow from "/images/home/Vector1.svg"
import icon1 from "/images/home/website mockup image 1.svg"
import icon2 from "/images/home/Vector2.png"
import icon3 from "/images/home/Devext Pattern 1 1.svg"
import downthird from "/images/home/Frame 16.svg"
import upthird from "/images/home/Frame 15.svg"
import rectangle from "/images/home/Rectangle 3.svg"
import logoFourthsection from "/images/home/Devext Pattern 2 1.svg"
import fifthsectionbackgroundIcon from "/images/home/Devext Pattern 2 2.svg"
import fiftharrowright from "/images/home/Frame 17.svg"
import fiftharrowleft from "/images/home/Frame 18.svg"
import image1 from "/images/home/screencapture-alwidadtaxation-2025-07-11-16_12_43 1.svg"
import image2 from "/images/home/screencapture-alwidadtaxation-2025-07-11-16_12_43 2.svg"
import image3 from "/images/home/screencapture-alwidadtaxation-2025-07-11-16_12_43 3.svg"
import circle1 from "/images/home/Ellipse 7.svg"
import circle2 from "/images/home/Ellipse 8.svg"
import circle3 from "/images/home/Ellipse 9.svg"
import location from "/images/home/Group.svg"

import name from "/images/home/name.svg"
import email from "/images/home/email.svg"
import phone from "/images/home/phone.svg"
import message from "/images/home/message.svg"

import whatsapp from "/images/home/WhatsApp.svg"
import instagram from "/images/home/Instagram.svg"
import linkedin from "/images/home/Linkedin.svg"
import line from "/images/home/Line 1.svg"

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Video Background */}
                                             <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(257.99deg,rgba(254,249,208,0.1)_0%,rgba(47,91,68,0.5)_32.67%,#2F5B44_55.52%)] z-10"></div>
                <iframe
                  src="https://player.cloudinary.com/embed/?cloud_name=dp5bcywc7&public_id=1440X879_Final_tuvtdq&profile=cld-default&autoplay=true&loop=true&muted=true&controls=false"
                  className="absolute w-full h-full"
                  allow="autoplay; fullscreen"
                  style={{ 
                    border: 'none',
                    width: '150%',
                    height: '150%',
                    left: '-25%',
                    top: '-25%',
                    objectFit: 'cover',
                    position: 'absolute'
                  }}
                ></iframe>
              </div>

          {/* Content */}
          <div className="container mx-auto max-w-6xl relative z-20 px-6 pt-40">
            <div className="max-w-2xl">
            <h1 className="text-[80px] font-bold mb-0 text-[#E9F2CD]">
              DEVEXT
            </h1>
            <h2 className="text-[32px] leading-none mb-6 text-[#E9F2CD] -mt-4">
              Is Your Best Solution<br />
              For A Better Tomorrow
            </h2>
            <p className="text-lg mb-8 leading-relaxed text-[#E9F2CD] opacity-80 max-w-md">
              Lorem ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the 
              industry's standard dummy text ever since the 
              1500s, when an unknown printer took a galley 
              of type and scrambled it to make a type 
              specimen book.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-8">
                <div className="flex flex-col gap-1">
                  <img src={icons} alt="User Reviews" className="h-10" />
                  <div className="flex">
                    {[1,2,3,4,5].map((star, index) => (
                      <svg key={index} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link 
                    to="/community"
                    className="bg-[#2F5B44] border border-[#E9F2CD] text-[#E9F2CD] px-6 py-2 rounded-full font-medium hover:bg-[#E9F2CD] hover:text-[#2F5B44] transition-colors flex items-center text-sm"
                  >
                    Join The Community
                    <img src={uparrow} alt="arrow" className="w-4 h-4 ml-2" />
                  </Link>
                  <Link 
                    to="/about"
                    className="bg-[#2F5B44] border border-[#E9F2CD] text-[#E9F2CD] px-6 py-2 rounded-full font-medium hover:bg-[#E9F2CD] hover:text-[#2F5B44] transition-colors flex items-center text-sm"
                  >
                    Learn More
                    <img src={downarrow} alt="arrow" className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0">
          <div className="flex h-full">
            <div className="w-1/2 bg-[#E9F2CD]"></div>
            <div className="w-1/2 bg-[#2F5B44]"></div>
          </div>
        </div>
        
        <div className="relative h-full">
          <div className="grid md:grid-cols-2 h-full">
            
            {/* Left Content */}
            <div className="relative flex items-center justify-center p-12 font-['Inter'] overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-1 w-[calc(100%-0.5rem)] h-[calc(100%-0.5rem)] opacity-50 z-0">
                <img 
                  src={icon3} 
                  alt="Decorative Pattern" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-10 max-w-lg">
                <h3 className="text-[30px] font-medium text-[#2F5B44] mb-6 leading-tight uppercase text-left">
                  CREATIVE<br />
                  SOFTWARE AGENCY DELIVERING<br />
                  CUSTOM SOLUTIONS
                </h3>
                <p className="text-[16px] font-normal text-[#2F5B44] mb-6 leading-relaxed">
                  Lorem ipsum is simply dummy text of the printing and typesetting 
                  industry. Lorem ipsum has been the industry's standard dummy 
                  text ever since the 1500s, when an unknown printer took a galley 
                  of type and scrambled it to make a type specimen book.
                </p>
                <p className="text-[16px] font-normal text-[#2F5B44] mb-8 leading-relaxed">
                  Lorem ipsum is simply dummy text of the printing and typesetting 
                  industry. Lorem ipsum has been the industry's standard dummy 
                  text ever since the 1500s.
                </p>
                <div className="flex justify-end bottom-2">           
                  <Link 
                    to="/services"
                    className="inline-flex items-center border-2 border-[#2F5B44] text-[#2F5B44] px-6 py-3 rounded-full hover:bg-[#2F5B44] hover:text-white transition-colors font-medium"
                  >
                    Discover More
                    <img src={icon2} alt="arrow" className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex items-center justify-center p-8">
              <div className="relative w-full max-w-md">
                {/* Background Pattern */}
                <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20 z-0">
                  <img 
                    src={icon3} 
                    alt="Decorative Pattern" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <img 
                  src={icon1} 
                  alt="Website Mockup" 
                  className="w-full h-auto relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


         {/* third Section */}
         <section className="relative h-[80vh]">
        <div className="absolute inset-0">
          <div className="flex h-full">
            <div className="w-1/2 bg-[#2F5B44]"></div>
            <div className="w-1/2 bg-[#FEF9D0]"></div>
          </div>
        </div>
        
        <div className="relative h-full">
          <div className="grid md:grid-cols-2 h-full">
            
            {/* Left Side - Dark Green */}
            <div className="relative flex items-center justify-center p-12 font-['Inter'] overflow-hidden bg-[#2F5B44]">
              {/* Arrows - Vertically Centered on Right */}
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-8">
                {/* Up Arrow */}
                <img src={upthird} alt="up arrow" />
                
                {/* Down Arrow */}
                <img src={downthird} alt="down arrow" />
              </div>

              <div className="relative z-10 max-w-lg">
                <h3 className="text-[18px] font-medium text-[#FEF9D0] mb-6 leading-tight uppercase text-left">
                  WHY DEVEXT?
                </h3>
                <h2 className="text-[30px] font-medium  text-[#FEF9D0] mb-6 leading-tight uppercase text-left">
                  DISCOVER OUR EXPERTISE AS<br />
                  A WEB DESIGN COMPANY
                </h2>
                <p className="text-[16px] font-normal text-[#FEF9D0] mb-8 leading-relaxed">
                  As a full-service web design agency, we handle all your 
                  digital needs under one roof. Our custom web design 
                  services include thorough research and planning, 
                  bespoke designs and digital strategies tailored to grow 
                  your reach, drive traffic and encourage engagement.
                </p>
              </div>
            </div>

            {/* Right Side - Light Cream */}
            <div className="relative flex items-center justify-center p-12 font-['Inter'] overflow-hidden">
              <div className="relative z-10 max-w-lg">
                <div className="flex items-center gap-3 mb-6">
                  <img src={rectangle} alt="Rectangle Icon" className="w-auto h-auto" />
                  <h3 className="text-[30px] font-medium text-[#2F5B44]  leading-tight uppercase text-left">
                    CUSTOM WEB DESIGN
                  </h3>
                </div>
              
                <p className="text-[16px] font-normal text-[#2F5B44] mb-8 leading-relaxed">
                  Each website we create is meticulously crafted to deliver a 
                  100% unique experience tailored to your brand. Our 
                  expert designers transform your vision into a dynamic, 
                  custom design that enhances your brand's visibility, boosts 
                  engagement, and drives conversions. With us, your website 
                  will not only stand out but also connect deeply with your 
                  audience.
                </p>
                <div className="flex justify-end">
                  <Link 
                    to="/services"
                    className="inline-flex items-center text-[#2F5B44] px-6 py-3 rounded-full hover:bg-[#2F5B44] hover:text-white transition-colors font-medium"
                    style={{ border: '3px solid #2F5B44' }}
                  >
                    Learn More
                    <img src={downarrow} alt="arrow" className="w-4 h-4 ml-2" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(25%) saturate(1000%) hue-rotate(120deg) brightness(95%) contrast(85%)' }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* fourth Section */}
      <section className="relative py-20 px-6 text-center overflow-hidden" style={{ background: '#2F5B44' }}>
        {/* Background Pattern with Logo */}
        <div className="absolute inset-0">
          {/* Curved flowing pattern background */}
          <div className="absolute inset-0">
            {/* Main curved flow design */}
            <div className="absolute top-0 right-0 w-full h-full">
              <div 
                className="w-full h-full opacity-20"
                style={{
                  background: `
                    radial-gradient(ellipse 800px 600px at 120% 20%, rgba(254, 249, 208, 0.3) 0%, transparent 50%),
                    radial-gradient(ellipse 600px 800px at -20% 80%, rgba(254, 249, 208, 0.2) 0%, transparent 50%),
                    radial-gradient(ellipse 400px 300px at 80% 60%, rgba(254, 249, 208, 0.15) 0%, transparent 70%)
                  `
                }}
              />
            </div>
            
            {/* Logo Pattern Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-90">
              <img 
                src={logoFourthsection} 
                alt="Background Pattern" 
                className="w-full h-full object-contain object-center"
                style={{ 
                  transform: 'scale(0.85)',
                  filter: 'brightness(3) contrast(1.5) saturate(1.2)',
                  mixBlendMode: 'soft-light'
                }}
              />
            </div>
            
            {/* Additional curved elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div 
                className="absolute top-10 right-10 w-96 h-96 rounded-full opacity-10"
                style={{
                  background: 'radial-gradient(circle, rgba(254, 249, 208, 0.4) 0%, transparent 70%)'
                }}
              />
              <div 
                className="absolute bottom-10 left-10 w-80 h-80 rounded-full opacity-10"
                style={{
                  background: 'radial-gradient(circle, rgba(254, 249, 208, 0.3) 0%, transparent 70%)'
                }}
              />
            </div>
          </div>
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-[40px] text-sm  mb-6 text-[#FEF9D0] leading-tight tracking-wide">
            CUSTOM <span className="text-[#FEF9D0] text-5xl font-bold">WEB DESIGN</span> PRICING FOR EACH<br />
            CLIENT'S OBJECTIVES
          </h2>
          <p className="text-[#FEF9D0] mb-6 text-[18px] leading-relaxed max-w-3xl mx-auto">
            Every website design project comes with unique challenges and specific 
            requirements that influence its final cost.
          </p>
          <p className="text-[#FEF9D0] mb-12 text-[16px] leading-relaxed max-w-3xl mx-auto">
            The technical setup of your website, which directly impacts its performance, is a key 
            factor in determining cost. More complex setups that demand significant time and effort 
            will naturally increase the overall price.
          </p>
          <Link 
            to="/calculator"
            className="inline-flex items-center bg-transparent text-[#FEF9D0] px-8 py-3 rounded-full font-medium text-[16px] hover:bg-[#FEF9D0] hover:text-[#2F5B44] transition-all duration-300 transform hover:scale-105"
            style={{ border: '2px solid #FEF9D0' }}
          >
            Calculate Your Website Cost
            <img src={downarrow} alt="arrow" className="w-5 h-5 ml-3" />
          </Link>
        </div>
      </section>


                   {/* fifth Section - Customer Testimonials */}
          <section className="relative py-20 px-6 overflow-hidden" style={{ background: '#FEF9D0' }}>
            {/* Background Pattern */}
            <div className="absolute inset-0">
              <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-start opacity-50">
                <img 
                  src={fifthsectionbackgroundIcon} 
                  alt="Background Pattern" 
                  className="w-full h-full object-contain object-left"
                  style={{ 
                    transform: 'scale(1.6) translateX(10%)',
                    filter: 'brightness(1.5) contrast(1.5) saturate(1.3)',
                    mixBlendMode: 'multiply'
                  }}
                />
              </div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-[36px] font-bold text-[#2F5B44] mb-4 leading-tight">
                  WHAT OUR CUSTOMERS SAY<br />
                  ABOUT US!
                </h2>
                <p className="text-[20px] text-[#2F5B44] max-w-4xl mx-auto text-center" style={{ fontFamily: 'Inter', fontWeight: 400, lineHeight: '100%', letterSpacing: '0%' }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                  of type and scrambled it to make a type specimen book.
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-start mb-8 mt-16">
                <div className="flex gap-4">
                  <button className="hover:opacity-70 transition-opacity">
                    <img src={fiftharrowleft} alt="Previous" className="w-10 h-10" />
                  </button>
                  <button className="hover:opacity-70 transition-opacity">
                    <img src={fiftharrowright} alt="Next" className="w-10 h-10" />
                  </button>
                </div>
              </div>

              {/* Testimonial Cards */}
              <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-[#2F5B44] rounded-3xl p-6 text-[#FEF9D0]">
                  <div className="mb-6">
                    <img src={image1} alt="Project 1" className="w-full h-32 object-cover rounded-lg" />
                  </div>
                  <p className="text-[14px] leading-relaxed mb-6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                  <div className="flex items-center gap-3">
                    <img src={circle1} alt="Client Icon" className="w-8 h-8" />
                    <div>
                      <p className="text-[#FEF9D0] text-sm font-medium">joyaproperties.com</p>
                      <div className="flex items-center gap-1 mt-1">
                        <svg className="w-3 h-3 text-[#FEF9D0]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-[#FEF9D0] text-xs">Dubai</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#2F5B44] rounded-3xl p-6 text-[#FEF9D0]">
                  <div className="mb-6">
                    <img src={image2} alt="Project 2" className="w-full h-32 object-cover rounded-lg" />
                  </div>
                  <p className="text-[14px] leading-relaxed mb-6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                  <div className="flex items-center gap-3">
                    <img src={circle2} alt="Client Icon" className="w-8 h-8" />
                    <div>
                      <p className="text-[#FEF9D0] text-sm font-medium">ldc-investment.sa</p>
                      <div className="flex items-center gap-1 mt-1">
                        <svg className="w-3 h-3 text-[#FEF9D0]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-[#FEF9D0] text-xs">Riyadh</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-[#2F5B44] rounded-3xl p-6 text-[#FEF9D0]">
                  <div className="mb-6">
                    <img src={image3} alt="Project 3" className="w-full h-32 object-cover rounded-lg" />
                  </div>
                  <p className="text-[14px] leading-relaxed mb-6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                  <div className="flex items-center gap-3">
                    <img src={circle3} alt="Client Icon" className="w-8 h-8" />
                    <div>
                      <p className="text-[#FEF9D0] text-sm font-medium">sada-almawal.sa</p>
                      <div className="flex items-center gap-1 mt-1">
                        <svg className="w-3 h-3 text-[#FEF9D0]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-[#FEF9D0] text-xs">Dubai</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>  
          
          {/* sixth Section - FAQ */}
          <section className="relative py-20 px-6" style={{ background: '#2F5B44' }}>
            <div className="container mx-auto max-w-full px-8">
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="text-[36px] font-bold text-[#FEF9D0] mb-8 leading-tight" style={{ fontFamily: 'Inter' }}>
                  FREQUENTLY ASKED QUESTIONS
                </h2>
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-4">
                {/* FAQ Item 1 */}
                <div className="border-2 border-[#FEF9D0] rounded-full px-8 py-4 hover:bg-[#FEF9D0] hover:bg-opacity-20 transition-all cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[18px] font-medium text-[#FEF9D0]">
                      What does a web design agency do?
                    </h3>
                    <svg className="w-6 h-6 text-[#FEF9D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div className="border-2 border-[#FEF9D0] rounded-full px-8 py-4 hover:bg-[#FEF9D0] hover:bg-opacity-20 transition-all cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[18px] font-medium text-[#FEF9D0]">
                      What's The Difference Between Web Design & Web Development?
                    </h3>
                    <svg className="w-6 h-6 text-[#FEF9D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* FAQ Item 3 */}
                <div className="border-2 border-[#FEF9D0] rounded-full px-8 py-4 hover:bg-[#FEF9D0] hover:bg-opacity-20 transition-all cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[18px] font-medium text-[#FEF9D0]">
                      Why is responsive web design important?
                    </h3>
                    <svg className="w-6 h-6 text-[#FEF9D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* FAQ Item 4 */}
                <div className="border-2 border-[#FEF9D0] rounded-full px-8 py-4 hover:bg-[#FEF9D0] hover:bg-opacity-20 transition-all cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[18px] font-medium text-[#FEF9D0]">
                      How long does it take to design a website?
                    </h3>
                    <svg className="w-6 h-6 text-[#FEF9D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* FAQ Item 5 */}
                <div className="border-2 border-[#FEF9D0] rounded-full px-8 py-4 hover:bg-[#FEF9D0] hover:bg-opacity-20 transition-all cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[18px] font-medium text-[#FEF9D0]">
                      How much should I expect to pay for web design?
                    </h3>
                    <svg className="w-6 h-6 text-[#FEF9D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* FAQ Item 6 */}
                <div className="border-2 border-[#FEF9D0] rounded-full px-8 py-4 hover:bg-[#FEF9D0] hover:bg-opacity-20 transition-all cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[18px] font-medium text-[#FEF9D0]">
                      How can you help me generate leads after my website is launched?
                    </h3>
                    <svg className="w-6 h-6 text-[#FEF9D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* FAQ Item 7 */}
                <div className="border-2 border-[#FEF9D0] rounded-full px-8 py-4 hover:bg-[#FEF9D0] hover:bg-opacity-20 transition-all cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[18px] font-medium text-[#FEF9D0]">
                      Do you offer website redesign services?
                    </h3>
                    <svg className="w-6 h-6 text-[#FEF9D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* FAQ Item 8 */}
                <div className="border-2 border-[#FEF9D0] rounded-full px-8 py-4 hover:bg-[#FEF9D0] hover:bg-opacity-20 transition-all cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[18px] font-medium text-[#FEF9D0]">
                      Will my website be mobile-friendly?
                    </h3>
                    <svg className="w-6 h-6 text-[#FEF9D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* FAQ Item 9 */}
                <div className="border-2 border-[#FEF9D0] rounded-full px-8 py-4 hover:bg-[#FEF9D0] hover:bg-opacity-20 transition-all cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[18px] font-medium text-[#FEF9D0]">
                      Can you create a logo for my brand?
                    </h3>
                    <svg className="w-6 h-6 text-[#FEF9D0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* seventh Section */}
          <section className="relative py-20 px-6 overflow-hidden" style={{ background: '#FEF9D0' }}>
            {/* Background Pattern */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 flex items-center justify-center opacity-15">
                <img 
                  src={fifthsectionbackgroundIcon} 
                  alt="Background Pattern" 
                  className="w-full h-full object-contain object-center"
                  style={{ 
                    transform: 'scale(1.4)',
                    filter: 'brightness(1.2) contrast(1.3) saturate(1.1)',
                    mixBlendMode: 'multiply'
                  }}
                />
              </div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-[36px] font-bold text-[#2F5B44] mb-4 leading-tight">
                  WHAT OUR CUSTOMERS SAY<br />
                  ABOUT US!
                </h2>
                <p className="text-[20px] text-[#2F5B44] max-w-4xl mx-auto text-center" style={{ fontFamily: 'Inter', fontWeight: 400, lineHeight: '100%', letterSpacing: '0%' }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                  of type and scrambled it to make a type specimen book.
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-start mb-8">
                <div className="flex gap-4">
                  <button className="hover:opacity-70 transition-opacity">
                    <img src={fiftharrowleft} alt="Previous" className="w-10 h-10" />
                  </button>
                  <button className="hover:opacity-70 transition-opacity">
                    <img src={fiftharrowright} alt="Next" className="w-10 h-10" />
                  </button>
                </div>
              </div>

              {/* 3 Cards Layout with Rotated Side Cards */}
              <div className="flex items-center justify-center gap-10 min-h-[550px] relative">
                {/* Left Card - Rotated -30 degrees and moved down more */}
                <div className="bg-[#FEF9D0] rounded-3xl p-8 text-[#2F5B44] max-w-sm shadow-2xl min-h-[380px] flex flex-col justify-center transform -rotate-[30deg] translate-y-12 z-10">
                  <p className="text-[15px] leading-relaxed mb-8 text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.
                  </p>
                  <div className="flex items-center gap-3 justify-center">
                    <img src={circle1} alt="Client Icon" className="w-10 h-10" />
                    <div className="text-center">
                      <p className="text-[#2F5B44] text-base font-medium">Altal Alkabeer</p>
                      <div className="flex items-center gap-1 mt-1 justify-center">
                        <img src={location} alt="Location" className="w-4 h-4" />
                        <p className="text-[#2F5B44] text-sm">Riyadh</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Card - Highest Priority */}
                <div className="bg-[#2F5B44] rounded-3xl p-8 text-[#FEF9D0] max-w-sm shadow-2xl min-h-[380px] flex flex-col justify-center z-50">
                  <p className="text-[15px] leading-relaxed mb-8 text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry.
                  </p>
                  <div className="flex items-center gap-3 justify-center">
                    <img src={circle2} alt="Client Icon" className="w-10 h-10" />
                    <div className="text-center">
                      <p className="text-[#FEF9D0] text-base font-medium">Joud&Karam</p>
                      <div className="flex items-center gap-1 mt-1 justify-center">
                        <img src={location} alt="Location" className="w-4 h-4" />
                        <p className="text-[#FEF9D0] text-sm">Dubai</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Card - Rotated 30 degrees and moved down more */}
                <div className="bg-[#FEF9D0] rounded-3xl p-8 text-[#2F5B44] max-w-sm shadow-2xl min-h-[380px] flex flex-col justify-center transform rotate-[30deg] translate-y-12 z-10">
                  <p className="text-[15px] leading-relaxed mb-8 text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.
                  </p>
                  <div className="flex items-center gap-3 justify-center">
                    <img src={circle3} alt="Client Icon" className="w-10 h-10" />
                    <div className="text-center">
                      <p className="text-[#2F5B44] text-base font-medium">Bedayat Meshwar</p>
                      <div className="flex items-center gap-1 mt-1 justify-center">
                        <img src={location} alt="Location" className="w-4 h-4" />
                        <p className="text-[#2F5B44] text-sm">Dubai</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* eighth Section - Contact Form */}
          <section className="relative py-20 px-6 overflow-hidden" style={{ background: '#2F5B44' }}>

            <div className="container mx-auto max-w-6xl relative z-10">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                
                {/* Left Side - Text Content */}
                <div className="space-y-8 pb-4">
                  <div>
                    <h2 className="text-[30px] font-bold text-5xl text-[#FEF9D0] mb-6 leading-tight" style={{ fontFamily: 'Inter' }}>
                      DIGITIZING YOUR BUSINESS<br />
                      GROWTH
                    </h2>
                    <div className="flex items-center justify-between mb-8 mt-10">
                      <img src={line} alt="line" className="w-32" />
                      <span className="text-[#FEF9D0] text-lg font-medium">FOLLOW US</span>
                      <div className="flex gap-6">
                        <a href="#" className="hover:opacity-70 transition-opacity">
                          <img src={whatsapp} alt="WhatsApp" className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:opacity-70 transition-opacity">
                          <img src={instagram} alt="Instagram" className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:opacity-70 transition-opacity">
                          <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="bg-transparent">
                  <div className="mb-8">
                    <h3 className="text-[32px] font-bold text-[#FEF9D0] mb-2 leading-tight">
                      START A CONVERSATION<br />
                      WITH US
                    </h3>
                  </div>

                  <form className="space-y-6">
                    {/* Name Field */}
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-2">
                        <img src={name} alt="name icon" className="w-5 h-5" />
                        <label className="text-[#FEF9D0] text-sm font-medium">NAME *</label>
                      </div>
                      <input
                        type="text"
                        required
                        className="w-full bg-transparent border-b-2 border-[#FEF9D0] text-[#FEF9D0] pb-2 focus:outline-none focus:border-[#E9F2CD] placeholder-[#FEF9D0] placeholder-opacity-60"
                        placeholder=""
                      />
                    </div>

                    {/* Company Name Field */}
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-2">
                        <img src={name} alt="company icon" className="w-5 h-5" />
                        <label className="text-[#FEF9D0] text-sm font-medium">COMPANY NAME *</label>
                      </div>
                      <input
                        type="text"
                        required
                        className="w-full bg-transparent border-b-2 border-[#FEF9D0] text-[#FEF9D0] pb-2 focus:outline-none focus:border-[#E9F2CD] placeholder-[#FEF9D0] placeholder-opacity-60"
                        placeholder=""
                      />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-2">
                        <img src={email} alt="email icon" className="w-5 h-5" />
                        <label className="text-[#FEF9D0] text-sm font-medium">EMAIL *</label>
                      </div>
                      <input
                        type="email"
                        required
                        className="w-full bg-transparent border-b-2 border-[#FEF9D0] text-[#FEF9D0] pb-2 focus:outline-none focus:border-[#E9F2CD] placeholder-[#FEF9D0] placeholder-opacity-60"
                        placeholder=""
                      />
                    </div>

                    {/* Phone Field */}
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-2">
                        <img src={phone} alt="phone icon" className="w-5 h-5" />
                        <label className="text-[#FEF9D0] text-sm font-medium">PHONE *</label>
                      </div>
                      <input
                        type="tel"
                        required
                        className="w-full bg-transparent border-b-2 border-[#FEF9D0] text-[#FEF9D0] pb-2 focus:outline-none focus:border-[#E9F2CD] placeholder-[#FEF9D0] placeholder-opacity-60"
                        placeholder=""
                      />
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-2">
                        <img src={message} alt="message icon" className="w-5 h-5" />
                        <label className="text-[#FEF9D0] text-sm font-medium">YOUR MESSAGE*</label>
                      </div>
                      <textarea
                        required
                        rows={4}
                        className="w-full bg-transparent border-b-2 border-[#FEF9D0] text-[#FEF9D0] pb-2 focus:outline-none focus:border-[#E9F2CD] placeholder-[#FEF9D0] placeholder-opacity-60 resize-none"
                        placeholder=""
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-6">
                      <button
                        type="submit"
                        className="inline-flex items-center bg-transparent text-[#FEF9D0] px-8 py-3 rounded-full font-medium text-[16px] hover:bg-[#FEF9D0] hover:text-[#2F5B44] transition-all duration-300 transform hover:scale-105"
                        style={{ border: '2px solid #FEF9D0' }}
                      >
                        Submit
                        <img src={downarrow} alt="arrow" className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <Footer />
              </div>
  );
}

export default Home;

