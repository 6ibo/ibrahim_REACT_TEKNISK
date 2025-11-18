// src/Components/1/LengthConverter.jsx

import React, { useState } from 'react';

// شرح الكود: ثابت التحويل (1 إنش = 2.54 سم)
const CM_PER_INCH = 2.54; 

const LengthConverter = () => {
  const [cmValue, setCmValue] = useState('');
  const [inchResult, setInchResult] = useState(null);

  const handleConvert = () => {
    // شرح الكود: تحويل القيمة المدخلة إلى رقم
    const cm = parseFloat(cmValue);

    if (!isNaN(cm) && cm >= 0) {
      // شرح الكود: حساب القيمة بالإنش وتقريبها
      const inches = (cm / CM_PER_INCH).toFixed(2);
      setInchResult(inches);
    } else {
      setInchResult('Vennligst skriv inn et gyldig positivt tall.');
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ffc400', borderRadius: '4px', marginBottom: '20px', 
      // 🎨 خلفية صفراء فاتحة للمربع
      backgroundColor: '#333',
      // 🎨 خط أبيض داخل المربع
      color: '#ffffff'
    }}>
      <h3 style={{ color: '#ffc400', margin: '0 0 10px 0' }}>1.48: Lengdeomformer (cm til tommer)</h3>
      
      <p style={{ margin: '0 0 5px 0', fontSize: '14px' }}>Skriv inn lengde i centimeter:</p>
      
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="number"
          value={cmValue}
          onChange={(e) => setCmValue(e.target.value)}
          placeholder="Skriv inn i cm" 
          // 🎨 تصميم حقل الإدخال ليتناسب مع الخلفية السوداء
          style={{ padding: '8px', marginRight: '10px', minWidth: '150px', border: '1px solid #ffc400', backgroundColor: '#444', color: '#fff' }}
        />
        
        <button 
          onClick={handleConvert} 
          // 🎨 زر بلون أصفر
          style={{ 
            padding: '8px 15px', 
            backgroundColor: '#ffc400', 
            color: '#1e1e1e', // نص أسود
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          Konverter til tommer
        </button>
      </div>

      {inchResult !== null && (
        <p style={{ marginTop: '15px', fontWeight: 'bold', fontSize: '14px', color: '#ffc400' }}>
          Resultat: **{inchResult} tommer**.
        </p>
      )}
    </div>
  );
};

export default LengthConverter;