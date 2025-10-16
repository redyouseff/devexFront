
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Calculator from './pages/Calculator';
import Contact from './pages/Contact';
import Blogs from './pages/blogs';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import SpeceficBlogs from './pages/SpeceficBlogs';
import TestCircleSwiper from './components/testCircleSwiper';
import EcommerceDesign from './pages/EcommerceDesign';
import CustomWebDesignServices from './pages/CustomWebDesignServices';
import ImageSlider from './components/EffectCard/EffectCard';
import ImageSlider2 from './components/EffectCard/test';
import RedesignservicesintheUAE from './pages/blogs/RedesignservicesintheUAE';
import EcommerceWebsiteDevelopmentUAE from './pages/blogs/EcommerceWebsiteDevelopmentUAE';
import ProfessionalwebsitedesignUAE from './pages/blogs/professionalwebsitedesignUAE';
import WebdesigncompanyDubai from './pages/blogs/webdesigncompanyDubai';
import SeoServicesInDubai from './pages/blogs/SeoServicesInDubai';
import UIUXdesigninDubai from './pages/blogs/UIUXdesigninDubai';
import MobileAppDevelopmentUae from './pages/blogs/MobileAppDevelopmentUae';
import CustomWebDevelopment from './pages/CustomWebDevelopment';







function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/home" element={<Home />} /> */}
             <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/calculator" element={<Calculator />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/blogs" element={<Blogs />} />
             {/* <Route path="/blogs/:id" element={<SpeceficBlogs />} /> */}
             <Route path="/blogs/RedesignservicesintheUAE" element={<RedesignservicesintheUAE />} />
             <Route path="/blogs/EcommerceWebsiteDevelopmentUAE" element={<EcommerceWebsiteDevelopmentUAE />} />
             <Route path="/blogs/ProfessionalwebsitedesignUAE" element={<ProfessionalwebsitedesignUAE />} />
             <Route path="/blogs/WebdesigncompanyDubai"  element={<WebdesigncompanyDubai />} />
             <Route path="/blogs/SeoServicesInDubai"  element={<SeoServicesInDubai   />} />    
             <Route path="/blogs/UIUXdesigninDubai" element={<UIUXdesigninDubai />} />
             <Route path="/blogs/MobileAppDevelopmentUae" element={<MobileAppDevelopmentUae />} />
     
            
             
             <Route path="/ecommerce-design" element={<EcommerceDesign />} />
             <Route path="/swiper" element={<swiper />} /> 
             <Route path="/TestCircleSwiper" element={<TestCircleSwiper />} />
             <Route path="/CustomWebDesignServices" element={<CustomWebDesignServices />} />
             <Route path="/CustomWebDevelopment" element={<CustomWebDevelopment />} />
            
             

         
   
            
           
           
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
