import './style.scss'

const fill = document.querySelector(".fill")!
const empties = document.querySelectorAll(".empty")!



empties.forEach(empty => {
  empty.addEventListener("dragenter",dragEnter)
  empty.addEventListener("dragover", dragOver)
  empty.addEventListener("dragleave",dragLeave)
  empty.addEventListener("drop",dragDrop)
})

fill.addEventListener("dragstart",dragStart)
fill.addEventListener("dragend",dragEnd)



function dragStart(this:HTMLElement){
  this.classList.add("hold")

  // 拖拽之后立刻去除样式，但是样式在拖拽的元素中仍然生效
  setTimeout(() => {
    this.className = ""
  }, 1);
  
  console.log(this.getAttribute("name-attr"),"drag start")
}

function dragEnd(this:HTMLElement){
  this.classList.add("fill")
  console.log(this.getAttribute("name-attr"),"drag end");
}


function dragEnter(this:HTMLElement){
  this.classList.add('over')
  console.log("drag enter to ",this.getAttribute("name-attr"))
}

function dragOver(event:Event){
  event.preventDefault()  // 阻止dragover的默认行为，否者drop事件不会触发
  console.log("drag over on")
}

function dragLeave(this:HTMLElement){
  this.classList.remove('over')
  console.log("drag leave from ",this.getAttribute("name-attr"))
}

function dragDrop(this:HTMLElement){
  this.classList.remove('over')
  console.log("drag drop in ",this.getAttribute("name-attr"));
  this.appendChild(fill) // 核心
}