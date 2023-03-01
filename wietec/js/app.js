"use strict";

/////////////////////////////////////
// Variables
const DOM = {
  toggleBtn: document.querySelector(".toggle-button"),
  navEl: document.querySelector(".nav"),
  subMenu: document.querySelectorAll(".has-sub-menu > a"),
};

/////////////////////////////////////
// Functions
const toggleNav = function () {
  DOM.toggleBtn.classList.toggle("open");
  DOM.navEl.classList.toggle("active");
};

/////////////////////////////////////
// Events
DOM.toggleBtn.addEventListener("click", toggleNav);

DOM.subMenu.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    if (window.innerWidth < 993) {
      el.parentElement.classList.toggle("active");
    }
  });
});
