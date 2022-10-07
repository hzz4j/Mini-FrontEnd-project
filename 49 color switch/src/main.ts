import "./style.scss";

const colors = document.querySelectorAll(".color")!;
const btn = document.getElementById("btn")! as HTMLInputElement;
const txt = document.querySelector(".txt")! as HTMLInputElement;

colors.forEach((color) => color.addEventListener("click", changeColor));

function changeColor(event: Event) {
  const target = event.target as HTMLElement;
  // get color
  if (target) {
    const color = getComputedStyle(target).getPropertyValue("background-color");
    document.body.style.backgroundColor = color;
    txt.style.borderLeftColor = color;
    btn.style.backgroundColor = color;

    // active color
    colors.forEach((color) => color.classList.remove("active"));
    target.classList.add("active");
  }
}
