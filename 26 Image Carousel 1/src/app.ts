const imgsContainer = document.getElementById('imgs-container')! as HTMLElement
const carousel = document.getElementById('carousel')! as HTMLElement
const imgs = imgsContainer.querySelectorAll('img')! as NodeListOf<HTMLElement>
const dots = document.querySelectorAll('.dots li')! as NodeListOf<HTMLElement>
const prev = document.getElementById('prev')! as HTMLElement
const next = document.getElementById('next')! as HTMLElement


let idx = 0
let size = computeSize()
let interval = setInterval(forward,2000)



prev.addEventListener('click',()=>{
    resetIntervalAndCallFunc(back)
})

next.addEventListener('click',()=>{
    resetIntervalAndCallFunc(forward)
})

imgsContainer.addEventListener('transitionend',()=>{
    console.log("transitionend");
    
})

function forward(){
    idx++    
    changeImage()
}

function back(){
    idx--
    changeImage()
}


function changeImage(){
    if(idx > imgs.length - 1){
        // first limit counter to prevent fast-change bugs
        // 解决快速回退的问题
       
        idx = 0
    }else if(idx<0){
        idx = imgs.length - 1
    }
    hightDots()
    imgsContainer.style.transform = `translateX(${-size * idx}px)`
}


function computeSize():number{
    const width = getComputedStyle(carousel).getPropertyValue('width')
    return +width.substring(0,width.length-2)
}



function hightDots(){
    // remove all active then add active class
    const activeCls = 'active'
    dots.forEach(dot => dot.classList.remove(activeCls))
    dots[idx].classList.add(activeCls)
}


function resetIntervalAndCallFunc(func: Function){
    clearInterval(interval)
    func()
    interval = setInterval(forward,2000)
}

// loop
// https://codepen.io/jonathan-asbell/pen/QWgampv