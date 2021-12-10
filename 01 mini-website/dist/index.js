"use strict";
let modalElement = document.querySelector(".modal");
let backdropElement = document.querySelector(".backdrop");
let buttons = document.querySelectorAll(".plan button");
console.log(modalElement);
buttons.forEach((node) => {
    node.addEventListener("click", (e) => {
        modalElement.style.display = "block";
        backdropElement.style.display = "block";
    });
});
