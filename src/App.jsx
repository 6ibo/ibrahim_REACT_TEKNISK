// src/App.jsx

import React from 'react';
// مكونات مجلد التحديات القديمة
import LengthConverter from './Components/1/LengthConverter.jsx'; 
import Challenges from './Components/1/Challenges.jsx'; 
import DateTimeChallenge from './Components/1/DateTimeChallenge.jsx';
import WordLengthChecker from './Components/1/WordLengthChecker.jsx';

// ⚠️ المكونات الجديدة
import VowelConsonantChecker from './Components/1/VowelConsonantChecker.jsx'; // 1.52
import PopulationTable from './Components/1/PopulationTable.jsx';         // 1.62
import RandomNumberGenerator from './Components/1/RandomNumberGenerator.jsx'; // 2.07

// مكون العد التنازلي
import CountDown from './Components/CountDown.jsx'; 

function App() {
  return (
    <div style={{ 
        maxWidth: '400px', 
        margin: '0 auto', 
        padding: '20px', 
        backgroundColor: '#1e1e1e', 
        color: '#ffffff', 
        minHeight: '100vh',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)'
      }}>
      
      <h1 style={{ textAlign: 'center', color: '#ffc400', fontSize: '24px' }}>Alle Programmeringsfunksjoner</h1>

      {/* 1. العد التنازلي */}
      <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>
        <CountDown />
      </div>

      <hr style={{ margin: '30px 0', borderTop: '1px solid #444' }}/>
      
      {/* 2. توليد الأرقام العشوائية (2.07) */}
      <RandomNumberGenerator />

      <hr style={{ margin: '30px 0', borderTop: '1px solid #444' }}/>

      {/* 3. التحقق من حرف البداية (1.52) */}
      <VowelConsonantChecker />

      <hr style={{ margin: '30px 0', borderTop: '1px solid #444' }}/>

      {/* 4. جدول السكان (1.62) */}
      <PopulationTable />

      <hr style={{ margin: '30px 0', borderTop: '1px solid #444' }}/>

      {/* 5. التاريخ والوقت (1.47) */}
      <DateTimeChallenge />

      <hr style={{ margin: '30px 0', borderTop: '1px solid #444' }}/>

      {/* 6. التحقق من طول الكلمة (1.51) */}
      <WordLengthChecker />

      <hr style={{ margin: '30px 0', borderTop: '1px solid #444' }}/>

      {/* 7. محول الطول (1.48) */}
      <LengthConverter />

      <hr style={{ margin: '30px 0', borderTop: '1px solid #444' }}/>

      {/* 8. تحديات الأعداد (1.49 و 1.50) */}
      <Challenges />
    </div>
  );
}

export default App;