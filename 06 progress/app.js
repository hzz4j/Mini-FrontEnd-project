const prev = document.getElementById('prev')
const next = document.getElementById('next')
const progress = document.getElementById('progress')
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click',()=>{
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length
    }

    update()
})


prev.addEventListener('click',()=>{
    currentActive--;
    if(currentActive < 1){
        currentActive = 1
    }
    update()
})


function showProgress(){
    const activeCircles = document.querySelectorAll('.circle.active')
    let width = (activeCircles.length - 1) / (circles.length - 1) * 100 + '%'
    progress.style.width = width
}

function update(){
    updateCircle()
    updateBtn()
    showProgress()
}

function updateCircle(){
    circles.forEach((circle,idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
}

function updateBtn(){
    if(currentActive === 1){
        prev.disabled = true;
    }else if(currentActive === circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}