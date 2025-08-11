import { useState } from 'react';
import { Link } from 'react-router-dom';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleNumber = (number) => {
    if (display === '0') {
      setDisplay(number);
      setEquation(number);
    } else {
      setDisplay(display + number);
      setEquation(equation + number);
    }
  };

  const handleOperator = (operator) => {
    setDisplay('0');
    setEquation(equation + ' ' + operator + ' ');
  };

  const handleEqual = () => {
    try {
      const result = eval(equation);
      setDisplay(result.toString());
      setEquation(result.toString());
    } catch (error) {
      setDisplay('Error');
      setEquation('');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">الحاسبة</h1>
        
        {/* Display */}
        <div className="bg-gray-800 text-white p-4 rounded-lg mb-6 text-right">
          <div className="text-sm text-gray-400 mb-1">{equation}</div>
          <div className="text-2xl font-mono">{display}</div>
        </div>
        
        {/* Calculator Buttons */}
        <div className="grid grid-cols-4 gap-3">
          <button onClick={handleClear} className="col-span-2 bg-red-500 text-white p-4 rounded-lg hover:bg-red-600 transition-colors">
            AC
          </button>
          <button onClick={() => handleOperator('/')} className="bg-orange-500 text-white p-4 rounded-lg hover:bg-orange-600 transition-colors">
            ÷
          </button>
          <button onClick={() => handleOperator('*')} className="bg-orange-500 text-white p-4 rounded-lg hover:bg-orange-600 transition-colors">
            ×
          </button>
          
          {[7, 8, 9].map(num => (
            <button key={num} onClick={() => handleNumber(num)} className="bg-gray-200 text-gray-800 p-4 rounded-lg hover:bg-gray-300 transition-colors">
              {num}
            </button>
          ))}
          <button onClick={() => handleOperator('-')} className="bg-orange-500 text-white p-4 rounded-lg hover:bg-orange-600 transition-colors">
            -
          </button>
          
          {[4, 5, 6].map(num => (
            <button key={num} onClick={() => handleNumber(num)} className="bg-gray-200 text-gray-800 p-4 rounded-lg hover:bg-gray-300 transition-colors">
              {num}
            </button>
          ))}
          <button onClick={() => handleOperator('+')} className="bg-orange-500 text-white p-4 rounded-lg hover:bg-orange-600 transition-colors">
            +
          </button>
          
          {[1, 2, 3].map(num => (
            <button key={num} onClick={() => handleNumber(num)} className="bg-gray-200 text-gray-800 p-4 rounded-lg hover:bg-gray-300 transition-colors">
              {num}
            </button>
          ))}
          <button onClick={handleEqual} className="row-span-2 bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 transition-colors">
            =
          </button>
          
          <button onClick={() => handleNumber(0)} className="col-span-2 bg-gray-200 text-gray-800 p-4 rounded-lg hover:bg-gray-300 transition-colors">
            0
          </button>
          <button onClick={() => handleNumber('.')} className="bg-gray-200 text-gray-800 p-4 rounded-lg hover:bg-gray-300 transition-colors">
            .
          </button>
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

export default Calculator;
