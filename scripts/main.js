// Strict mode
"use strict";

//Constants
const menuimg = document.getElementById("menu-img");
const menu = document.getElementsByClassName("menu");

// Function for menu image rotation animation and
// menu slide in animation
function showmenu() {
  menuimg.style.animationPlayState = "running";
  menu[0].classList.add("show");
}

menuimg.addEventListener("click", showmenu);
