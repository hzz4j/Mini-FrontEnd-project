let modalElement = document.querySelector(".modal") as HTMLDivElement;
let backdropElement = document.querySelector(".backdrop") as HTMLDivElement;
let buttons: NodeListOf<Element> = document.querySelectorAll(".plan button");
let mobileNav = document.querySelector(".mobile-nav") as HTMLDivElement;
let toggleButton = document.querySelector(
  ".toggle-button"
)! as HTMLButtonElement;
let modalButtonNo = document.querySelector(
  ".modal__actions button"
)! as HTMLButtonElement;

let isShowMobileNav: boolean = false;

if (buttons) {
  buttons.forEach((node) => {
    node.addEventListener("click", (e) => {
      // modalElement.style.display = "block";
      // backdropElement.style.display = "block";
      modalElement.classList.add("open");
      backdropElement.classList.add("open");
    });
  });
}

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
