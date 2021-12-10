let modalElement = document.querySelector(".modal")! as HTMLDivElement;
let backdropElement = document.querySelector(".backdrop")! as HTMLDivElement;
let buttons: NodeListOf<Element> = document.querySelectorAll(".plan button");

console.log(modalElement);

buttons.forEach((node) => {
  node.addEventListener("click", (e) => {
    modalElement.style.display = "block";
    backdropElement.style.display = "block";
  });
});
