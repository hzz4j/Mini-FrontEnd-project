import "./style.scss";
import data from "./data";

const username = document.querySelector(".username")!;
const userimage = document.querySelector(".user-image")! as HTMLImageElement;
const role = document.querySelector(".role")!;
const testimonial = document.querySelector(".testimonial")!;

let idx = 1;
const updateTestimonial = () => {
  const { name, position, photo, text } = data[idx];
  userimage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;
  testimonial.innerHTML = text;

  idx++;
  if (idx > data.length - 1) {
    idx = 0;
  }
};

setInterval(updateTestimonial, 10000);
