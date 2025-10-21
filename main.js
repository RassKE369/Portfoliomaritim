// js/main.js - common utilities
document.addEventListener('DOMContentLoaded', ()=>{
  // set current year in footer if present
  const yearEls = document.querySelectorAll('.footer-copy p');
  const y = new Date().getFullYear();
  yearEls.forEach(p => {
    if(p.innerHTML.includes('©')){
      // keep existing, but ensure year up-to-date
      p.innerHTML = `© ${y} <strong>369</strong> | All Rights Reserved.`;
    }
  });
});