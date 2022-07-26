import './style.scss'

const fill = document.querySelector(".fill")!
const empties = document.querySelectorAll(".empty")!


let idx = 0
setTimeout(moveImage,1500)
function moveImage(){
  idx++
  if(idx>empties.length-1){
    idx = 0
  }
  // 移动元素
  empties[idx].appendChild(fill)
  // 无限循环
  setTimeout(moveImage,1500)
}