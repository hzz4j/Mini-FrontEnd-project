import './style.scss'

const icons = document.querySelectorAll(".section-1-icons i")!
const menu = document.querySelector(".menu")! as HTMLElement

let i = 1;
setInterval(()=>{
    const el = document.querySelector(".section-1-icons .change")!
    el.classList.remove('change')
    i++
    if(i>icons.length){
        i = 1;
        icons[0].classList.add('change')
    }else{
        if(el.nextElementSibling){
            el.nextElementSibling.classList.add('change')
        }
    }
    
},4000)


menu.addEventListener('click',()=>{
   const els = document.querySelectorAll(".target")!
   els.forEach(el => {
    el.classList.toggle("change")
   })
})