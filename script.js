let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  
  // إخفاء جميع الشرائح
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // زيادة الفهرس والانتقال للشريحة التالية
  slideIndex++;
  
  // إذا وصلنا إلى نهاية الشرائح، نبدأ من جديد (الشريحة الأولى)
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  
  // عرض الشريحة الحالية (slideIndex - 1 لأن الفهرسة تبدأ من 0)
  slides[slideIndex-1].style.display = "block";  
  
  // استدعاء الدالة مرة أخرى بعد 7000 مللي ثانية (7 ثواني)
  setTimeout(showSlides, 7000); 
}
