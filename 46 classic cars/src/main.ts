import './style.scss'

const menu = document.querySelector(".menu")!
const wrappers = document.querySelectorAll(".wrapper")!
const videos = document.querySelectorAll(".video")! as NodeListOf<HTMLVideoElement>

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

videos.forEach(video => {
  video.addEventListener("mouseover",()=>{
    video.play()
  })

  video.addEventListener("mouseout",()=>{
    video.pause()
  })
})
