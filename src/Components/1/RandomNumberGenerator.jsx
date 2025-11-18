// src/Components/1/RandomNumberGenerator.jsx

import React, { useState } from 'react';
// شرح الكود: استيراد الدالة من ملف الوحدة الخارجية (المطلوب 2.07 ب)
import { tilfeldigTallMellom } from '../../minefunksjoner.js'; 

const RandomNumberGenerator = () => {
    // شرح الكود: حالة لتخزين قيم min و maks والنتيجة
    const [minVal, setMinVal] = useState(1);
    const [maxVal, setMaxVal] = useState(100);
    const [result, setResult] = useState(null);

    // شرح الكود: دالة لمعالجة النقر على الزر (2.07 ب)
    const generateNumber = () => {
        const min = parseInt(minVal);
        const max = parseInt(maxVal);

        if (isNaN(min) || isNaN(max)) {
            setResult('Vennligst skriv inn gyldige tall.');
            return;
        }

        // شرح الكود: استدعاء الدالة المصدرة لتوليد الرقم
        const randomNumber = tilfeldigTallMellom(min, max);
        setResult(`Generert tall: ${randomNumber}`);
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ffc400', borderRadius: '4px', marginBottom: '20px', backgroundColor: '#333', color: '#ffffff' }}>
            <h3 style={{ color: '#ffc400' }}>2.07: Tilfeldig tallgenerator (Tilfeldig tall)</h3>
            
            <p style={{ fontSize: '14px' }}>Skriv inn min og maks verdier og klikk for å generere et tall.</p>
            
            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                <input
                    type="number"
                    value={minVal}
                    onChange={(e) => setMinVal(e.target.value)}
                    placeholder="Min verdi"
                    style={{ padding: '8px', border: '1px solid #ffc400', backgroundColor: '#444', color: '#fff', width: '50%' }}
                />
                <input
                    type="number"
                    value={maxVal}
                    onChange={(e) => setMaxVal(e.target.value)}
                    placeholder="Maks verdi"
                    style={{ padding: '8px', border: '1px solid #ffc400', backgroundColor: '#444', color: '#fff', width: '50%' }}
                />
            </div>
            
            <button 
                onClick={generateNumber} 
                style={{ padding: '8px 15px', backgroundColor: '#ffc400', color: '#1e1e1e', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
                Generer tall
            </button>

            {result && (
                <p style={{ marginTop: '15px', fontWeight: 'bold', color: '#fff', borderLeft: '3px solid #ffc400', paddingLeft: '10px' }}>
                    {result}
                </p>
            )}
        </div>
    );
};

export default RandomNumberGenerator;