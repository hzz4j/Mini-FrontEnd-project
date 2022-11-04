import "./style.scss";
const container = document.getElementById("container")!;
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const div = document.createElement("div");
  div.classList.add("square");

  div.addEventListener("mouseover", () => setColor(div));
  div.addEventListener("mouseout", () => removeColor(div));
  container.appendChild(div);
}

function setColor(element: HTMLDivElement) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color},0 0 4px ${color}`;
}
function removeColor(element: HTMLDivElement) {
  element.style.backgroundColor = "#2f2e2e";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
