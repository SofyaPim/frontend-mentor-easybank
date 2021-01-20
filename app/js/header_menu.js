let header_menu = document.querySelector(".header__menu");
let menu_line = document.querySelectorAll(".header__menu span");
let header__links = document.querySelector(".header__links ");
let header = document.querySelector(".header");
let overlay = document.querySelector(".overlay");


header_menu.addEventListener("click", function openMenu(e) {

    menu_line[0].classList.toggle('topLineMenu');
    menu_line[1].classList.toggle('bottomLineMenu');
    menu_line[2].classList.toggle('hidden');
    header__links.classList.toggle('header__menu-mobile');
    overlay.classList.toggle('hidden');
});