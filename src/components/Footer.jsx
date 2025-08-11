
import { Link } from 'react-router-dom';
import logo from "/images/home/Logo_Devext-removebg-preview 2.svg"

const Footer = () => {
  return (
    <footer className="bg-[#2F5B44] text-[#FEF9D0] py-16 px-6 border-t-2 border-[#FEF9D0]">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="mb-12">
          {/* Logo centered */}
          <div className="text-center mb-8">
            <img src={logo} alt="DEVEXT Logo" className="mx-auto h-16" />
          </div>
          
          {/* Tagline at top left */}
          <div className="mb-12">
            <h2 className="text-[24px] font-medium text-left">LET'S GROW YOUR BRAND</h2>
          </div>

          {/* Footer Links Grid */}
          <div className="grid md:grid-cols-3 gap-0">
            
            {/* Main Services Column */}
            <div className="text-center px-8 border-r border-[#FEF9D0] border-opacity-50">
              <h3 className="text-[18px] font-bold mb-6 uppercase">MAIN SERVICES</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/services" className="text-[14px] hover:text-[#E9F2CD] transition-colors">
                    CUSTOM WEB DESIGN
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-[14px] hover:text-[#E9F2CD] transition-colors">
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

            {/* Apps & Development Column */}
            <div className="text-center px-8 border-r border-[#FEF9D0] border-opacity-50">
              <h3 className="text-[18px] font-bold mb-6 uppercase">APPS & DEVELOPMENT</h3>
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

            {/* Company Column */}
            <div className="text-center px-8">
              <h3 className="text-[18px] font-bold mb-6 uppercase">COMPANY</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/about" className="text-[14px] hover:text-[#E9F2CD] transition-colors">
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-[14px] hover:text-[#E9F2CD] transition-colors">
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
        <div className="border-t border-[#FEF9D0] border-opacity-30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[12px]">
              ©2025 DEVEXT. ALL RIGHTS RESERVED
            </div>
            <div className="flex gap-8 text-[12px]">
              <Link to="/privacy" className="hover:text-[#E9F2CD] transition-colors">
                PRIVACY POLICY
              </Link>
              <Link to="/accessibility" className="hover:text-[#E9F2CD] transition-colors">
                ACCESSIBILITY
              </Link>
            </div>
            <div className="text-[12px]">
              CALL US : 01200064762
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;