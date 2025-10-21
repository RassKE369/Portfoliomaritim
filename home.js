// js/home.js - interactions on home page (contact buttons)
document.addEventListener('DOMContentLoaded', ()=>{
  // Replace placeholders with your info if you want to experiment
  const waBtn = document.getElementById('btn-whatsapp');
  const emailBtn = document.getElementById('btn-email');
  const callBtn = document.getElementById('btn-call');

  // Prefilled examples (replace with real values)
  const phone = '[0748042681]'; // e.g. 1234567890 (include country code)
  const email = '[erastuskiprop17@gnail.com]'; // e.g. you@example.com
  const waMsg = encodeURIComponent('Hello 369! I saw your portfolio and would like to connect.');
  if(waBtn) waBtn.href = `https://wa.me/${phone}?text=${waMsg}`;
  if(emailBtn) emailBtn.href = `mailto:${email}?subject=Portfolio%20Inquiry&body=Hello%20369,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.`;
  if(callBtn) callBtn.href = `tel:${phone}`;
});