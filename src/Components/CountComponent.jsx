// src/Components/CountComponent.jsx

import React from 'react';

// المكون يستقبل قيمة العداد (countValue) ودالة الزيادة (handleIncrement) كـ props.
function CountComponent({ countValue, handleIncrement }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '5px', textAlign: 'center' }}>
      
      {/* 1. <p> tagg til å vise nummeret på skjermen. */}
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
        Antall: {countValue}
      </p>

      {/* 2. <Button> som øker nummeret når du trykker på den. */}
      {/* عند الضغط، يتم استدعاء الدالة التي جاءت من المكون الأب */}
      <button onClick={handleIncrement} style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
        Øk Antall
      </button>
    </div>
  );
}

export default CountComponent;