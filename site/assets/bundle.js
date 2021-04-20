(function () {
'use strict';

let safeRegister = (selector, func) => {
    let element = document.querySelector(selector);
    if (element) {
        func(element);
    }
};

safeRegister('.nav-burger', navburger => {
    navburger.addEventListener('click', function (e) {
        let navburgerIcon = document.querySelector('.nav-burger__icon');
        navburgerIcon.classList.toggle('nav-burger__icon--open');
        const event = new CustomEvent("nav-burger-click", {
            detail: {},
            bubbles: true,
        });
        navburger.dispatchEvent(event);
    });
});

safeRegister('.navbar', navbar => {
    navbar.addEventListener('nav-burger-click', function (e) {
        navbar.classList.toggle('navbar--open');
    });
});

}());
