// src/Components/1/Challenges.jsx

import React, { useState, useEffect } from 'react';

// شرح الكود: دالة تتحقق إذا كان الرقم زوجيًا (1.49 أ)
const isEven = (num) => {
  return num % 2 === 0;
};

// شرح الكود: دالة تستخرج الأعداد الزوجية من المصفوفة (1.49 ب)
const getEvenNumbers = (inputArray) => {
  return inputArray.filter(isEven);
};

// شرح الكود: دالة تولد عددًا صحيحًا عشوائيًا
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Challenges = () => {
  // شرح الكود: حالة (State) لتمرين 1.50
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const sum = num1 + num2;

  // شرح الكود: حالة (State) لنتيجة 1.49
  const [testArray, setTestArray] = useState([]);
  const [evenResults, setEvenResults] = useState([]);

  useEffect(() => {
    // شرح الكود: اختبار 1.49 ب: توليد مصفوفة عشوائية
    const randomArray = Array.from({ length: 10 }, () => getRandomInt(1, 20));
    setTestArray(randomArray);
    setEvenResults(getEvenNumbers(randomArray));

    // شرح الكود: 1.50 أ: توليد أرقام عشوائية
    setNum1(getRandomInt(0, 10));
    setNum2(getRandomInt(0, 10));
  }, []);

  // شرح الكود: 1.50 ب: تحديد خاصية الزوجي/الفردي
  let parityMessage = '';
  const isNum1Even = isEven(num1);
  const isNum2Even = isEven(num2);

  if (isNum1Even && isNum2Even) {
    parityMessage = 'Begge tallene er partall.';
  } else if (!isNum1Even && !isNum2Even) {
    parityMessage = 'Begge tallene er oddetall.';
  } else {
    parityMessage = 'Ett partall og ett oddetall.';
  }

  // شرح الكود: 1.50 ج: تحديد خاصية المجموع
  let sumComparisonMessage = '';
  if (sum > 10) {
    sumComparisonMessage = `Summen (${sum}) er større enn 10.`;
  } else if (sum < 10) {
    sumComparisonMessage = `Summen (${sum}) er mindre enn 10.`;
  } else {
    sumComparisonMessage = `Summen (${sum}) er lik 10.`;
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ffc400', borderRadius: '4px', 
      // 🎨 خلفية رمادية داكنة
      backgroundColor: '#333',
      // 🎨 خط أبيض
      color: '#ffffff'
    }}>
      <h3 style={{ color: '#ffc400' }}>1.49 og 1.50: Tallutfordringer (Numeriske utfordringer)</h3>
      
      <hr style={{ borderTop: '1px solid #555' }}/>

      <h4 style={{ color: '#ffc400' }}>🛠️ Test av 1.49 funksjoner (Testing av funksjoner)</h4>
      <p>
        **Tilfeldig Input Array:** [{testArray.join(', ')}]
      </p>
      <p>
        **Utvalgt Partall Array:** [{evenResults.join(', ')}]
      </p>

      <hr style={{ borderTop: '1px solid #555' }}/>

      <h4 style={{ color: '#ffc400' }}>🔢 1.50 Tilfeldige Tall (Tilfeldige tall)</h4>
      <p>Tall 1: **{num1}** | Tall 2: **{num2}** | Sum: **{sum}**</p>
      
      {/* 🎨 رسائل بلون أصفر */}
      <p style={{ fontWeight: 'bold', color: '#ffc400' }}>1.50 b: {parityMessage}</p>
      <p style={{ fontWeight: 'bold', color: '#ffc400' }}>1.50 c: {sumComparisonMessage}</p>

      <button 
        onClick={() => { setNum1(getRandomInt(0, 10)); setNum2(getRandomInt(0, 10)); }}
        // 🎨 زر بلون أصفر
        style={{ padding: '8px 15px', backgroundColor: '#ffc400', color: '#1e1e1e', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
      >
        Generer nye tall
      </button>
    </div>
  );
};

export default Challenges;