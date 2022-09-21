import './style.scss'

const icons = document.querySelectorAll(".section-1-icons i")!

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
    
},1000)
