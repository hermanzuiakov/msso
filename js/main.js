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

let firstScreen = new Swiper(".first_screen--slider", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
        autoplay: 20000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let partners = new Swiper(".partners_swiper", {
    slidesPerView: 5,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next__partners",
        prevEl: ".swiper-button-prev__partners",
    },
});