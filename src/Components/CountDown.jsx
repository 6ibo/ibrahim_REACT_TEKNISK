// src/Components/CountDown.jsx

import React, { useState, useEffect } from 'react';

function CountDown() {
  
  const [count, setCount] = useState(10);
  const [isFinished, setIsFinished] = useState(false);


  useEffect(() => {
    
    if (count <= 0) {
      setIsFinished(true);
      return; 
    }

    const timer = setInterval(() => {
      setCount(prevCount => {
        if (prevCount > 1) {
          return prevCount - 1;
        } else {
          clearInterval(timer); 
          setIsFinished(true);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []); 

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '20px', 
      // 🎨 خلفية صفراء ساطعة للمربع
      backgroundColor: '#ffc400', 
      border: '1px solid #333', 
      borderRadius: '4px',
      width: '100px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.5)'
    }}>
      
      {isFinished ? (
        // 🎨 لون أخضر داكن لرسالة الانتهاء
        <h2 style={{ color: '#008000', fontSize: '18px', margin: '0' }}>FERDIG!</h2>
      ) : (
        // 🎨 لون أسود لرقم العد
        <p style={{ fontSize: '48px', fontWeight: 'bold', color: '#1e1e1e', margin: '0' }}>
          {count}
        </p>
      )}
      
      {isFinished && (
         <button 
           onClick={() => { setCount(10); setIsFinished(false); }}
           // 🎨 تصميم زر بلون داكن
           style={{ marginTop: '10px', padding: '5px 10px', fontSize: '14px', cursor: 'pointer', backgroundColor: '#333', color: '#ffc400', border: 'none', borderRadius: '4px' }}
         >
           Start på nytt
         </button>
      )}
    </div>
  );
}

export default CountDown;