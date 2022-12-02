const scrollIcon = document.getElementById("scrollIcon");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.getElementById("myNavLinks");
const navLink = document.querySelectorAll(".myLink");

// Scroll icon to hide

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    scrollIcon.style.visibility = "hidden";
  } else {
    scrollIcon.style.visibility = "visible";
  }
});

// Burger menu

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLink.forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
