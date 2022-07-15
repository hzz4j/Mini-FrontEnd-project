const toggle = document.getElementById("toggle")
const open = document.getElementById("open")
const modal = document.getElementById("modal")
const close = document.getElementById("close")

function closeNav(e){
    if (
        document.body.classList.contains('show-nav') &&
        e.target !== toggle  &&
        !toggle.contains(e.target) &&   // 处理toggle的按钮
        e.target !== navbar &&
        !navbar.contains(e.target)
      ) {
        console.log(e.target === toggle)
        document.body.classList.toggle('show-nav');
        document.body.removeEventListener('click', closeNav);
      } else if (!document.body.classList.contains('show-nav')) {
        document.body.removeEventListener('click', closeNav);
      }
}

// 展示nav
toggle.addEventListener('click',e => {
    document.body.classList.toggle("show-nav")
    document.addEventListener('click',closeNav)
})


// Modal展示
open.addEventListener('click',()=>{
    modal.classList.add('show-modal')
})

// 关闭遮罩
close.addEventListener('click',()=>{
    modal.classList.remove('show-modal')
})

// 点击遮罩外的地方关闭遮罩
window.addEventListener('click', e => 
    e.target === modal ? modal.classList.remove('show-modal'):false)