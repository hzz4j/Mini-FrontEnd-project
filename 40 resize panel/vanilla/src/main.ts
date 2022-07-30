import './style.scss'

const leftPannel = document.querySelector(".left-pannel")! as HTMLElement
const rightPannel = document.querySelector(".right-pannel")! as HTMLElement
const gutter = document.querySelector(".gutter")! as HTMLElement

gutter.addEventListener('mousedown',resizePannel)
function resizePannel(event:MouseEvent){
  // 居然是一样的
  // console.log(event.x,event.clientX);
  window.addEventListener('mousemove',mousemove)
  window.addEventListener('mouseup',mouseup)
  let prevX = event.x

  let lefthPannelWidth = leftPannel.getBoundingClientRect().width
  let rightPannelWidth = rightPannel.getBoundingClientRect().width
  function mousemove(e:MouseEvent){
   let distance =  e.x - prevX
   // 除了getComputedStyle获得width的方式还有getBoundingClientRect
   leftPannel.style.width = `${lefthPannelWidth+distance}px`
   rightPannel.style.width = `${rightPannelWidth-distance}px`
  }

  function mouseup(){
    window.removeEventListener('mousemove',mousemove)
    window.removeEventListener('mouseup',mouseup)
  }
}

