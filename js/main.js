const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");
const overlay = document.getElementById("menu-overlay");

function closeMenu(){
  nav.classList.remove("show");
  toggle.classList.remove("active");
  overlay.classList.remove("show");
}

toggle.addEventListener("click", ()=>{
  nav.classList.toggle("show");
  toggle.classList.toggle("active");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".nav-links a").forEach(link=>{
  link.addEventListener("click", closeMenu);
});
