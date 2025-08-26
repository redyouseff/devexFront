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
    <>
      {/* Mobile Menu and Overlay - Moved outside header for better z-index stacking */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 md:hidden"
          style={{ zIndex: 9998 }}
          onClick={toggleMenu}
        ></div>
      )}
      
      <div className={`fixed top-0 right-0 h-full w-64 bg-[#FEF9D0] transition-all duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden rounded-l-2xl`} style={{ zIndex: 9999 }}>
        {/* Close Button */}
        <button 
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-[#2F5B44] p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Menu Content */}
        <div className="flex flex-col h-full pt-16 px-8">
          {/* Navigation Links */}
          <div className="flex flex-col space-y-6">
            <Link 
              to="/" 
              className="text-[#2F5B44] hover:text-[#1D3D2D] transition-colors duration-200 text-xl font-medium"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-[#2F5B44] hover:text-[#1D3D2D] transition-colors duration-200 text-xl font-medium"
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-[#2F5B44] hover:text-[#1D3D2D] transition-colors duration-200 text-xl font-medium flex items-center"
            >
              Services
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link 
              to="/calculator" 
              className="text-[#2F5B44] hover:text-[#1D3D2D] transition-colors duration-200 text-xl font-medium"
            >
              Calculator
            </Link>
          </div>
          
          {/* Social Media Icons - Bottom */}
          <div className="mt-auto mb-10 flex justify-center space-x-4 w-full">
            <a href="https://wa.me/yourphonenumber" className="text-[#2F5B44] hover:text-[#1D3D2D]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a href="https://instagram.com/yourprofile" className="text-[#2F5B44] hover:text-[#1D3D2D]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="text-[#2F5B44] hover:text-[#1D3D2D]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <header className={`w-full py-4 px-6 fixed left-0 z-40 transition-all transform ${visible ? 'duration-500 ease-out translate-y-0' : 'duration-300 ease-in -translate-y-full'} ${visible ? 'top-8 opacity-100' : 'top-0 opacity-0'}`}>
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

        {/* Mobile Menu - Moved outside header */}
        </div>
    </header>
    </>
  );
}

export default Navbar;