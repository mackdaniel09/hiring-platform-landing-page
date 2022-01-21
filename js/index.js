let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
});
