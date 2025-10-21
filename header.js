// js/header.js - loads header component
document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(resp => { if(!resp.ok) throw new Error("Header not found"); return resp.text(); })
    .then(html => {
      document.getElementById("header").innerHTML = html;
      // highlight active link
      const current = window.location.pathname.split("/").pop() || 'index.html';
      document.querySelectorAll(".nav-links a").forEach(a => {
        if(a.getAttribute('href') === current) a.classList.add('active');
      });
      // menu toggle
      const menuToggle = document.getElementById('menu-toggle');
      const navLinks = document.getElementById('nav-links');
      if(menuToggle){
        menuToggle.addEventListener('click', ()=> navLinks.classList.toggle('open'));
      }
    })
    .catch(err => console.error(err));
});