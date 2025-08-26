
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import uparrow from "/images/home/Vector.svg"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import dropdown from "/images/calculator/Vector.svg"
import line from "/images/calculator/Line 10.svg"
import lineList from "/images/calculator/Calculatur Line.svg"
import lineList2 from "/images/calculator/Calculatur Line2.svg"
import whatsapp from "/images/home/WhatsApp.svg"
import instagram from "/images/home/Instagram.svg"
import linkedin from "/images/home/Linkedin.svg"
import name from "/images/home/name.svg"
import email from "/images/home/email.svg"
import phone from "/images/home/phone.svg"
import message from "/images/home/message.svg"
import downarrow from "/images/home/Vector1.svg"
import line2 from "/images/home/Line 1.svg"
import icon2 from "/images/home/Vector2.png"
import downarrow2green from "/images/home/arrow Down.svg"

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

function Calculator() {
  // State for form inputs
  const [websiteType, setWebsiteType] = useState('Informational');
  const [platform, setPlatform] = useState('Wordpress');
  const [pages, setPages] = useState('5');
  // Get hourly rate based on platform
  const getHourlyRate = () => {
    if (platform === 'Custom Code') {
      return 20;
    }
    if (platform === 'Wordpress') {
      return 4;
    }
    return 15; // Shopify
  };
  const [showWebsiteTypeDropdown, setShowWebsiteTypeDropdown] = useState(false);
  const [showPlatformDropdown, setShowPlatformDropdown] = useState(false);
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);
  const [showCopywritingDropdown, setShowCopywritingDropdown] = useState(false);
  const [showMultiLanguageDropdown, setShowMultiLanguageDropdown] = useState(false);
  const [showMotionGraphicsDropdown, setShowMotionGraphicsDropdown] = useState(false);
 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  // State for calculator features
  const [features, setFeatures] = useState({
    uniqueDesign: false,
    onsiteOptimization: false,
    copywriting: { enabled: false, count: 1 },
    multiLanguage: { enabled: false, count: 1 },
    contentMigration: false,
    motionGraphics: { enabled: false, count: 1 },
    basicSearch: false,
    interactiveMap: false,
    eventsCalendar: false,
    chatFeature: false
  });

  // Base pricing based on number of pages and platform
  const getBasePricing = () => {
    if (platform === 'Wordpress') {
      return {
        '5': { hours: 20, price: 160 },
        '10': { hours: 25, price: 200 },
        '10 Or More': { hours: 30, price: 240 }
      };
    } else if (platform === 'Custom Code') {
      return {
        '5': { hours: 20, price: 1200 },
        '10': { hours: 25, price: 1600 },
        '10 Or More': { hours: 30, price: 1900 }
      };
    } else {
      // Shopify pricing
      return {
        '5': { hours: 20, price: 300 },
        '10': { hours: 25, price: 500 },
        '10 Or More': { hours: 30, price: 700 }
      };
    }
  };

  // Feature pricing (additional costs)
  const featurePricing = {
    uniqueDesign: { hours: 15, price: 300 },
    onsiteOptimization: { hours: 10, price: 100 },
    copywriting: { hours: 10, pricePerUnit: 100 },
    multiLanguage: { hours: 12, pricePerUnit: 120 },
    contentMigration: { hours: 8, price: 80 },
    motionGraphics: { hours: 40, pricePerUnit: 400 },
    basicSearch: { hours: 5, price: 50 },
    interactiveMap: { hours: 40, price: 400 },
    eventsCalendar: { hours: 10, price: 100 },
    chatFeature: { hours: 5, price: 50 }
  };

  // Calculate total price
  const calculateTotal = () => {
    // Base price from number of pages and platform
    const basePricing = getBasePricing();
    const basePrice = basePricing[pages];
    let totalHours = basePrice.hours;
    let totalPrice = basePrice.price;

    // Add additional feature costs
    Object.keys(features).forEach(key => {
      const feature = features[key];
      const pricing = featurePricing[key];
      
      if (typeof feature === 'boolean' && feature) {
        totalHours += pricing.hours;
        totalPrice += pricing.price;
      } else if (typeof feature === 'object' && feature.enabled) {
        if (key === 'copywriting' || key === 'multiLanguage') {
          totalHours += pricing.hours;
          totalPrice += pricing.pricePerUnit * feature.count;
        } else if (key === 'motionGraphics') {
          totalHours += pricing.hours;
          totalPrice += pricing.pricePerUnit * feature.count;
        }
      }
    });

    return { totalHours, totalPrice };
  };

  const { totalPrice } = calculateTotal();

  const toggleFeature = (featureName) => {
    setFeatures(prev => ({
      ...prev,
      [featureName]: typeof prev[featureName] === 'boolean' 
        ? !prev[featureName] 
        : { ...prev[featureName], enabled: !prev[featureName].enabled }
    }));
  };

  const updateFeatureCount = (featureName, count) => {
    setFeatures(prev => ({
      ...prev,
      [featureName]: { ...prev[featureName], count: parseInt(count) }
    }));
  };

  return(
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
                  <source src="https://res.cloudinary.com/dp5bcywc7/video/upload/v1755159216/Untitled_Video_2_ha9m8a.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

          {/* Content */}
          
        <div className="container mx-auto max-w-6xl relative z-20 px-4 sm:px-6 pt-10 sm:pt-20 flex justify-center -mt-20">
            <div className="max-w-4xl text-center">
            <h1 className="text-[30px] sm:text-[40px] lg:text-[40px] font-medium leading-tight mb-2 text-[#FFFFFF]">
            Free Website Cost Calculator
            </h1>
            
           
            <p className="text-base lg:text-[24px] sm:text-lg mb-8 leading-relaxed text-[#E9F2CD] opacity-80 max-w-2xl mx-auto whitespace-normal">
            Fill in the features below and calculate custom web design price <br /> 
            with our Free website cost calculator.
            </p>  
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-5">
             
              <Link 
                to="/services"
                className="bg-transparent border-2 border-[#E9F2CD] text-[#E9F2CD] px-6 py-3 rounded-full font-medium hover:bg-[#E9F2CD] hover:text-[#2F5B44] transition-colors flex items-center justify-center text-base group"
              >
               Speak With Our Experts
               <span className="relative w-4 h-4 ml-4 inline-block">
                 <img src={uparrow} alt="arrow" className="absolute inset-0 w-4 h-4 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
                 <img src={icon2} alt="arrow green" className="absolute inset-0 w-4 h-4 transition-opacity duration-200 opacity-0 group-hover:opacity-100" />
               </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
        <section className="py-16 bg-[#FEF9D0]">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            {/* Line Separator */}
            <div className="flex justify-center my-8 -mb-4">
              <img src={lineList} alt="Separator" className=" max-w-[80px] h-auto opacity-100" />
            </div>

            {/* Top Form Section */}
          <div className="bg-[#2F5B44] rounded-t-3xl p-6 sm:p-12 lg:p-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                              {/* Website Type */}
                <div>
                  <label className="block text-[#FEF9D0]  text-[18px] sm:text-[22px] lg:text-[25px] font-medium mb-2 ">Website Type</label>
                  <div className=" relative w-full bg-transparent border border-[#FEF9D0] rounded-full px-4 py-2 text-[#FEF9D0] text-sm">
                    <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowWebsiteTypeDropdown(!showWebsiteTypeDropdown)}>
                      <span>{websiteType}</span>
                      <img src={dropdown} alt="dropdown" className="w-4 h-4" />
                    </div>
                    
                    {showWebsiteTypeDropdown && (
                      <div className="-ml-4  absolute mt-2 w-full bg-[#2F5B44] border border-[#FEF9D0] rounded-3xl py-2 z-50">
                        <div 
                          className="rounded-xl px-4 py-2 hover:bg-[#FEF9D0] hover:text-[#2F5B44] cursor-pointer border-b border-dashed border-[#FEF9D0] border-opacity-30"
                          onClick={() => {
                            setWebsiteType('Informational');
                            setShowWebsiteTypeDropdown(false);
                          }}
                        >
                          Informational
                        </div>
                        <div 
                          className="rounded-xl px-4 py-2 hover:bg-[#FEF9D0] hover:text-[#2F5B44] cursor-pointer border-b border-dashed border-[#FEF9D0] border-opacity-30"
                          onClick={() => {
                            setWebsiteType('E-commerce');
                            setShowWebsiteTypeDropdown(false);
                          }}
                        >
                          E-commerce
                        </div>
                        <div 
                          className="rounded-xl px-4 py-2 hover:bg-[#FEF9D0] hover:text-[#2F5B44] cursor-pointer"
                          onClick={() => {
                            setWebsiteType('Portfolio');
                            setShowWebsiteTypeDropdown(false);
                          }}
                        >
                          Portfolio
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              {/* Platform */}
              <div>
                <label className="block text-[#FEF9D0]  font-medium mb-2  text-[18px] sm:text-[22px] lg:text-[25px] ">Platform</label>  
                <div className="relative w-full bg-transparent border border-[#FEF9D0] rounded-full px-4 py-2 text-[#FEF9D0] text-sm">
                  <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowPlatformDropdown(!showPlatformDropdown)}>
                    <span>{platform}</span>
                    <img src={dropdown} alt="dropdown" className="w-4 h-4" />
                  </div>
                  
                  {showPlatformDropdown && (
                    <div className="-ml-4 absolute mt-2 w-full bg-[#2F5B44] border border-[#FEF9D0] rounded-3xl py-2 z-50">
                      <div 
                        className="rounded-xl px-4 py-2 hover:bg-[#FEF9D0] hover:text-[#2F5B44] cursor-pointer border-b border-dashed border-[#FEF9D0] border-opacity-30"
                        onClick={() => {
                          setPlatform('Wordpress');
                          setShowPlatformDropdown(false);
                        }}
                      >
                        Wordpress
                      </div>
                      <div 
                        className="rounded-xl px-4 py-2 hover:bg-[#FEF9D0] hover:text-[#2F5B44] cursor-pointer border-b border-dashed border-[#FEF9D0] border-opacity-30"
                        onClick={() => {
                          setPlatform('Shopify');
                          setShowPlatformDropdown(false);
                        }}
                      >
                        Shopify
                      </div>
                      <div 
                        className="rounded-xl px-4 py-2 hover:bg-[#FEF9D0] hover:text-[#2F5B44] cursor-pointer"
                        onClick={() => {
                          setPlatform('Custom Code');
                          setShowPlatformDropdown(false);
                        }}
                      >
                        Custom Code
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* No. Of Pages */}
              <div>
                <label className="block text-[#FEF9D0] text-[18px] sm:text-[22px] lg:text-[25px] font-medium mb-2">No. Of Pages</label>
                <div className="relative w-full bg-transparent border border-[#FEF9D0] rounded-full px-4 py-2 text-[#FEF9D0] text-sm">
                  <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowPagesDropdown(!showPagesDropdown)}>
                    <span>{pages}</span>
                    <img src={dropdown} alt="dropdown" className="w-4 h-4" />
                  </div>
                  
                  {showPagesDropdown && (
                    <div className="-ml-4 absolute mt-2 w-full bg-[#2F5B44] border border-[#FEF9D0] rounded-3xl py-2 z-50">
                      <div 
                        className="rounded-xl px-4 py-2 hover:bg-[#FEF9D0] hover:text-[#2F5B44] cursor-pointer border-b border-dashed border-[#FEF9D0] border-opacity-30"
                        onClick={() => {
                          setPages('5');
                          setShowPagesDropdown(false);
                        }}
                      >
                        5
                      </div>
                      <div 
                        className="rounded-xl px-4 py-2 hover:bg-[#FEF9D0] hover:text-[#2F5B44] cursor-pointer border-b border-dashed border-[#FEF9D0] border-opacity-30"
                        onClick={() => {
                          setPages('10');
                          setShowPagesDropdown(false);
                        }}
                      >
                        10
                      </div>
                      <div 
                        className="rounded-xl px-4 py-2 hover:bg-[#FEF9D0] hover:text-[#2F5B44] cursor-pointer"
                        onClick={() => {
                          setPages('10 Or More');
                          setShowPagesDropdown(false);
                        }}
                      >
                        10 Or More
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Hourly Rate */}
              <div>
                <label className="block text-[#FEF9D0]  text-[18px] sm:text-[22px] lg:text-[25px] font-medium mb-2">Hourly Rate</label>
                <div className="w-full bg-transparent border border-[#FEF9D0] rounded-full px-4 py-2 text-[#FEF9D0] text-sm text-center">
                  ${getHourlyRate()}
                </div>
              </div>
            </div>
          </div>

          {/* Separator Line */}
          <div className="flex justify-center my-8">
            <img src={line} alt="Separator" className="w-full max-w-4xl h-auto opacity-60" />
          </div>

          {/* Calculator Features Section - Part 1 */}
          <div className="bg-[#2F5B44] rounded-b-3xl p-6 sm:p-8 ">
            {/* Header */}
            <div className="bg-[#FEF9D0] p-6 sm:p-8 mb-8 -mx-6 sm:-mx-8 -mt-[6rem] ">
              <h2 className="text-[#2F5B44] text-2xl font-medium mb-4 text-start text-[23px] -mt-4" style={{ fontFamily: 'Inter' }}>Informational Website Quote Calculator</h2>
              <div className="flex text-[#2F5B44] text-sm font-medium -mb-3 mt-1" style={{ fontFamily: 'Inter' }}>
                <div className="flex-1 text-[16px] sm:text-[20px]">Select:</div>
                <div className="w-20 text-center text-[16px] sm:text-[20px]">Hours</div>
                <div className="w-20 text-right text-[16px] sm:text-[20px] ml-4 sm:ml-6">Price</div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {/* Unique Design & Development */}
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center flex-1">
                  <button
                    onClick={() => toggleFeature('uniqueDesign')}
                    className={`w-12 h-6 rounded-full p-1 transition-colors ${
                      features.uniqueDesign ? 'bg-[#E9F2CD]' : 'bg-gray-400'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full transition-transform ${
                      features.uniqueDesign ? 'translate-x-6 bg-[#2F5B44]' : 'translate-x-0 bg-white'
                    }`}></div>
                  </button>
                  <span className="ml-4 text-[#FEF9D0] text-lg" style={{ fontFamily: 'Inter' }}>Unique Design & Development</span>
                </div>
                <div className="text-[#FEF9D0] text-center w-20 text-[15px]">
                  {featurePricing.uniqueDesign.hours}
                </div>
                <div className="text-[#FEF9D0] text-[20px] text-right w-20 ml-4 sm:ml-6">
                  ${featurePricing.uniqueDesign.price}
                </div>
              </div>

              {/* Line Separator */}
              <div className="flex justify-center my-4">
                <img src={line} alt="Separator" className="w-full max-w-[100] h-auto opacity-60" />
              </div>

              {/* Onsite Optimization */}
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center flex-1">
                  <button
                    onClick={() => toggleFeature('onsiteOptimization')}
                    className={`w-12 h-6 rounded-full p-1 transition-colors ${
                      features.onsiteOptimization ? 'bg-[#E9F2CD]' : 'bg-gray-400'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full transition-transform ${
                      features.onsiteOptimization ? 'translate-x-6 bg-[#2F5B44]' : 'translate-x-0 bg-white'
                    }`}></div>
                  </button>
                  <span className="ml-4 text-[#FEF9D0] text-lg" style={{ fontFamily: 'Inter' }}>Onsite Optimization</span>
                </div>
                <div className="text-[#FEF9D0]  text-center w-20 text-[15px]">
                  {featurePricing.onsiteOptimization.hours}
                </div>
                <div className="text-[#FEF9D0] text-[20px] text-right w-20 ml-4 sm:ml-6">
                  ${featurePricing.onsiteOptimization.price}
                </div>
              </div>

              {/* Line Separator */}
              <div className="flex justify-center my-4">
                <img src={line} alt="Separator" className="w-full max-w-[100] h-auto opacity-60" />
              </div>

              {/* Copywriting Page Count */}
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center flex-1">
                  <button
                    onClick={() => toggleFeature('copywriting')}
                    className={`w-12 h-6 rounded-full p-1 transition-colors ${
                      features.copywriting.enabled ? 'bg-[#E9F2CD]' : 'bg-gray-400'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full transition-transform ${
                      features.copywriting.enabled ? 'translate-x-6 bg-[#2F5B44]' : 'translate-x-0 bg-white'
                    }`}></div>
                  </button>
                  <span className="ml-4 text-[#FEF9D0] text-lg whitespace-normal sm:whitespace-nowrap break-words" style={{ fontFamily: 'Inter' }}>Copywriting Page Count</span>
                  {features.copywriting.enabled && (
                    <div className="relative ml-auto w-fit mt-2 sm:mt-0">
                      <div className="bg-transparent border border-[#FEF9D0] rounded-full px-4 py-2 text-[#FEF9D0] text-sm w-20 text-center cursor-pointer ml-auto" onClick={() => setShowCopywritingDropdown(!showCopywritingDropdown)}>
                        <div className="flex items-center justify-between">
                          <span>{features.copywriting.count}</span>
                          <img src={dropdown} alt="dropdown" className="w-4 h-4" />
                        </div>
                      </div>
                      
                      {showCopywritingDropdown && (
                        <div className="-ml-4 absolute mt-2 w-full bg-[#2F5B44] border border-[#FEF9D0] rounded-3xl py-2 z-50">
                          {[1,2,3,4,5,6,7,8,9,10].map((num, index) => (
                            <div 
                              key={num}
                              className={`rounded-xl px-4 py-2 hover:bg-[#FEF9D0] hover:text-[#2F5B44] cursor-pointer ${
                                index < 9 ? 'border-b border-dashed border-[#FEF9D0] border-opacity-30' : ''
                              }`}
                              onClick={() => {
                                updateFeatureCount('copywriting', num);
                                setShowCopywritingDropdown(false);
                              }}
                            >
                              {num}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="text-[#FEF9D0] text-center w-20 text-[15px]">
                  {featurePricing.copywriting.hours}
                </div>
                <div className="text-[#FEF9D0] text-[20px] text-right w-20 ml-4 sm:ml-6">
                  ${featurePricing.copywriting.pricePerUnit * features.copywriting.count}
                </div>  
              </div>

              {/* Line Separator */}
              <div className="flex justify-center my-4">
                <img src={line} alt="Separator" className="w-full max-w-[100] h-auto opacity-60" />
              </div>

              {/* Multi-Language Feature */}
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center flex-1">
                  <button
                    onClick={() => toggleFeature('multiLanguage')}
                    className={`w-12 h-6 rounded-full p-1 transition-colors ${
                      features.multiLanguage.enabled ? 'bg-[#E9F2CD]' : 'bg-gray-400'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full transition-transform ${
                      features.multiLanguage.enabled ? 'translate-x-6 bg-[#2F5B44]' : 'translate-x-0 bg-white'
                    }`}></div>
                  </button>
                  <span className="ml-4 text-[#FEF9D0] text-lg whitespace-normal sm:whitespace-nowrap break-words" style={{ fontFamily: 'Inter' }}>Multi-Language Feature (Per Language)</span>
                  {features.multiLanguage.enabled && (
                    <div className="relative ml-auto w-fit mt-2 sm:mt-0">
                      <div className="bg-transparent border border-[#FEF9D0] rounded-full px-4 py-2 text-[#FEF9D0] text-sm w-20 text-center cursor-pointer ml-auto" onClick={() => setShowMultiLanguageDropdown(!showMultiLanguageDropdown)}>
                        <div className="flex items-center justify-between">
                          <span>{features.multiLanguage.count}</span>
                          <img src={dropdown} alt="dropdown" className="w-4 h-4" />
                        </div>
                      </div>
                      
                      {showMultiLanguageDropdown && (
                        <div className="-ml-4 absolute mt-2 w-full bg-[#2F5B44] border border-[#FEF9D0] rounded-3xl py-2 z-50">
                          {[1,2,3,4,5].map((num, index) => (
                            <div 
                              key={num}
                              className={`rounded-xl px-4 py-2 hover:bg-[#FEF9D0] hover:text-[#2F5B44] cursor-pointer ${
                                index < 4 ? 'border-b border-dashed border-[#FEF9D0] border-opacity-30' : ''
                              }`}
                              onClick={() => {
                                updateFeatureCount('multiLanguage', num);
                                setShowMultiLanguageDropdown(false);
                              }}
                            >
                              {num}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="text-[#FEF9D0] text-center w-20 text-[15px]">
                  {featurePricing.multiLanguage.hours}
                </div>
                <div className="text-[#FEF9D0] text-[20px] text-right w-20 ml-4 sm:ml-6">
                  ${featurePricing.multiLanguage.pricePerUnit * features.multiLanguage.count}
                </div>
              </div>

              {/* Line Separator */}
              <div className="flex justify-center my-4">
                <img src={line} alt="Separator" className="w-full max-w-[100] h-auto opacity-60" />
              </div>

              {/* Content Migration */}
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center flex-1">
                  <button
                    onClick={() => toggleFeature('contentMigration')}
                    className={`w-12 h-6 rounded-full p-1 transition-colors ${
                      features.contentMigration ? 'bg-[#E9F2CD]' : 'bg-gray-400'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full transition-transform ${
                      features.contentMigration ? 'translate-x-6 bg-[#2F5B44]' : 'translate-x-0 bg-white'
                    }`}></div>
                  </button>
                  <span className="ml-4 text-[#FEF9D0] text-lg whitespace-normal sm:whitespace-nowrap" style={{ fontFamily: 'Inter' }}>Content Migration</span>
                </div>
                <div className="text-[#FEF9D0] text-center w-20 text-[15px]">
                  {featurePricing.contentMigration.hours}
                </div>
                <div className="text-[#FEF9D0] text-[20px] text-right w-20 ml-4 sm:ml-6">
                  ${featurePricing.contentMigration.price}
                </div>
              </div>

              {/* Line Separator */}
              <div className="flex justify-center my-4">
                <img src={line} alt="Separator" className="w-full max-w-[100] h-auto opacity-60" />
              </div>

              {/* Motion Graphics */}
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center flex-1">
                  <button
                    onClick={() => toggleFeature('motionGraphics')}
                    className={`w-12 h-6 rounded-full p-1 transition-colors ${
                      features.motionGraphics.enabled ? 'bg-[#E9F2CD]' : 'bg-gray-400'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full transition-transform ${
                      features.motionGraphics.enabled ? 'translate-x-6 bg-[#2F5B44]' : 'translate-x-0 bg-white'
                    }`}></div>
                  </button>
                  <span className="ml-4 text-[#FEF9D0] text-lg whitespace-normal sm:whitespace-nowrap" style={{ fontFamily: 'Inter' }}>Motion Graphics</span>
                  {features.motionGraphics.enabled && (
                    <div className="relative ml-auto w-fit mt-2 sm:mt-0">
                      <div className="bg-transparent border border-[#FEF9D0] rounded-full px-4 py-2 text-[#FEF9D0] text-sm w-20 text-center cursor-pointer ml-auto" onClick={() => setShowMotionGraphicsDropdown(!showMotionGraphicsDropdown)}>
                        <div className="flex items-center justify-between">
                          <span>{features.motionGraphics.count}</span>
                          <img src={dropdown} alt="dropdown" className="w-4 h-4" />
                        </div>
                      </div>
                      
                      {showMotionGraphicsDropdown && (
                        <div className="-ml-4 absolute mt-2 w-full bg-[#2F5B44] border border-[#FEF9D0] rounded-3xl py-2 z-50">
                          {[1,2,3,4,5].map((num, index) => (
                            <div 
                              key={num}
                              className={`rounded-xl px-4 py-2 hover:bg-[#FEF9D0] hover:text-[#2F5B44] cursor-pointer ${
                                index < 4 ? 'border-b border-dashed border-[#FEF9D0] border-opacity-30' : ''
                              }`}
                              onClick={() => {
                                updateFeatureCount('motionGraphics', num);
                                setShowMotionGraphicsDropdown(false);
                              }}
                            >
                              {num}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="text-[#FEF9D0] text-center w-20 text-[15px]">
                  {featurePricing.motionGraphics.hours}
                </div>
                <div className="text-[#FEF9D0] text-[20px] text-right w-20 ml-4 sm:ml-6">
                  ${featurePricing.motionGraphics.pricePerUnit * features.motionGraphics.count}
                </div>
              </div>

              {/* Line Separator */}
              <div className="flex justify-center my-4">
                <img src={line} alt="Separator" className="w-full max-w-[100] h-auto opacity-60" />
              </div>

              {/* Basic Search */}
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center flex-1">
                  <button
                    onClick={() => toggleFeature('basicSearch')}
                    className={`w-12 h-6 rounded-full p-1 transition-colors ${
                      features.basicSearch ? 'bg-[#E9F2CD]' : 'bg-gray-400'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full transition-transform ${
                      features.basicSearch ? 'translate-x-6 bg-[#2F5B44]' : 'translate-x-0 bg-white'
                    }`}></div>
                  </button>
                  <span className="ml-4 text-[#FEF9D0] text-lg whitespace-normal sm:whitespace-nowrap" style={{ fontFamily: 'Inter' }}>Basic Search</span>
                </div>
                <div className="text-[#FEF9D0] text-center w-20 text-[15px]">
                  {featurePricing.basicSearch.hours}
                </div>
                <div className="text-[#FEF9D0] text-[20px] text-right w-20 ml-4 sm:ml-6">
                  ${featurePricing.basicSearch.price}
                </div>
              </div>

              {/* Line Separator */}
              <div className="flex justify-center my-4">
                <img src={line} alt="Separator" className="w-full max-w-[100] h-auto opacity-60" />
              </div>

              {/* Interactive Map */}
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center flex-1">
                  <button
                    onClick={() => toggleFeature('interactiveMap')}
                    className={`w-12 h-6 rounded-full p-1 transition-colors ${
                      features.interactiveMap ? 'bg-[#E9F2CD]' : 'bg-gray-400'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full transition-transform ${
                      features.interactiveMap ? 'translate-x-6 bg-[#2F5B44]' : 'translate-x-0 bg-white'
                    }`}></div>
                  </button>
                  <span className="ml-4 text-[#FEF9D0] text-lg whitespace-normal sm:whitespace-nowrap" style={{ fontFamily: 'Inter' }}>Interactive Map</span>
                </div>
                <div className="text-[#FEF9D0] text-center w-20 text-[15px]">
                  {featurePricing.interactiveMap.hours}
                </div>
                <div className="text-[#FEF9D0] text-[20px] text-right w-20 ml-4 sm:ml-6">
                  ${featurePricing.interactiveMap.price}
                </div>
              </div>

              {/* Line Separator */}
              <div className="flex justify-center my-4">
                <img src={line} alt="Separator" className="w-full max-w-[100] h-auto opacity-60" />
              </div>

              {/* Events Calendar */}
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center flex-1">
                  <button
                    onClick={() => toggleFeature('eventsCalendar')}
                    className={`w-12 h-6 rounded-full p-1 transition-colors ${
                      features.eventsCalendar ? 'bg-[#E9F2CD]' : 'bg-gray-400'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full transition-transform ${
                      features.eventsCalendar ? 'translate-x-6 bg-[#2F5B44]' : 'translate-x-0 bg-white'
                    }`}></div>
                  </button>
                  <span className="ml-4 text-[#FEF9D0] text-lg whitespace-normal sm:whitespace-nowrap" style={{ fontFamily: 'Inter' }}>Events Calendar</span>
                </div>
                <div className="text-[#FEF9D0] text-center w-20 text-[15px]">
                  {featurePricing.eventsCalendar.hours}
                </div>
                <div className="text-[#FEF9D0] text-[20px] text-right w-20 ml-4 sm:ml-6">
                  ${featurePricing.eventsCalendar.price}
                </div>
              </div>

                {/* Line Separator */}
                <div className="flex justify-center my-4">
                <img src={line} alt="Separator" className="w-full max-w-[100] h-auto opacity-60" />
              </div>

              {/* Chat Feature */}
              <div className="flex items-center justify-between pb-4">   
                <div className="flex items-center flex-1">
                  <button
                    onClick={() => toggleFeature('chatFeature')}
                    className={`w-12 h-6 rounded-full p-1 transition-colors ${
                      features.chatFeature ? 'bg-[#E9F2CD]' : 'bg-gray-400'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full transition-transform ${
                      features.chatFeature ? 'translate-x-6 bg-[#2F5B44]' : 'translate-x-0 bg-white'
                    }`}></div>
                  </button>
                  <span className="ml-4 text-[#FEF9D0] text-lg whitespace-normal sm:whitespace-nowrap" style={{ fontFamily: 'Inter' }}>Chat Feature</span>
                </div>
                <div className="text-[#FEF9D0] text-center w-20 text-[15px]">
                  {featurePricing.chatFeature.hours}
                </div>
                <div className="text-[#FEF9D0]  text-[20px] text-right w-20 ml-4 sm:ml-6">
                  ${featurePricing.chatFeature.price}  
                </div>
              </div>
            </div>

           

            {/* Total Section */}
            <div className="mt-8 pt-12 pb-8 border-t-2 border-[#FEF9D0] border-opacity-30 ">
              <div className="flex items-center justify-between">      
                <div className="text-[#FEF9D0] text-lg font-medium m " style={{ fontFamily: 'Inter' }}>Estimated Price:</div>
                <div className="flex items-center space-x-6">
                   {/* <div className="text-[#FEF9D0] text-lg font-medium mr-[6rem]">{totalHours}</div> */}
                  <div className="text-[#FEF9D0] text-2xl font-bold mr-[2rem]">${totalPrice}</div>
                </div>
              </div>
            </div>
            
          </div>   
           {/* Line Separator */}   
           <div className="flex justify-center -mt-[1rem]">
              <img src={lineList2} alt="Separator" className="max-w-[80px] h-auto opacity-100" />
            </div>
        </div>
      </section>



      {/* eighth Section - Contact Form */}
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
          <img src={line2} alt="line" className="w-24 sm:w-32 order-1 sm:order-none" />
          <span className="text-[#FEF9D0] text-base sm:text-lg font-medium order-2 sm:order-none mr-[4rem]">FOLLOW US</span>
          <div className="flex gap-4 sm:gap-6 order-3 sm:order-none mr-[3rem]">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src={whatsapp} alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src={instagram} alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src={linkedin} alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6" />
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
            <img src={name} alt="name icon" className="w-5 h-5" />
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
            <img src={name} alt="company icon" className="w-5 h-5" />
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
            <img src={email} alt="email icon" className="w-5 h-5" />
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
            <img src={phone} alt="phone icon" className="w-5 h-5" />
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
            <img src={message} alt="message icon" className="w-5 h-5" />
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
            <span className="relative w-4 h-4 ml-2 inline-block">
              <img src={downarrow} alt="arrow" className="absolute inset-0 w-4 h-4 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
              <img src={downarrow2green} alt="arrow green" className="absolute inset-0 w-4 h-4 transition-opacity duration-200 opacity-0 group-hover:opacity-100" />
            </span>
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

      {/* Footer */}
      <Footer />
      </div>
    </>
  );
}

export default Calculator;