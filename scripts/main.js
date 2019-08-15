const menuimg = document.getElementById("menu-img");
const menu = document.getElementsByClassName("menu");

menuimg.addEventListener("click", showmenu);

function showmenu() {
  menuimg.style.animationPlayState = "running";
  menu[0].classList.add("show");
}
