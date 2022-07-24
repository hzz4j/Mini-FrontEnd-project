import './style.scss'
import render from './ts/render'

const sliderContainer = document.getElementById("slider-container")! as HTMLDivElement
const leftBtn = document.getElementById("left-arrow")!
const rightBtn = document.getElementById("right-arrow")!


const sliders = render(sliderContainer)
let activeIdx = 0

leftBtn.addEventListener('click',()=>{
  activeIdx--
  if(activeIdx < 0){
    activeIdx = sliders.length - 1
  }
  setBodyBackgroundImg()
  setActiveSlider()
})

rightBtn.addEventListener('click',()=>{
  activeIdx++
  if(activeIdx > sliders.length-1){
    activeIdx = 0
  }
  setBodyBackgroundImg()
  setActiveSlider()
})


function setBodyBackgroundImg(){
  document.body.style.backgroundImage = sliders[activeIdx].style.backgroundImage
}

function setActiveSlider(){
  // remove active class
  sliders.forEach(slider => slider.classList.remove('active'))
  sliders[activeIdx].classList.add('active')
}
