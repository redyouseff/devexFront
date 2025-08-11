import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">خدماتنا</h1>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">تطوير المواقع</h3>
            <p className="text-gray-600">
              تصميم وتطوير مواقع إلكترونية حديثة ومتجاوبة مع جميع الأجهزة
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-xl font-semibold text-green-800 mb-3">تطوير التطبيقات</h3>
            <p className="text-gray-600">
              تطوير تطبيقات ويب وموبايل متقدمة باستخدام أحدث التقنيات
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">تصميم UX/UI</h3>
            <p className="text-gray-600">
              تصميم واجهات مستخدم جذابة وسهلة الاستخدام
            </p>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <h3 className="text-xl font-semibold text-orange-800 mb-3">استشارات تقنية</h3>
            <p className="text-gray-600">
              تقديم استشارات تقنية متخصصة لحلول الأعمال الرقمية
            </p>
          </div>
        </div>
        
        <div className="text-center">
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

export default Services;
