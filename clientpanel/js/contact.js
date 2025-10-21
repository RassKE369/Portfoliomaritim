// js/contact.js
document.addEventListener('DOMContentLoaded', () => {
  console.log("Contact page loaded — Erastus Kiprop Maritim");

  const buttons = document.querySelectorAll('.cta');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log(`${btn.id} button clicked`);
    });
  });
});
