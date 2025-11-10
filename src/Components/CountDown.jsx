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
      
      setCount(prevCount => prevCount - 1);
    }, 1000);

    
    return () => clearInterval(timer);
  }, [count]); 

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      
      
      {isFinished ? (
        <h2 style={{ color: 'green', fontSize: '32px' }}>Gratulerer med Dagen!</h2>
      ) : (
        // وإلا، اعرض رقم العد
        <p style={{ fontSize: '48px', fontWeight: 'bold' }}>
          {count}
        </p>
      )}
    </div>
  );
}

export default CountDown;