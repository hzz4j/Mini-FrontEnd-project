const loveMe = document.querySelector(".loveMe")
const times = document.getElementById('times')

let totalTimes = 0
let clickTime = 0
loveMe.addEventListener('click',(e) => {
   // 模拟双击效果
   if(clickTime === 0){
    clickTime = new Date().getTime()
   }else{
    if((new Date().getTime()) - clickTime < 800){
        // 有效的双击
        // alert("有效的双击")
        // 重新设置
        clickTime = 0
        handleTimes()
        showHeart(e)
    }else{
        // 隔很长时间了，此次作为第一次计算
        // alert("隔很长时间了，此次作为第一次计算")
        clickTime = new Date().getTime()
    }
   }
})


function showHeart(e){
    // 点击区域距离浏览器顶部和左边的距离
    const x = e.clientX
    const y = e.clientY

    // 图片区域距离浏览器顶部和左边的距离
    const offsetTop = e.target.offsetTop
    const offsetLeft = e.target.offsetLeft

    // 计算点击位置相对于图片的距离
    const top = y - offsetTop
    const left = x - offsetLeft

    // console.log(left,top)

    const heart = document.createElement('i')
    heart.style.top = `${top}px`
    heart.style.left = `${left}px`
    heart.classList.add("fa-solid")
    heart.classList.add("fa-heart")

    loveMe.appendChild(heart)

    // 5秒后删除元素
    setTimeout(()=>heart.remove(),5000)
}


function handleTimes(){
    times.innerHTML = ++totalTimes
}