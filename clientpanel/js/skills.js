// js/skills.js

document.addEventListener('DOMContentLoaded', () => {
  const skillItems = document.querySelectorAll('.skills-grid li');

  // Intersection Observer for fade-in animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  skillItems.forEach((item) => {
    observer.observe(item);
  });
});
