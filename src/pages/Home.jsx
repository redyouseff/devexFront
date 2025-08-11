import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import icons from "/images/home/Frame 7.png"
import uparrow from "/images/home/Vector.svg"
import downarrow from "/images/home/Vector1.svg"
import icon1 from "/images/home/website mockup image 1.svg"
import icon2 from "/images/home/Vector2.png"
import icon3 from "/images/home/Devext Pattern 1 1.svg"
import downthird from "/images/home/Frame 16.svg"
import upthird from "/images/home/Frame 15.svg"
import rectangle from "/images/home/Rectangle 3.svg"

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

    

      {/* CTA Section */}
      <section className="bg-green-900 text-white py-16 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">
            CUSTOM WEB DESIGN PRICING FOR EACH<br />
            CLIENT'S OBJECTIVES
          </h2>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            Every website project is unique, and so are our pricing solutions. We offer 
            flexible pricing models that align with your specific requirements, timeline, 
            and budget to ensure maximum value for your investment.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors"
          >
            Calculate Your Website Cost
            <svg className="w-6 h-6 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;

