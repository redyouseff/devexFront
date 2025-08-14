
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import uparrow from "/images/home/Vector.svg"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import dropdown from "/images/calculator/Vector.svg"
import line from "/images/calculator/Line 10.svg"
import lineList from "/images/calculator/Calculatur Line.svg"
import lineList2 from "/images/calculator/Calculatur Line2.svg"

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
  const [hourlyRate] = useState(10);

  // State for calculator features
  const [features, setFeatures] = useState({
    uniqueDesign: true,
    onsiteOptimization: true,
    copywriting: { enabled: true, count: 1 },
    multiLanguage: { enabled: true, count: 1 },
    contentMigration: true,
    motionGraphics: { enabled: true, count: 1 },
    basicSearch: true,
    interactiveMap: true,
    eventsCalendar: true,
    chatFeature: true
  });

  // Feature pricing
  const featurePricing = {
    uniqueDesign: { hours: 15, price: 75 },
    onsiteOptimization: { hours: 10, price: 100 },
    copywriting: { hours: 10, pricePerUnit: 50 },
    multiLanguage: { hours: 12, pricePerUnit: 50 },
    contentMigration: { hours: 8, price: 40 },
    motionGraphics: { hours: 40, pricePerUnit: 400 },
    basicSearch: { hours: 5, price: 25 },
    interactiveMap: { hours: 40, price: 400 },
    eventsCalendar: { hours: 10, price: 100 },
    chatFeature: { hours: 5, price: 50 }
  };

  // Calculate total price
  const calculateTotal = () => {
    let totalHours = 0;
    let totalPrice = 0;

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

  const { totalHours, totalPrice } = calculateTotal();

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
            
           
            <p className="text-base lg:text-[24px] sm:text-lg mb-8 leading-relaxed text-[#E9F2CD] opacity-80 max-w-2xl mx-auto whitespace-nowrap">
            Fill in the features below and calculate custom web design price <br /> 
            with our Free website cost calculator.
            </p>  
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-5">
             
              <Link 
                to="/services"
                className="bg-transparent border-2 border-[#E9F2CD] text-[#E9F2CD] px-6 py-3 rounded-full font-medium hover:bg-[#E9F2CD] hover:text-[#2F5B44] transition-colors flex items-center justify-center text-base"
              >
               Speak With Our Experts
                <img src={uparrow} alt="arrow" className="w-4 h-4 ml-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
        <section className="py-16 bg-[#FEF9D0]">
          <div className="container mx-auto max-w-7xl px-6">
            {/* Line Separator */}
            <div className="flex justify-center my-8 -mb-4">
              <img src={lineList} alt="Separator" className=" max-w-[80] h-auto opacity-100" />
            </div>

            {/* Top Form Section */}
          <div className="bg-[#2F5B44] rounded-t-3xl p-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                              {/* Website Type */}
                <div>
                  <label className="block text-[#FEF9D0]  text-[25px] font-medium mb-2 ">Website Type</label>
                  <select 
                    value={websiteType}
                    onChange={(e) => setWebsiteType(e.target.value)}
                    className="w-full bg-transparent border border-[#FEF9D0] rounded-full px-4 py-2 text-[#FEF9D0] text-sm focus:outline-none focus:border-[#E9F2CD] focus:ring-0 focus:ring-offset-0"
                    style={{ borderRadius: '9999px' }}
                  >
                    <option value="Informational" className="bg-[#2F5B44] bg-opacity-80 text-[#FEF9D0] rounded-full">Informational</option>
                    <option value="E-commerce" className="bg-[#2F5B44] bg-opacity-80 text-[#FEF9D0] rounded-full">E-commerce</option>
                    <option value="Portfolio" className="bg-[#2F5B44] bg-opacity-80 text-[#FEF9D0] rounded-full">Portfolio</option>
                  </select>
                </div>

              {/* Platform */}
              <div>
                <label className="block text-[#FEF9D0]  font-medium mb-2  text-[25px] ">Platform</label>
                <select 
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full bg-transparent border border-[#FEF9D0] rounded-full px-4 py-2 text-[#FEF9D0] text-sm focus:outline-none focus:border-[#E9F2CD]"
                >
                  <option value="Wordpress" className="bg-[#2F5B44] text-[#FEF9D0]">Wordpress</option>
                  <option value="React" className="bg-[#2F5B44] text-[#FEF9D0]">React</option>
                  <option value="Custom" className="bg-[#2F5B44] text-[#FEF9D0]">Custom</option>
                </select>
              </div>

              {/* No. Of Pages */}
              <div>
                <label className="block text-[#FEF9D0] text-[25px] font-medium mb-2">No. Of Pages</label>
                <select 
                  value={pages}
                  onChange={(e) => setPages(e.target.value)}
                  className="w-full bg-transparent border border-[#FEF9D0] rounded-full px-4 py-2 text-[#FEF9D0] text-sm focus:outline-none focus:border-[#E9F2CD]"
                >
                  <option value="5" className="bg-[#2F5B44] text-[#FEF9D0]">5</option>
                  <option value="10" className="bg-[#2F5B44] text-[#FEF9D0]">10</option>
                  <option value="15" className="bg-[#2F5B44] text-[#FEF9D0]">15</option>
                  <option value="20" className="bg-[#2F5B44] text-[#FEF9D0]">20+</option>
                </select>
              </div>

              {/* Hourly Rate */}
              <div>
                <label className="block text-[#FEF9D0]  text-[25px] font-medium mb-2">Hourly Rate</label>
                <div className="w-full bg-transparent border border-[#FEF9D0] rounded-full px-4 py-2 text-[#FEF9D0] text-sm text-center">
                  ${hourlyRate}
                </div>
              </div>
            </div>
          </div>

          {/* Separator Line */}
          <div className="flex justify-center my-8">
            <img src={line} alt="Separator" className="w-full max-w-4xl h-auto opacity-60" />
          </div>

          {/* Calculator Features Section - Part 1 */}
          <div className="bg-[#2F5B44] rounded-b-3xl p-8 ">
            {/* Header */}
            <div className="bg-[#FEF9D0] p-8 mb-8 -mx-8 -mt-[6rem] ">
              <h2 className="text-[#2F5B44] text-2xl font-medium mb-4 text-start text-[23px] -mt-4" style={{ fontFamily: 'Inter' }}>Informational Website Quote Calculator</h2>
              <div className="flex text-[#2F5B44] text-sm font-medium -mb-3 mt-1" style={{ fontFamily: 'Inter' }}>
                <div className="flex-1 text-[20px]">Select:</div>
                <div className="w-20 text-center text-[20px]">Hours</div>
                <div className="w-20 text-right text-[20px] ml-6 mr-10 ml-20">Price</div>
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
                  <span className="ml-4 text-[#FEF9D0] text-sm" style={{ fontFamily: 'Inter' }}>Unique Design & Development</span>
                </div>
                <div className="text-[#FEF9D0] text-center w-20 text-[20px]">
                  {features.uniqueDesign ? featurePricing.uniqueDesign.hours : 0}
                </div>
                <div className="text-[#FEF9D0] text-sm text-right w-20 ml-6 mr-10 ml-20">
                  ${features.uniqueDesign ? featurePricing.uniqueDesign.price : 0}
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
                  <span className="ml-4 text-[#FEF9D0] text-sm" style={{ fontFamily: 'Inter' }}>Onsite Optimization</span>
                </div>
                <div className="text-[#FEF9D0]  text-center w-20 text-[20px]">
                  {features.onsiteOptimization ? featurePricing.onsiteOptimization.hours : 0}
                </div>
                <div className="text-[#FEF9D0] text-sm text-right w-20 ml-6 mr-10 ml-20">
                  ${features.onsiteOptimization ? featurePricing.onsiteOptimization.price : 0}
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
                  <span className="ml-4 text-[#FEF9D0] text-sm whitespace-nowrap" style={{ fontFamily: 'Inter' }}>Copywriting Page Count</span>
                  {features.copywriting.enabled && (
                    <div className="relative">
                      <select
                        value={features.copywriting.count}
                        onChange={(e) => updateFeatureCount('copywriting', e.target.value)}
                        className="ml-4 bg-transparent border border-[#FEF9D0] rounded-3xl px-3 py-2 text-[#FEF9D0] text-sm w-20 text-left ml-[25rem] appearance-none pr-8"
                      >
                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                          <option key={num} value={num} className="bg-[#2F5B44] text-[#FEF9D0] ">{num}</option>
                        ))}
                      </select>
                      <img src={dropdown} alt="dropdown" className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
                    </div>
                  )}
                </div>
                <div className="text-[#FEF9D0] text-center w-20 text-[20px]">
                  {features.copywriting.enabled ? featurePricing.copywriting.hours : 0}
                </div>
                <div className="text-[#FEF9D0] text-sm text-right w-20 ml-6 mr-10 ml-20">
                  ${features.copywriting.enabled ? featurePricing.copywriting.pricePerUnit * features.copywriting.count : 0}
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
                  <span className="ml-4 text-[#FEF9D0] text-sm whitespace-nowrap" style={{ fontFamily: 'Inter' }}>Multi-Language Feature (Per Language)</span>
                  {features.multiLanguage.enabled && (
                    <div className="relative">
                      <select
                        value={features.multiLanguage.count}
                        onChange={(e) => updateFeatureCount('multiLanguage', e.target.value)}
                        className="ml-4 bg-transparent border border-[#FEF9D0] rounded-3xl px-3 py-2 text-[#FEF9D0] text-sm w-20 text-left ml-[18.6rem] appearance-none pr-8"
                      >
                        {[1,2,3,4,5].map(num => (
                          <option key={num} value={num} className="bg-[#2F5B44] text-[#FEF9D0]">{num}</option>
                        ))}
                      </select>
                      <img src={dropdown} alt="dropdown" className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
                    </div>
                  )}
                </div>
                <div className="text-[#FEF9D0] text-center w-20 text-[20px]">
                  {features.multiLanguage.enabled ? featurePricing.multiLanguage.hours : 0}
                </div>
                <div className="text-[#FEF9D0] text-sm text-right w-20 ml-6 mr-10 ml-20">
                  ${features.multiLanguage.enabled ? featurePricing.multiLanguage.pricePerUnit * features.multiLanguage.count : 0}
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
                  <span className="ml-4 text-[#FEF9D0] text-sm" style={{ fontFamily: 'Inter' }}>Content Migration</span>
                </div>
                <div className="text-[#FEF9D0] text-center w-20 text-[20px]">
                  {features.contentMigration ? featurePricing.contentMigration.hours : 0}
                </div>
                <div className="text-[#FEF9D0] text-sm text-right w-20 ml-6 mr-10 ml-20">
                  ${features.contentMigration ? featurePricing.contentMigration.price : 0}
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
                  <span className="ml-4 text-[#FEF9D0] text-sm mr-14" style={{ fontFamily: 'Inter' }}>Motion Graphics</span>
                  {features.motionGraphics.enabled && (
                    <div className="relative">
                      <select
                        value={features.motionGraphics.count}
                        onChange={(e) => updateFeatureCount('motionGraphics', e.target.value)}
                        className="ml-4 bg-transparent border border-[#FEF9D0] rounded-3xl px-3 py-2 text-[#FEF9D0] text-sm w-20 text-left ml-[24.9rem] appearance-none pr-8"
                      >
                        {[1,2,3,4,5].map(num => (
                          <option key={num} value={num} className="bg-[#2F5B44] text-[#FEF9D0]">{num}</option>
                        ))}
                      </select>
                      <img src={dropdown} alt="dropdown" className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
                    </div>
                  )}
                </div>
                <div className="text-[#FEF9D0] text-center w-20 text-[20px]">
                  {features.motionGraphics.enabled ? featurePricing.motionGraphics.hours : 0}
                </div>
                <div className="text-[#FEF9D0] text-sm text-right w-20 ml-6 mr-10 ml-20">
                  ${features.motionGraphics.enabled ? featurePricing.motionGraphics.pricePerUnit * features.motionGraphics.count : 0}
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
                  <span className="ml-4 text-[#FEF9D0] text-sm" style={{ fontFamily: 'Inter' }}>Basic Search</span>
                </div>
                <div className="text-[#FEF9D0] text-center w-20 text-[20px]">
                  {features.basicSearch ? featurePricing.basicSearch.hours : 0}
                </div>
                <div className="text-[#FEF9D0] text-sm text-right w-20 ml-6 mr-10 ml-20">
                  ${features.basicSearch ? featurePricing.basicSearch.price : 0}
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
                  <span className="ml-4 text-[#FEF9D0] text-sm" style={{ fontFamily: 'Inter' }}>Interactive Map</span>
                </div>
                <div className="text-[#FEF9D0] text-center w-20 text-[20px]">
                  {features.interactiveMap ? featurePricing.interactiveMap.hours : 0}
                </div>
                <div className="text-[#FEF9D0] text-sm text-right w-20 ml-6 mr-10 ml-20">
                  ${features.interactiveMap ? featurePricing.interactiveMap.price : 0}
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
                  <span className="ml-4 text-[#FEF9D0] text-sm" style={{ fontFamily: 'Inter' }}>Events Calendar</span>
                </div>
                <div className="text-[#FEF9D0] text-center w-20 text-[20px]">
                  {features.eventsCalendar ? featurePricing.eventsCalendar.hours : 0}
                </div>
                <div className="text-[#FEF9D0] text-sm text-right w-20 ml-6 mr-10 ml-20">
                  ${features.eventsCalendar ? featurePricing.eventsCalendar.price : 0}
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
                  <span className="ml-4 text-[#FEF9D0] text-sm" style={{ fontFamily: 'Inter' }}>Chat Feature</span>
                </div>
                <div className="text-[#FEF9D0] text-center w-20 text-[20px]">
                  {features.chatFeature ? featurePricing.chatFeature.hours : 0}
                </div>
                <div className="text-[#FEF9D0] text-sm text-right w-20 ml-6 mr-10 ml-20">
                  ${features.chatFeature ? featurePricing.chatFeature.price : 0}  
                </div>
              </div>
            </div>

           

            {/* Total Section */}
            <div className="mt-8 pt-12 pb-8 border-t-2 border-[#FEF9D0] border-opacity-30 ">
              <div className="flex items-center justify-between">
                <div className="text-[#FEF9D0] text-lg font-medium m " style={{ fontFamily: 'Inter' }}>Estimated Price:</div>
                <div className="flex items-center space-x-6">
                                       <div className="text-[#FEF9D0] text-lg font-medium mr-36">{totalHours}</div>
                  <div className="text-[#FEF9D0] text-2xl font-bold">${totalPrice}</div>
                </div>
              </div>
            </div>
            
          </div>   
           {/* Line Separator */}
           <div className="flex justify-center -mt-[1rem]">
              <img src={lineList2} alt="Separator" className="max-w-[80] h-auto opacity-100" />
            </div>
        </div>
      </section>

      <Footer />
</div>
    </>
  );
}

export default Calculator;
