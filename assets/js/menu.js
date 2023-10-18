const mainBtn = document.getElementById("main-btn");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const desktopMenu = document.getElementById("desktop-menu");
const overlay = document.getElementById("overlay");
const body = document.body;
const serviceBtn = document.getElementById("service-dropdown-button");
const serviceDropdown = document.getElementById("service-dropdown");
const mobileServiceBtn = document.getElementById(
  "mobile-service-dropdown-button"
);
const mobileServiceDropdown = document.getElementById(
  "mobile-service-dropdown"
);

mainBtn.addEventListener("click", () => {
  mainBtn.classList.toggle("hidden");
  mobileMenu.classList.toggle("show");

  body.classList.toggle("overflow-hidden");

  overlay.classList.toggle("opacity-0");
  overlay.classList.toggle("opacity-50");

  menuBtn.classList.toggle("hidden");
  menuBtn.classList.toggle("flex");
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("hidden");
  mobileMenu.classList.toggle("show");

  body.classList.toggle("overflow-hidden");

  overlay.classList.toggle("opacity-0");
  overlay.classList.toggle("opacity-50");

  mainBtn.classList.toggle("hidden");
  mainBtn.classList.toggle("flex");
});

serviceBtn.addEventListener("click", () => {
  serviceDropdown.classList.toggle("hidden");
  serviceDropdown.classList.toggle("flex");

  desktopMenu.classList.toggle("rounded-br-lg");
  serviceBtn.classList.toggle("rounded-br-lg");
});

mobileServiceBtn.addEventListener("click", () => {
  mobileServiceDropdown.classList.toggle("hidden");
  mobileServiceDropdown.classList.toggle("flex");
});
