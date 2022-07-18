const canvas = document.getElementById('canvas')
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const sizeBtn = document.getElementById('size')
const colorBtn = document.getElementById('color')
const clearBtn = document.getElementById('clear')
const ctx = canvas.getContext('2d');

let size = 20
let color = "black"
let x,y
let isPress = false





canvas.addEventListener('mousedown',e => {

    /** 居然可以在事件对象上直接获取offsetX = clientX - offsetLeft */
    x = e.offsetX
    y = e.offsetY
    isPress = true
})

canvas.addEventListener('mouseup',e => {
    x = undefined
    y = undefined
    isPress = false
    
})

canvas.addEventListener('mousemove', e => {
    // 画画的逻辑
    if(isPress){
        const x2 = e.offsetX
        const y2 = e.offsetY
        console.log(x2,y2)
        drawCircle(x2,y2)
        drawLine(x,y,x2,y2)
        x = x2
        y = y2
    }
})


function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size/2, 0, Math.PI*2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size
    ctx.stroke()
}


/**--------------工具栏的事件监听---------------------- */
decreaseBtn.addEventListener('click',() => {
    size -= 5
    if(size < 5){
        size = 5
    }

    updateScreenSize()
    
})

increaseBtn.addEventListener('click',() => {
    size += 5
    if(size > 50){
        size = 50
    }

    updateScreenSize()
})

clearBtn.addEventListener('click',() => {
    ctx.clearRect(0,0, canvas.width, canvas.height)
})

colorBtn.addEventListener('change',e => {
    color = e.target.value
})


function updateScreenSize(){
    sizeBtn.innerText = size
}