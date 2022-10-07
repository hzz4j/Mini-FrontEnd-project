const dots = document.querySelector(".loading__dots");

function addAnimate() {
  dots.classList.add("animate");

  setTimeout(() => {
    dots.classList.remove("animate");

    setTimeout(() => {
      addAnimate();
    }, 100);
  }, 2600);
}

addAnimate();
