// لا يوجد JavaScript ضروري — الموقع ثابت بالكامل
// كل الروابط تفتح WhatsApp مباشرة بدون أي كود

// تأثير شريط التنقل عند التمرير
window.addEventListener('scroll', () => {
  document.querySelector('.nav').style.borderBottomColor =
    window.scrollY > 40 ? 'rgba(38, 168, 166, 0.3)' : 'rgba(43, 38, 83, 0.14)';
});