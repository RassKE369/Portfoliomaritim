// js/footer.js - loads footer component
document.addEventListener("DOMContentLoaded", () => {
  fetch("footer.html")
    .then(resp => { if(!resp.ok) throw new Error("Footer not found"); return resp.text(); })
    .then(html => { document.getElementById("footer").innerHTML = html; })
    .catch(err => console.error(err));
});