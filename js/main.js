const toggle=document.getElementById("menu-toggle");
const nav=document.getElementById("nav-links");
const overlay=document.getElementById("menu-overlay");

function closeMenu(){
nav.classList.remove("show");
toggle.classList.remove("active");
overlay.classList.remove("show");
}

toggle.onclick=()=>{
nav.classList.toggle("show");
toggle.classList.toggle("active");
overlay.classList.toggle("show");
};

overlay.onclick=closeMenu;

document.querySelectorAll(".nav-links a")
.forEach(link=>link.onclick=closeMenu);
