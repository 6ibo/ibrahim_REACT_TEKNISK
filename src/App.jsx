// src/App.jsx

import React from 'react';
import CountDown from './Components/CountDown.jsx'; // استيراد المكون

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
      
      {/* استخدام مكون CountDown */}
      <CountDown />
      
    </div>
  );
}

export default App;