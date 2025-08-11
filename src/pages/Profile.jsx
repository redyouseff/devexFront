import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Profile() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-green-800 text-white p-8">
            <div className="flex items-center space-x-6">
              <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center text-green-800 text-4xl font-bold">
                DE
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">DEVEXT Profile</h1>
                <p className="text-yellow-200">Software Development Company</p>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-8">
            {/* Company Info */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Company Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-700 mb-2">Location</h3>
                  <p className="text-gray-600">Saudi Arabia, Riyadh</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-700 mb-2">Established</h3>
                  <p className="text-gray-600">2023</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-700 mb-2">Team Size</h3>
                  <p className="text-gray-600">50+ Professionals</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-700 mb-2">Projects Completed</h3>
                  <p className="text-gray-600">100+</p>
                </div>
              </div>
            </div>

            {/* Expertise */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Expertise</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-green-800 text-white rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Web Development</h3>
                  <p className="text-gray-600 text-sm">Custom websites and web applications</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-green-800 text-white rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Mobile Apps</h3>
                  <p className="text-gray-600 text-sm">iOS and Android development</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-green-800 text-white rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">UI/UX Design</h3>
                  <p className="text-gray-600 text-sm">Beautiful and intuitive interfaces</p>
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <div className="text-center">
              <Link 
                to="/contact"
                className="inline-flex items-center bg-yellow-400 text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Get in Touch
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
