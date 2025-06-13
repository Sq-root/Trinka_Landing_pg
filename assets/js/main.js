const hamburger = document.getElementById("mobile-hamburger");
const navLinks = document.querySelector(".navbar-flex");
const navBtns = document.querySelector(".navbar-btn");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("show");
  navBtns.classList.toggle("show");
});
