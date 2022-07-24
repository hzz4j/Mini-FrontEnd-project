import '@/style.scss'


const boxes:HTMLElement = document.getElementById('boxes')!
const btn:HTMLElement = document.getElementById('btn')!

/**
 * 原始图片在展示框的居中位置
 */
const x = -300
const y = 0
const step = 125

/**
 * 拼凑出完整的图片
 */
function createBox(){
  for (let row = 0; row < 4; row++) {
    for (let column = 0; column < 4; column++) {
      let xPos = x + column * -step
      let yPos = y + row * -step
      let div = document.createElement('div')
      div.classList.add('box')
      div.style.backgroundPosition = `${xPos}px ${yPos}px`
      boxes.appendChild(div)
    }
  }
}


btn.addEventListener('click',()=>{
  boxes.classList.toggle('big')
})

createBox()