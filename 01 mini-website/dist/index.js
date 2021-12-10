"use strict";
let modalElement = document.querySelector(".modal");
let backdropElement = document.querySelector(".backdrop");
let buttons = document.querySelectorAll(".plan button");
let mobileNav = document.querySelector(".mobile-nav");
let toggleButton = document.querySelector(".toggle-button");
let modalButtonNo = document.querySelector(".modal__actions button");
let isShowMobileNav = false;
buttons.forEach((node) => {
    node.addEventListener("click", (e) => {
        // modalElement.style.display = "block";
        // backdropElement.style.display = "block";
        modalElement.classList.add("open");
        backdropElement.classList.add("open");
    });
});
toggleButton.addEventListener("click", (_) => {
    // backdropElement.style.display = "block";
    // mobileNav.style.display = "block";
    backdropElement.classList.add("open");
    mobileNav.classList.add("open");
    isShowMobileNav = true;
});
backdropElement.addEventListener("click", (_) => {
    if (isShowMobileNav) {
        // mobileNav.style.display = "none";
        mobileNav.classList.remove("open");
        isShowMobileNav = false;
        closeModal();
    }
});
modalButtonNo.addEventListener("click", (_) => {
    closeModal();
});
function closeModal() {
    // backdropElement.style.display = "none";
    // modalElement.style.display = "none";
    backdropElement.classList.remove("open");
    modalElement.classList.remove("open");
}
