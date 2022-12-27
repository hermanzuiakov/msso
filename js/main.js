"use strict";

let nav = new Swiper(".header_nav--swiper", {
    slidesPerView: 5,
    spaceBetween: 18,
    loop: true,
    /*freeMode: true,*/
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let catalogBurger = document.getElementById("catalogBurger"),
    catalogBtn = document.getElementsByClassName("header_middle--btn")[0];

catalogBtn.onclick = function() {
    catalogBurger.classList.toggle("active");
}