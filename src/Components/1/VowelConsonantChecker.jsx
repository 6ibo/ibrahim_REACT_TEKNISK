// src/Components/1/VowelConsonantChecker.jsx

import React, { useState, useEffect } from 'react';

// شرح الكود: أحرف العلة في النرويجية
const VOWELS = ['a', 'e', 'i', 'o', 'u', 'y', 'æ', 'ø', 'å'];

// دالة مساعدة لتوليد رقم عشوائي (0 أو 1)
const getRandomBinary = () => Math.floor(Math.random() * 2);

const VowelConsonantChecker = () => {
    const [wordInput, setWordInput] = useState('');
    const [isVowelRequired, setIsVowelRequired] = useState(true); // شرط عشوائي (علة أو ساكن)
    const [result, setResult] = useState(null);

    // شرح الكود: تحديد الشرط العشوائي عند تحميل المكون
    useEffect(() => {
        setIsVowelRequired(getRandomBinary() === 1); 
    }, []);

    // شرح الكود: دالة التحقق
    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedWord = wordInput.trim();
        if (trimmedWord.length === 0) {
            setResult(null);
            return;
        }

        // شرح الكود: الحصول على الحرف الأول وتحويله إلى حالة صغيرة
        const firstLetter = trimmedWord.charAt(0).toLowerCase();
        
        // شرح الكود: التحقق من أن الحرف الأول هو حرف أبجدي
        if (!firstLetter.match(/[a-zæøå]/)) {
            setResult({ message: 'Skriv inn et gyldig ord.', icon: '👎', isCorrect: false });
            return;
        }

        // شرح الكود: التحقق مما إذا كان حرف علة
        const startsWithVowel = VOWELS.includes(firstLetter);
        
        let isCorrect;
        let message;

        if (isVowelRequired) {
            // مطلوب حرف علة
            isCorrect = startsWithVowel;
            if (isCorrect) {
                message = `Bra! Ordet du skrev starter med vokalen ${firstLetter}.`;
            } else {
                message = `Feil. Ordet starter med konsonanten ${firstLetter}. Prøv igjen!`;
            }
        } else {
            // مطلوب حرف ساكن
            isCorrect = !startsWithVowel;
            if (isCorrect) {
                message = `Bra! Ordet du skrev starter med konsonanten ${firstLetter}.`;
            } else {
                message = `Feil. Ordet starter med vokalen ${firstLetter}. Prøv igjen!`;
            }
        }

        setResult({ message, icon: isCorrect ? '👍' : '👎', isCorrect });
    };

    // شرح الكود: النص الذي يظهر للمستخدم
    const requirementText = isVowelRequired ? 'vokal (A, E, I, O, U, Y, Æ, Ø, Å)' : 'konsonant (ikke vokal)';

    return (
        <div style={{ padding: '20px', border: '1px solid #ffc400', borderRadius: '4px', marginBottom: '20px', backgroundColor: '#333', color: '#ffffff' }}>
            <h3 style={{ color: '#ffc400' }}>1.52: Vokal- eller konsonantsjekk (Vokal eller konsonant)</h3>
            
            <p style={{ fontSize: '14px' }}>Skriv et ord som starter med en **{requirementText}**:</p>

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
                    border: `2px solid ${result.isCorrect ? '#28a745' : '#dc3545'}`, 
                    backgroundColor: result.isCorrect ? '#004d00' : '#4d0000', 
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

export default VowelConsonantChecker;