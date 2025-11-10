// src/Components/CountDown.jsx

import React, { useState, useEffect } from 'react';

function CountDown() {
  // 1. استخدام useState للبدء من الرقم 10
  const [count, setCount] = useState(10);

  // 2. استخدام useState لتخزين حالة الانتهاء
  const [isFinished, setIsFinished] = useState(false);

  // استخدام useEffect لإدارة المؤقت (الـ Timer)
  useEffect(() => {
    // الشرط الأول: إذا وصل العد إلى الصفر أو أقل
    if (count <= 0) {
      setIsFinished(true);
      return; // توقف عن تنفيذ المؤقت
    }

    // إعداد مؤقت زمني (Timer) يعمل كل 1000 مللي ثانية (ثانية واحدة)
    const timer = setInterval(() => {
      // تحديث رقم العد بطرح 1
      setCount(prevCount => prevCount - 1);
    }, 1000);

    // دالة التنظيف (Cleanup function): مهمة جداً لإيقاف المؤقت عند انتهاء المكون أو تحديثه.
    return () => clearInterval(timer);
  }, [count]); // عند تغيير قيمة 'count'، يتم إعادة تشغيل التأثير (Effect)

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      
      {/* إذا كان isFinished صحيحاً، اعرض رسالة التهنئة */}
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