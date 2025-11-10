// src/Components/CountComponent.jsx

import React from 'react';


function CountComponent({ countValue, handleIncrement }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '5px', textAlign: 'center' }}>
      
      
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
        Antall: {countValue}
      </p>

      
      <button onClick={handleIncrement} style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
        Øk Antall
      </button>
    </div>
  );
}

export default CountComponent;