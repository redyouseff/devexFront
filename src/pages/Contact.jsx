import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">اتصل بنا</h1>
        <p className="text-gray-600 text-center leading-relaxed mb-6">
          نحن هنا للإجابة على استفساراتك. لا تتردد في التواصل معنا.
        </p>
        
        <div className="space-y-4">
          <div className="text-center">
            <p className="text-gray-700 font-semibold">البريد الإلكتروني:</p>
            <p className="text-blue-600">info@devext.com</p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-700 font-semibold">الهاتف:</p>
            <p className="text-blue-600">+966 50 123 4567</p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-700 font-semibold">العنوان:</p>
            <p className="text-gray-600">الرياض، المملكة العربية السعودية</p>
          </div>
        </div>
        
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

export default Contact;
