const humbergerMenu = document.querySelector(".menu-bar"),
  quickBtn = document.querySelector(".quick-btn"),
  closeForm = document.querySelector(".form-close > i ");

//events
humbergerMenu.addEventListener("click", () => {
  document.querySelector(".slider-menu").classList.toggle("open");
  humbergerMenu.classList.toggle("open");
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((el) => el.classList.toggle("open"));
});
quickBtn.addEventListener("click", () => {
  document.querySelector(".banner-form").classList.add("open");
  quickBtn.style.opacity = 0;
});
closeForm.addEventListener("click", () => {
  document.querySelector(".banner-form").classList.remove("open");
  quickBtn.style.opacity = 1;
});
