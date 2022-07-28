import './style.scss'
import renderUI from './ts/renderUI'
import IMAGES from './ts/images'


renderUI()
const cards = document.querySelectorAll('.card')
let isClickable = true
let matchCounter = 0
let cardOne:HTMLDivElement|undefined
let cardTwo:HTMLDivElement|undefined

init()


/**
 * 处理翻牌
 */
function flipCard(e:Event){
  // card里面的子元素设置了pointer-events:none.
  // 所以target永远是card div
  if(isClickable){
    const card  = e.target as HTMLDivElement
    card.classList.add("flip")
    if(!cardOne || cardOne === card){
       cardOne = card
       return
    }

    isClickable = false
    cardTwo = card
    matchCard()
  }
  
}

/**
 * 比对卡片
 */
function matchCard(){
  if(cardOne && cardTwo){
    const img1 = cardOne.querySelector("img")! as HTMLImageElement
    const img2 = cardTwo.querySelector("img")! as HTMLImageElement
    if(img1.src === img2.src){
      
      cardOne.removeEventListener("click",flipCard)
      cardTwo.removeEventListener("click",flipCard)
      resetCardOneAndCardTwo()
      isClickable = true

      matchCounter++
      if(matchCounter === 8){
        setTimeout(()=>{
          init()
        },2000)
        console.log("shuffle");   
      }

    }else{

      // 翻开后再抖动
      setTimeout(()=>{
        cardOne?.classList.add("shake")
        cardTwo?.classList.add("shake")
      },400)
      // 不匹配返回翻牌回来
      setTimeout(()=>{
        cardOne?.classList.remove("flip","shake")
        cardTwo?.classList.remove("flip","shake")
        resetCardOneAndCardTwo()
        isClickable = true
      },1000)
    }
  }
}

function resetCardOneAndCardTwo(){
  cardOne = undefined
  cardTwo = undefined
}

/**
 * 初始化
 */
function init(){
  cards.forEach(card => {
    card.addEventListener("click",flipCard)
    card.classList.remove("flip")
  })
  shuffle()
}

/**
 * 刷新牌面
 */
function shuffle(){
  const RANDOM_IMAGES = [
    ...[...IMAGES].sort(()=> Math.random() - 0.5),
    ...[...IMAGES].sort(()=> Math.random() - 0.5)
  ]
  cards.forEach((card,idx) => {
    const imgEl = card.querySelector("img")! as HTMLImageElement
    imgEl.src = RANDOM_IMAGES[idx]
  })
  isClickable = true
  matchCounter = 0
  console.log(RANDOM_IMAGES);
  
}


