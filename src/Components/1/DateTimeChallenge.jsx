// src/Components/1/DateTimeChallenge.jsx

import React, { useState } from 'react';

// شرح الكود: مصفوفات نرويجية لأسماء الأيام والأشهر (المطلوب 1.47 ب)
const NOR_DAYS = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
const NOR_MONTHS = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'];

const DateTimeChallenge = () => {
  // شرح الكود: حالة لتخزين نص التاريخ والوقت المراد عرضه
  const [dateTimeString, setDateTimeString] = useState(null);

  // شرح الكود: دالة لمعالجة النقر على الزر وعرض التاريخ والوقت (المطلوب 1.47 د)
  const displayDateTime = () => {
    // شرح الكود: إنشاء كائن التاريخ والوقت الحالي (let iDag = new Date())
    const now = new Date(); 
    
    // شرح الكود: استخراج الأجزاء المطلوبة
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // شرح الكود: استخدام الدوال للحصول على الأرقام ثم المصفوفات للحصول على الأسماء (المطلوب 1.47 ب و ج)
    const dayName = NOR_DAYS[now.getDay()]; 
    const dayOfMonth = now.getDate();
    const monthName = NOR_MONTHS[now.getMonth()];
    const year = now.getFullYear();

    // شرح الكود: تجميع النص بالصيغة النرويجية المطلوبة
    const formattedTime = `Klokka er ${hours}:${minutes}:${seconds}`;
    const formattedDate = `${dayName} ${dayOfMonth}. ${monthName} ${year}`;
    
    setDateTimeString({ time: formattedTime, date: formattedDate });
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ffc400', borderRadius: '4px', marginBottom: '20px', backgroundColor: '#333', color: '#ffffff' }}>
      <h3 style={{ color: '#ffc400', margin: '0 0 10px 0' }}>1.47: Dato og klokkeslett (Dato og tid)</h3>
      
      <p style={{ fontSize: '14px', marginBottom: '15px' }}>Trykk på knappen for å vise full dato og klokkeslett.</p>
      
      {/* الزر المطلوب 1.47 د */}
      <button 
        onClick={displayDateTime} 
        style={{ padding: '8px 15px', backgroundColor: '#ffc400', color: '#1e1e1e', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        VIS DATO OG KLOKKESLETT
      </button>

      {/* عرض التاريخ والوقت عند النقر */}
      {dateTimeString && (
        <div style={{ marginTop: '15px', padding: '10px', borderLeft: '3px solid #ffc400' }}>
          <p style={{ margin: '0', fontWeight: 'bold' }}>{dateTimeString.time}</p>
          <p style={{ margin: '0', fontWeight: 'bold' }}>{dateTimeString.date}</p>
        </div>
      )}
    </div>
  );
};

export default DateTimeChallenge;