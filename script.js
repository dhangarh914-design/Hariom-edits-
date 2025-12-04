document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = 'translateY(40px)';
  });
  
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + window.innerHeight;
    sections.forEach(sec => {
      if (scrollY > sec.offsetTop + 50) {
        sec.style.opacity = 1;
        sec.style.transform = 'translateY(0)';
        sec.style.transition = 'all 0.8s ease';
      }
    });
  });
});