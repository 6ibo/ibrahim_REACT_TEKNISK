// src/minefunksjoner.js

// شرح الكود: 2.07 أ: تعريف وتصدير الدالة المطلوبة
/**
 * تولد عددًا صحيحًا عشوائيًا بين قيمتين (شاملتين).
 * @param {number} min - القيمة الدنيا (min)
 * @param {number} maks - القيمة القصوى (maks)
 * @returns {number} - العدد الصحيح العشوائي
 */
export const tilfeldigTallMellom = (min, maks) => {
    // شرح الكود: ضمان أن القيمتين أعداد صحيحة
    min = Math.ceil(min);
    maks = Math.floor(maks);
    // شرح الكود: استخدام Math.random لتوليد رقم ضمن النطاق
    return Math.floor(Math.random() * (maks - min + 1)) + min;
};