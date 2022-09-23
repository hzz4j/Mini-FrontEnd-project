import './style.scss'

const progress = document.querySelector(".progress-bars-wrapper")! as HTMLElement
const navbar = document.querySelector(".navbar")! as HTMLElement
const navbarLinks = document.querySelectorAll(".navbar-link")!
const progressPercents = document.querySelectorAll(".progress-percent")!
const sections = document.querySelectorAll("section")!
const progressBarPercents = [97, 89, 85, 60];
const navbarOffsetTop = navbar.offsetTop

window.addEventListener("scroll",()=>{
   // fixded navbar
   fixNavBar()
   // active 
   activeNavbarLink()
   // handleProgressPercentWidth
   handleProgressPercentWidth()
})

// resize window的时候，重新加载页面
window.addEventListener("resize",()=>{
    window.location.reload()
})

// 固定navbar
function fixNavBar(){
    if(window.pageYOffset >= navbarOffsetTop){
        navbar.classList.add("sticky")
    }else{
        navbar.classList.remove("sticky")
    }
}

// active navbar的link
function activeNavbarLink(){
    const navbarHeight = getHeight(navbar)
    sections.forEach((section,i) => {
     if(window.pageYOffset >= (section.offsetTop - navbarHeight)){
         navbarLinks.forEach(el => el.classList.remove("active"))
         navbarLinks[i].classList.add("active")
     }
    })
}

// 动态处理进度条
function handleProgressPercentWidth(){
    if(window.pageYOffset + window.innerHeight >= progress.offsetTop){
        console.log("progress offsetTop = ",progress.offsetTop,progress.offsetParent)
        console.log("window innerHeight = ",window.innerWidth)
        console.log("window pageYOffset = ",window.pageYOffset)

        progressPercents.forEach((el,i) => {
            (el as HTMLElement).style.width = `${progressBarPercents[i]}%`;
            if(el.previousElementSibling && el.previousElementSibling.firstElementChild){
                el.previousElementSibling.firstElementChild.textContent = `${progressBarPercents[i]}`
            }
        })
    }
}

function getHeight(el:HTMLElement){
    let strVal = getComputedStyle(el).getPropertyValue("height")
    return +strVal.substring(0,strVal.length-2)
}

