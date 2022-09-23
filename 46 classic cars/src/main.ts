import './style.scss'

const menu = document.querySelector(".menu")!
const wrappers = document.querySelectorAll(".wrapper")!

menu.addEventListener("click",()=>{
  const els = document.querySelectorAll(".target")!
  els.forEach(el => el.classList.toggle('change'))
})

wrappers.forEach(wrapper => [
  wrapper.addEventListener('click',()=>{
    const els = document.querySelectorAll(".target")!
    els.forEach(el => el.classList.remove('change'))
  })
])