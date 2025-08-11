import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">من نحن</h1>
        <p className="text-gray-600 text-center leading-relaxed">
          نحن فريق متخصص في تطوير التطبيقات والمواقع الإلكترونية الحديثة. 
          نسعى لتقديم حلول مبتكرة ومتطورة لعملائنا.
        </p>
        <div className="mt-6 text-center">
          <Link 
            to="/" 
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
