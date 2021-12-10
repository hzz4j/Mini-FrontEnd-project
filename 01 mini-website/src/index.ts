let modalElement = document.querySelector(".modal")! as HTMLDivElement;
let backdropElement = document.querySelector(".backdrop")! as HTMLDivElement;
let buttons: NodeListOf<Element> = document.querySelectorAll(".plan button");
let mobileNav = document.querySelector(".mobile-nav")! as HTMLDivElement;
let toggleButton = document.querySelector(
  ".toggle-button"
)! as HTMLButtonElement;

let isShowMobileNav: boolean = false;

buttons.forEach((node) => {
  node.addEventListener("click", (e) => {
    modalElement.style.display = "block";
    backdropElement.style.display = "block";
  });
});

toggleButton.addEventListener("click", (_) => {
  backdropElement.style.display = "block";
  mobileNav.style.display = "block";
  isShowMobileNav = true;
});

backdropElement.addEventListener("click", (_) => {
  if (isShowMobileNav) {
    mobileNav.style.display = "none";
    isShowMobileNav = false;
    closeModal();
  }
});

function closeModal() {
  backdropElement.style.display = "none";
  modalElement.style.display = "none";
}
