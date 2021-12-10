"use strict";
let modalElement = document.querySelector(".modal");
let backdropElement = document.querySelector(".backdrop");
let buttons = document.querySelectorAll(".plan button");
let mobileNav = document.querySelector(".mobile-nav");
let toggleButton = document.querySelector(".toggle-button");
buttons.forEach((node) => {
    node.addEventListener("click", (e) => {
        modalElement.style.display = "block";
        backdropElement.style.display = "block";
    });
});
toggleButton.addEventListener("click", (_) => {
    backdropElement.style.display = 'block';
    mobileNav.style.display = "block";
});
backdropElement.addEventListener("click", (_) => {
    mobileNav.style.display = "none";
    closeModal();
});
function closeModal() {
    backdropElement.style.display = "none";
    modalElement.style.display = "none";
}
