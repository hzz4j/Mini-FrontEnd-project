import './style.scss'
import BOOKS from './ts/books'
const booksContainer = document.getElementById("books-container")!

const liCollection:HTMLLIElement[] = []
let dragIdx:number

renderUI()

function renderUI(){
  BOOKS
    .map(book => {return{name: book,val: Math.random()}})
    .sort((a,b) => a.val - b.val)
    .map(v => v.name)
    .forEach((book,idx) => {
      const li = document.createElement("li")
      li.classList.add("book")
      li.setAttribute("data-idx",idx+"")
      li.setAttribute("data-counter","0")
      li.innerHTML = `
        <span class="number">${idx+1}</span>
        <div draggable="true"" class="draggable">
          <p class="name">${book}</p>
          <i class="fa-solid fa-grip-lines"></i>
        </div>
      `
      booksContainer.appendChild(li)
      liCollection.push(li)
    })

    addEventListener()
  
}


function addEventListener(){
  const dragables = document.querySelectorAll(".draggable")! as NodeListOf<HTMLElement>
  dragables.forEach(d => d.addEventListener("dragstart",dragStart))
  liCollection.forEach(li => {
    li.addEventListener("dragenter",e => dragEnter(e,li))
    li.addEventListener("dragleave",e => dragLeave(e,li))
    li.addEventListener("dragover",e => dragOver)
    li.addEventListener("drop",dropBook)

  })
}


function dragStart(this:HTMLElement){
  dragIdx = +this.getAttribute("data-idx")!
}

function dragEnter(event:DragEvent,el:HTMLElement){
  const target = event.target as HTMLElement
  console.log("drag enter",target);
  let counter = +el.getAttribute("data-counter")!
  counter++
  console.log("drag enter ",counter);
  el.setAttribute("data-counter",counter+"")
  el.classList.add("hover")
}

function dragLeave(event:DragEvent,el:HTMLLIElement){
  const target = event.target as HTMLLIElement
  console.log("drag leave",target);
  let counter = +el.getAttribute("data-counter")!
  counter--
  console.log("drag leave ",counter);
  el.setAttribute("data-counter",counter+"")
  if(counter === 0){
    el.classList.remove("hover")
    console.log("Finished ");
  }
}

function dragOver(event:DragEvent){
  event.preventDefault()
}



function dropBook(this:HTMLElement){
  const idx = +this.getAttribute("data-idx")!
  swap(dragIdx,idx)
  this.classList.remove("hover")
}

function swap(srcIdx:number,targetIdx:number){
  const src = liCollection[srcIdx]
  const target = liCollection[targetIdx]

  const srcBook = src.querySelector("div")!
  const tgtBook = target.querySelector("div")!

  src.appendChild(tgtBook)
  target.appendChild(srcBook)
}