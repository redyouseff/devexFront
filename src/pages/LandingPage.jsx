import logo from "/images/commingSoon/Logo_Devext-removebg-preview 2.svg";
import x from "/images/commingSoon/Untitled design (12) 1.svg";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function LandingPage() {
  return (
   <>
    <div className="coming-soon-container">
      {/* Navigation */}
  
      <div className="content">
        <div className="logo-section">
          <img src={logo} alt="DEVEXT Logo" className="logo" />
        </div>
        
        <div className="coming-soon-text">
          <h1>COMING SOON<span className="dots">
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </span></h1>
        </div>
      </div>
      
      <div className="image-section">
        <img src={x} alt="Design Element" className="design-image" />
      </div>
    </div>
   </>
  )
}

export default LandingPage
