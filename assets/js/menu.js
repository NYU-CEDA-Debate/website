const mainBtn = document.getElementById("main-btn");
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const body = document.body;

mainBtn.addEventListener("click", () => {
  mainBtn.classList.toggle("hidden");
  nav.classList.toggle("show");

  body.classList.toggle("overflow-hidden");

  overlay.classList.toggle("opacity-0");
  overlay.classList.toggle("opacity-50");

  menuBtn.classList.toggle("hidden");
  menuBtn.classList.toggle("flex");
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("hidden");
  nav.classList.toggle("show");

  body.classList.toggle("overflow-hidden");

  overlay.classList.toggle("opacity-0");
  overlay.classList.toggle("opacity-50");

  // TODO: wait until slide animation finishes before revealing main btn

  mainBtn.classList.toggle("hidden");
  mainBtn.classList.toggle("flex");
});
