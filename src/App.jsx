
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
             <Route path="/blogs/:id" element={<SpeceficBlogs />} />
             <Route path="/swiper" element={<swiper />} /> 
             <Route path="/TestCircleSwiper" element={<TestCircleSwiper />} />
           
           
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
