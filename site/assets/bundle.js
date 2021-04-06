(function () {
'use strict';

let navburger = document.querySelector('.nav-burger');
let navburgerIcon = document.querySelector('.nav-burger__icon');
navburger.addEventListener('click', function (e) {
    navburgerIcon.classList.toggle('nav-burger__icon--open');
    const event = new CustomEvent("nav-burger-click", {
        detail: {},
        bubbles: true,
    });
    navburger.dispatchEvent(event);
});

let navbar = document.querySelector('.navbar');

navbar.addEventListener('nav-burger-click', function (e) {
    navbar.classList.toggle('navbar--open');
});

}());
