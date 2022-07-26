import './style.scss'

const fill = document.querySelector(".fill")!
const empties = document.querySelectorAll(".empty")!


setTimeout(()=>{empties[2].appendChild(fill)},3000)


empties.forEach(empty => {
  empty.addEventListener("dragenter",dragEnter)
  empty.addEventListener("dragover", dragOver)
  empty.addEventListener("dragleave",dragLeave)
  empty.addEventListener("drop",dragDrop)
})

fill.addEventListener("dragstart",dragStart)
fill.addEventListener("dragend",dragEnd)



function dragStart(this:HTMLElement){
  console.log(this.getAttribute("name-attr"),"drag start")
}

function dragEnd(this:HTMLElement){
  console.log(this.getAttribute("name-attr"),"drag end");
}


function dragEnter(this:HTMLElement){
  console.log("drag enter to ",this.getAttribute("name-attr"))
}

function dragOver(event:Event){
  event.preventDefault()  // 阻止dragover的默认行为，否者drop事件不会触发
  console.log("drag over on")
}

function dragLeave(this:HTMLElement){
  console.log("drag leave from ",this.getAttribute("name-attr"))
}

function dragDrop(this:HTMLElement){
  console.log("drag drop in ",this.getAttribute("name-attr"));
  this.appendChild(fill)
}