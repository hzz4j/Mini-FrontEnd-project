import "./style.scss";

const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

function hiddenAllContent() {
  contents.forEach((content) => content.classList.remove("show"));
}

function hiddenAllItems() {
  listItems.forEach((item) => item.classList.remove("active"));
}

listItems.forEach((item, idx) => {
  item.addEventListener("click", () => {
    hiddenAllContent();
    hiddenAllItems();

    item.classList.add("active");
    contents[idx].classList.add("show");
  });
});
