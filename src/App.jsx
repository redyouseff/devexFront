
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Calculator from './pages/Calculator';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import TestCircleSwiper from './components/testCircleSwiper';
import EcommerceDesign from './pages/EcommerceDesign';
import CustomWebDesignServices from './pages/CustomWebDesignServices';
import CustomWebDevelopment from './pages/CustomWebDevelopment';
import AppDevelopment from './pages/AppDevelopment';
import DigitalTrends from './pages/DigitalTrends';
import { Login } from './pages/admin/Login';
import { AllBlogs } from './pages/admin/AllBlogs';
import { CreateBlog } from './pages/admin/CreateBlog';
import { ProtectedRouteHook } from './Hook/auth/ProtectedRouteHook';
import { ProductRoute } from './Hook/auth/ProductRoute';
import { EditeBlog } from './pages/admin/EditeBlog';
import { Blog } from './pages/blogs/Blog';
import { NotFound } from './pages/NotFound';
import { LandingPage } from './pages/campaign/LandingPage';
import { EgyptionLandingPage } from './pages/campaign/EgyptionLandingPage';

function MainLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

function App() {

  const [, , isAdmin, isLoading]=ProtectedRouteHook();
 
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/contact" element={<Contact />} />
            
              <Route path="/DigitalTrends/:canonical" element={<Blog />} />
              <Route path="/DigitalTrends/" element={<DigitalTrends />} />


              <Route path="/ecommerce-design" element={<EcommerceDesign />} />
              {/* <Route path="/swiper" element={<swiper />} /> */}
              <Route path="/TestCircleSwiper" element={<TestCircleSwiper />} />
              <Route path="/CustomWebDesignServices" element={<CustomWebDesignServices />} />
              <Route path="/CustomWebDevelopment" element={<CustomWebDevelopment />} />
              <Route path="/AppDevelopment" element={<AppDevelopment />} />

              <Route path='/login' element={<Login />} />

              {/* Admin Routes */}
              <Route element={<ProductRoute auth={isAdmin} loading={isLoading} />}>
                <Route path='/admin/allblogs' element={<AllBlogs />} />
                <Route path='/admin/createblog' element={<CreateBlog />} />
                <Route path='/admin/editeblog/:id' element={<EditeBlog />} />
              </Route>
            </Route>


            {/* campaign */}
           
            <Route path="/ksa" element={<LandingPage />} />
            <Route path="/egy" element={<EgyptionLandingPage />} />



            <Route path='*' element={<NotFound />} />

            
             
            
                       
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
