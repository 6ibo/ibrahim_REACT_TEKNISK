// src/App.jsx

import React, { useState } from 'react';
import CountComponent from './Components/CountComponent.jsx'; // استيراد المكون

function App() {
  // ******* تنفيذ الخطوة 10: رفع الحالة (Shared State) ********
  
  // 1. تعريف الحالة المشتركة (Shared State) باستخدام useState
  const [sharedCount, setSharedCount] = useState(0);

  // 2. تعريف دالة التحديث (Update Function)
  const incrementCount = () => {
    // تحديث القيمة في حالة الأب (App)
    setSharedCount(sharedCount => sharedCount + 1);
  };
  // ************************************************************

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2>Delt Teller (Shared Counter)</h2>
      <p style={{ color: 'gray' }}>Trykk på hvilken som helst knapp for å øke alle tellere:</p>

      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        
        {/* ******* تنفيذ الخطوة 8: وضع 3 instanser من المكون ******** */}
        
        {/* تمرير الحالة والدالة إلى النسخة 1 */}
        <CountComponent countValue={sharedCount} handleIncrement={incrementCount} />
        
        {/* تمرير نفس الحالة والدالة إلى النسخة 2 */}
        <CountComponent countValue={sharedCount} handleIncrement={incrementCount} />
        
        {/* تمرير نفس الحالة والدالة إلى النسخة 3 */}
        <CountComponent countValue={sharedCount} handleIncrement={incrementCount} />
        
      </div>
    </div>
  );
}

export default App;