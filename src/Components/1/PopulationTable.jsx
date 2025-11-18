// src/Components/1/PopulationTable.jsx

import React from 'react';

// شرح الكود: 1.62 ب: مصفوفة كائنات لبيانات سكان النرويج (افتراضية لأغراض التمرين)
const POPULATION_DATA = [
    { år: 2016, innbyggertall: 5213985 },
    { år: 2017, innbyggertall: 5258317 },
    { år: 2018, innbyggertall: 5304726 },
    { år: 2019, innbyggertall: 5347854 },
    { år: 2020, innbyggertall: 5379475 },
    { år: 2021, innbyggertall: 5421241 },
    { år: 2022, innbyggertall: 5488151 },
    { år: 2023, innbyggertall: 5550203 },
    { år: 2024, innbyggertall: 5600000 }, // تقديري
];

const PopulationTable = () => {
    return (
        <div style={{ padding: '20px', border: '1px solid #ffc400', borderRadius: '4px', marginBottom: '20px', backgroundColor: '#333', color: '#ffffff' }}>
            <h3 style={{ color: '#ffc400' }}>1.62: Befolkningsstatistikk (Befolkningsstatistikk)</h3>
            
            <p style={{ fontSize: '14px', marginBottom: '15px' }}>Data fra de siste årene lagret i et array med objekter.</p>
            
            {/* شرح الكود: 1.62 ج: عرض البيانات في جدول */}
            <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ffc400', padding: '8px', backgroundColor: '#444', color: '#ffc400' }}>År (السنة)</th>
                        <th style={{ border: '1px solid #ffc400', padding: '8px', backgroundColor: '#444', color: '#ffc400' }}>Innbyggertall (عدد السكان)</th>
                    </tr>
                </thead>
                <tbody>
                    {/* شرح الكود: استخدام .map لعرض كل عنصر في المصفوفة كصف في الجدول */}
                    {POPULATION_DATA.map((item, index) => (
                        <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#2a2a2a' : '#333' }}>
                            <td style={{ border: '1px solid #555', padding: '8px', textAlign: 'center' }}>{item.år}</td>
                            <td style={{ border: '1px solid #555', padding: '8px', textAlign: 'center' }}>{item.innbyggertall.toLocaleString('no-NO')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PopulationTable;