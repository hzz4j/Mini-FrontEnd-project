import createSVGDOM from './svg'
/**
 * 
 * @param origin 点击之前的位置（left or top）
 * @param move 鼠标两次点击的距离
 * @param max 最大的边界
 * @returns 
 */
function calcMove(origin:number,move:number,max:number):number{
    let res = origin + move
    if(res <= 0) return 0
    if(res > max) return max
    return res;
}

function getWidth(el:HTMLElement){
    let v = getComputedStyle(el).getPropertyValue("width")
    return +v.replace("px","")
}

function getHeight(el:HTMLElement){
    let v = getComputedStyle(el).getPropertyValue("height")  
    return +v.replace("px","")
}


export default function handleContent(content:HTMLElement){
    const container = content.parentElement!
    content.appendChild(createSVGDOM())
    content.addEventListener("mousedown",moveStart)
    content.addEventListener("mouseup",moveStop)

    let startX:number
    let left:number
    let maxLeft = getWidth(container)-getWidth(content)

    let startY:number
    let top:number
    let maxTop = getHeight(container) - getHeight(content)
    let startMove:boolean



    function moveStart(event:MouseEvent){
        
        // 第一次变换到absolute后仍然保持现在的位置
        if(!content.style.position){
            console.log(content.offsetLeft,content.offsetTop)
            content.style.left = content.offsetLeft-10+'px'
            content.style.top = content.offsetTop-10+'px'
        }
        
        // 开始的位置
        startX = event.clientX
        startY = event.clientY
        left = +content.style.left.replace("px","")
        top = +content.style.top.replace("px","")

        // 在document上监听mousemove事件
        document.addEventListener("mousemove",moveMove)

        startMove = true
        // console.log(event.clientX,event.clientY);

    }

    function moveMove(event:MouseEvent){
        if(!startMove) return
        content.style.position='absolute'
        let xmove = event.clientX - startX
        let ymove = event.clientY - startY

        content.style.left = `${calcMove(left,xmove,maxLeft)}px`
        content.style.top = `${calcMove(top,ymove,maxTop)}px`
    }

    function moveStop(){
        startMove = false
        // clear event listener
        document.removeEventListener("mousemove",moveMove)
    }
}




