
import { Link } from 'react-router-dom';
import logo from "/images/home/Logo_Devext-removebg-preview 2.svg"

const Footer = () => {
  return (
    <footer className="bg-[#2F5B44] text-[#FEF9D0] py-8 sm:py-12 px-4 sm:px-6 border-t-2 border-[#FEF9D0] ">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="mb-8 sm:mb-12">
          {/* Logo centered */}
          <div className="text-center mb-6 sm:mb-8">
            <img src={logo} alt="DEVEXT Logo" className="mx-auto h-12 sm:h-16" />
          </div>
          
          {/* Tagline at top left */}
          <div className="mb-8 sm:mb-12 text-center md:text-left">
            <h2 className="text-[20px] sm:text-[24px] font-medium">LET'S GROW YOUR BRAND</h2> 
          </div>

          {/* Footer Links Grid */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-0">
            
            {/* Main Services Column */}
            <div className="text-start px-4 sm:px-8">
              <h3 className="text-[16px] sm:text-[18px] font-bold mb-4 sm:mb-6 uppercase">MAIN SERVICES</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/services" className="text-[14px] hover:text-[#E9F2CD] transition-colors">
                    CUSTOM WEB DESIGN
                  </Link>
                </li>
                <li>
                  <Link to="/services"  className="text-[14px] hover:text-[#E9F2CD] transition-colors">
                    ECOMMERCE DESIGN
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-[14px] hover:text-[#E9F2CD] transition-colors">
                    SHOPIFY WEBSITE DESIGN
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-[14px] hover:text-[#E9F2CD] transition-colors">
                    WORDPRESS WEB DESIGN
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-[14px] hover:text-[#E9F2CD] transition-colors">
                    DIGITAL MARKETING
                  </Link>
                </li>
              </ul>
            </div>

            {/* Vertical Line 1 - Between Col 1 and 2 */}
            <div className="hidden lg:block absolute left-[32%]  top-0 bottom-0 w-px bg-[#FEF9D0] opacity-50"></div>

            {/* Apps & Development Column */}  
            <div className=" lg:text-start px-4 sm:px-8 lg:ml-[4.4rem] sm:-ml-[14rem]">   
              <h3 className="text-[16px] sm:text-[18px] font-bold mb-4 sm:mb-6 uppercase ">APPS & DEVELOPMENT</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/calculator" className="text-[14px] hover:text-[#E9F2CD] transition-colors">
                    WEBSITE COST CALCULATOR
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-[14px] hover:text-[#E9F2CD] transition-colors">
                    CUSTOM WEB DEVELOPMENT
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-[14px] hover:text-[#E9F2CD] transition-colors">
                    APP DEVELOPMENT
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-[14px] hover:text-[#E9F2CD] transition-colors">
                    ECOMMERCE DEVELOPMENT
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-[14px] hover:text-[#E9F2CD] transition-colors">
                    WOOCOMMERCE DEVELOPMENT
                  </Link>
                </li>
              </ul>
            </div>

            {/* Vertical Line 2 - Between Col 2 and 3 */}
            <div className="hidden lg:block absolute left-[72%] top-0 bottom-0 w-px bg-[#FEF9D0]  opacity-50"></div>

            {/* Company Column */}
            <div className="lg:text-start   px-4 sm:px-8  lg:ml-[12rem] sm:-ml-[14rem]  whitespace-nowrap ">
              <h3 className="text-[32px] sm:text-[18px] font-bold mb-4 sm:mb-6 uppercase">COMPANY</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/about" className="text-[14px] hover:text-[#E9F2CD] transition-colors">
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-[14px] hover:text-[#E9F2CD] transition-colors whitespace-nowrap">
                    DIGITAL TRENDS
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-[14px] hover:text-[#E9F2CD] transition-colors">
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}   
        <div className="border-t border-[#FEF9D0] border-opacity-30 pt-3 sm:pt-4 -mb-[2rem]  ">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <div className="text-[11px] sm:text-[12px] order-2 sm:order-1">
              ©2025 DEVEXT. ALL RIGHTS RESERVED
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-[11px] sm:text-[12px] order-1 sm:order-2">
              <Link to="/privacy" className="hover:text-[#E9F2CD] transition-colors">
                PRIVACY POLICY
              </Link>
              <Link to="/accessibility" className="hover:text-[#E9F2CD] transition-colors">
                ACCESSIBILITY
              </Link>
            </div>
            <div className="text-[11px] sm:text-[12px] order-3">     
              CALL US : 01200064762
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;