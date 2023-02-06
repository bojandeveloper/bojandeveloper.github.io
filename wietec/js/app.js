"use strict";

/////////////////////////////////////
// Variables
const DOM = {
  toggleBtn: document.querySelector(".toggle-button"),
  navEl: document.querySelector(".nav"),
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
