"use strict";

const nav = new Swiper(".header_nav--swiper", {
    slidesPerView: 7,
    spaceBetween: 18,
    /*loop: true,*/
    /*freeMode: true,*/
    navigation: {
        nextEl: ".swiper-button-next__nav",
        prevEl: ".swiper-button-prev__nav",
    },
});

const catalogBurger = document.getElementById("catalogBurger"),
    catalogBtn = document.getElementsByClassName("header_middle--btn")[0],
    catalogMenu = document.getElementsByClassName("header_catalog--menu")[0];

catalogBtn.onclick = function() {
    catalogBurger.classList.toggle("active");
    catalogMenu.classList.toggle("active");
}

const firstScreen = new Swiper(".first_screen--slider", {
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

const partners = new Swiper(".partners_swiper", {
    slidesPerView: 5,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next__partners",
        prevEl: ".swiper-button-prev__partners",
    },
});

const menuItems = document.getElementsByClassName("menu_item--haveChild");

for (const menuItem of menuItems) {
    menuItem.addEventListener('click', (event) => {
        for (const menuItem of menuItems) {
            if (menuItem.classList.contains("active")) {
                menuItem.classList.remove("active")
            }
        }

        event.target.classList.toggle("active");
    })
}