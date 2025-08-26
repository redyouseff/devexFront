import { Link } from 'react-router-dom';
import logo from "/images/navbar/Logo_Devext-removebg-preview 1.png";
import down from "/images/navbar/Vector.png";
import downarrow2green from "/images/home/arrow Down.svg"
import { useState, useEffect } from 'react';

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Get initial scroll position with iOS compatibility
    const getScrollPosition = () => {
      return window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    };

    const handleScroll = () => {
      const currentScrollPos = getScrollPosition();
      const scrollThreshold = 100; // Reduced threshold for better iOS experience
      const isNearTop = currentScrollPos <= scrollThreshold;
      const isScrollingUp = currentScrollPos < prevScrollPos;
      
      // More responsive logic for iOS
      if (isNearTop) {
        setVisible(true);
      } else if (isScrollingUp) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    // Add passive listener for better iOS performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call to set correct initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
         <header className={`w-full py-4 px-6 fixed left-0 z-50 transition-all transform ${visible ? 'duration-500 ease-out translate-y-0' : 'duration-300 ease-in -translate-y-full'} ${visible ? 'top-8 opacity-100' : 'top-0 opacity-0'}`}>
      {/* Glassmorphism effect */}
      <div className="absolute inset-0 backdrop-blur-[1px]"></div>
      
      <div className="relative z-10 flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo - Left Side */}
        <div className="flex items-center md:ml-32">
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="DEVEXT Logo" 
              className="h-14 w-auto hover:opacity-80 transition-opacity duration-200"
            />
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-yellow-100 p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-between w-[400px] absolute left-1/2 transform -translate-x-1/2">
          <Link 
            to="/" 
            className="text-yellow-100 hover:text-yellow-200 transition-colors duration-200"
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontStyle: 'Medium',
              fontSize: '18px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            Home
          </Link>
          
          <Link 
            to="/about" 
            className="text-yellow-100 hover:text-yellow-200 transition-colors duration-200"
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontStyle: 'Medium',
              fontSize: '18px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            About
          </Link>

          <div className="relative group">
            <Link 
              to="/services" 
              className="text-yellow-100 hover:text-yellow-200 transition-colors duration-200 flex items-center"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontStyle: 'Medium',
                fontSize: '18px',
                lineHeight: '100%',
                letterSpacing: '0%'
              }}
            >
              Services
              <svg className="w-4 h-4 ml-1 transform group-hover:rotate-90 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <Link 
            to="/calculator" 
            className="text-yellow-100 hover:text-yellow-200 transition-colors duration-200"
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontStyle: 'Medium',
              fontSize: '18px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            Calculator
          </Link>
        </nav>
        
        {/* Contact Us Button - Desktop */}
        <div className="hidden md:flex items-center md:mr-32">
          <Link 
            to="/contact" 
            className="border-2 border-yellow-100 text-yellow-100 px-6 py-3 rounded-full hover:bg-yellow-100 hover:text-green-800 transition-all duration-200 flex items-center text-xl group"
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontStyle: 'Medium',
              fontSize: '18px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            Contact Us
            <span className="relative w-4 h-4 ml-2 inline-block">
              <img src={down} alt="down arrow" className="absolute inset-0 w-4 h-4 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
              <img src={downarrow2green} alt="down arrow green" className="absolute inset-0 w-4 h-4 transition-opacity duration-200 opacity-0 group-hover:opacity-100" />
            </span>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 right-0 bg-green-800 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} md:hidden`}>
          <div className="px-4 py-3 space-y-4">
            <Link 
              to="/" 
              className="block text-yellow-100 hover:text-yellow-200 transition-colors duration-200"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '18px'
              }}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block text-yellow-100 hover:text-yellow-200 transition-colors duration-200"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '18px'
              }}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="block text-yellow-100 hover:text-yellow-200 transition-colors duration-200"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '18px'
              }}
            >
              Services
            </Link>
            <Link 
              to="/calculator" 
              className="block text-yellow-100 hover:text-yellow-200 transition-colors duration-200"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '18px'
              }}
            >
              Calculator
            </Link>
            <Link 
              to="/contact" 
              className="block text-yellow-100 hover:text-yellow-200 transition-colors duration-200"
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '18px'
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
        </div>
    </header>
  );
}

export default Navbar;