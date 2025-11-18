// src/Components/1/WordLengthChecker.jsx

import React, { useState, useEffect } from 'react';

// دالة مساعدة لتوليد عدد صحيح عشوائي (بين 4 و 8 أحرف للتحقق)
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const WordLengthChecker = () => {
    // شرح الكود: حالة تخزين الكلمة المدخلة
    const [wordInput, setWordInput] = useState('');
    // شرح الكود: حالة لتخزين طول الأحرف المطلوب (المطلوب 1.51 ب)
    const [requiredLength, setRequiredLength] = useState(6);
    // شرح الكود: حالة لتخزين نتيجة التحقق
    const [result, setResult] = useState(null);

    // شرح الكود: عند تحميل المكون، نحدد طول الأحرف المطلوب عشوائيًا
    useEffect(() => {
        setRequiredLength(getRandomInt(4, 8)); // نطلب كلمة بين 4 و 8 أحرف
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // شرح الكود: الحصول على طول الكلمة المدخلة بعد إزالة المسافات الزائدة
        const actualLength = wordInput.trim().length; 

        if (actualLength === requiredLength) {
            // شرح الكود: حالة النجاح (👍)
            setResult({
                isCorrect: true,
                message: `Bra! Ordet består av ${requiredLength} bokstaver.`,
                icon: '👍' // رمز الإبهام للأعلى (&#x1F44D;)
            });
        } else {
            // شرح الكود: حالة الخطأ (👎) وإظهار الطول الفعلي
            setResult({
                isCorrect: false,
                message: `Ordet ditt består av ${actualLength} bokstaver. Det må være ${requiredLength} bokstaver.`,
                icon: '👎' // رمز الإبهام للأسفل (&#x1F44E;)
            });
        }
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ffc400', borderRadius: '4px', backgroundColor: '#333', color: '#ffffff' }}>
            <h3 style={{ color: '#ffc400', margin: '0 0 10px 0' }}>1.51: Sjekk ordlengde (Kontroll av ordlengde)</h3>
            
            <p style={{ fontSize: '14px' }}>Skriv inn et ord som består av **{requiredLength}** bokstaver.</p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <input
                    type="text"
                    value={wordInput}
                    onChange={(e) => setWordInput(e.target.value)}
                    placeholder="Skriv inn ord her..."
                    style={{ padding: '8px', marginRight: '10px', flexGrow: 1, border: '1px solid #ffc400', backgroundColor: '#444', color: '#fff' }}
                    required
                />
                <button 
                    type="submit" 
                    style={{ padding: '8px 15px', backgroundColor: '#ffc400', color: '#1e1e1e', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                    Sjekk
                </button>
            </form>

            {/* عرض النتيجة */}
            {result && (
                <div style={{ 
                    padding: '10px', 
                    border: `2px solid ${result.isCorrect ? '#28a745' : '#dc3545'}`, // أخضر للنجاح، أحمر للخطأ
                    backgroundColor: result.isCorrect ? '#004d00' : '#4d0000', // خلفية داكنة
                    color: '#fff', 
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <span style={{ fontSize: '24px', marginRight: '10px' }}>{result.icon}</span>
                    <p style={{ margin: '0', fontWeight: 'bold' }}>{result.message}</p>
                </div>
            )}
        </div>
    );
};

export default WordLengthChecker;