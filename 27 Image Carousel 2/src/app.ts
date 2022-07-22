const imgsContainer = document.getElementById('imgs-container')! as HTMLElement
const carousel = document.getElementById('carousel')! as HTMLElement
let imgs = imgsContainer.querySelectorAll('img')! as NodeListOf<HTMLElement>
const dots = document.querySelectorAll('.dots li')! as NodeListOf<HTMLElement>
const prev = document.getElementById('prev')! as HTMLElement
const next = document.getElementById('next')! as HTMLElement



let idx = 1
let seconds = 2000
let size = computeSize()
imgs = getCloneImgs()
let interval = setInterval(forward,seconds)



prev.addEventListener('click',()=>{
    resetIntervalAndCallFunc(back)
})

next.addEventListener('click',()=>{
    resetIntervalAndCallFunc(forward)
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
    if(idx > imgs.length - 1 || idx < 0){
        // first limit counter to prevent fast-change bugs
        // 解决快速回退的问题  
        return
    }
    hightDots()
    imgsContainer.style.transition = `transform 0.8s ease-in-out`
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
    let dotIdx:number = null
    if(idx === imgs.length-1){
        dotIdx = 0
    }else if(idx === 0){
        dotIdx = dots.length -1
    }else{
        dotIdx = idx-1
    }

    dots[dotIdx].classList.add(activeCls)
}


function resetIntervalAndCallFunc(func: Function){
    clearInterval(interval)
    func()
    interval = setInterval(forward,2000)
}

// loop
// https://codepen.io/jonathan-asbell/pen/QWgampv


/**
 * 
 * 添加克隆首尾
 */
 function getCloneImgs():NodeListOf<HTMLElement>{
    const firstImgClone = imgs[0].cloneNode() as HTMLElement
    const lastImgClone = imgs[imgs.length-1].cloneNode() as HTMLElement

    firstImgClone.classList.add('first-clone')
    lastImgClone.classList.add('last-clone')

    imgsContainer.appendChild(firstImgClone)
    imgsContainer.prepend(lastImgClone)

    return imgsContainer.querySelectorAll('img')
}

/**
 * 每次检查是否是移动到了克隆的地方
 */
imgsContainer.addEventListener('transitionend',()=>{
    console.log(idx);
    
   // 每次移动完之后进行检查
   if(imgs[idx].classList.contains('first-clone')){
    imgsContainer.style.transition = 'none'
    idx = 1
    imgsContainer.style.transform = `translateX(${-size * idx}px)`
    // imgsContainer.style.transition = val
   }else if(imgs[idx].classList.contains('last-clone')){
    imgsContainer.style.transition = 'none'
    idx = imgs.length - 2
    imgsContainer.style.transform = `translateX(${-size * idx}px)`
   }
    
})



imgsContainer.addEventListener('mouseover',()=>{
    console.log("mouseover");
    
    clearInterval(interval)
})

imgsContainer.addEventListener('mouseout',()=>{
    console.log("mouseout");
    
    interval = setInterval(forward,seconds)
})


// 修复切换浏览器页面，
document.addEventListener('visibilitychange',()=>{
    
    if(document.hidden){
        clearInterval(interval)
    }else{
        interval = setInterval(forward,seconds)
    }
})