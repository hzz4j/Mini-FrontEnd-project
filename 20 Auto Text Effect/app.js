const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

let message = 'Q10Viking Love Programming!'
let speed = 300 / speedEl.value //获取值
let idx = 1
writeMessage()

function writeMessage(){
    textEl.innerText = message.slice(0,idx)
    idx++
    if(idx > message.length){
        idx = 1
    }
    setTimeout(writeMessage,speed) // 递归调用
}

// 监听input事件,也可以监听change事件
speedEl.addEventListener('input',e => speed = 300 / e.target.value)
// speedEl.addEventListener('change',e => speed = 300 / e.target.value)