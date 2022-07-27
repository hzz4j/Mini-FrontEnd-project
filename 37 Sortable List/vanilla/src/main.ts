import './style.scss'
import BOOKS from './ts/books'
const booksContainer = document.getElementById("books-container")!
const checkBtn = document.querySelector(".check-btn")!
const liCollection:HTMLLIElement[] = []
let dragIdx:number
renderDragableUI()

checkBtn.addEventListener("click",checkOrder)

function checkOrder(){
  liCollection.forEach((li,idx) => {
    const nameEl = li.querySelector(".name")! as HTMLElement
    if(nameEl.innerText === BOOKS[idx]){
      nameEl.classList.remove("error")
      nameEl.classList.add("right")
    }else{
      nameEl.classList.remove("right")
      nameEl.classList.add("error")
    }
  })
}



function renderDragableUI(){
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
    li.addEventListener("dragover",dragOver)
    li.addEventListener("drop",dropBook)
  })
}


function dragStart(this:HTMLElement){
  dragIdx = +this.closest('li')!.getAttribute('data-idx')!
}

function dragEnter(event:DragEvent,el:HTMLElement){
  const target = event.target as HTMLElement
  console.log("drag enter",target); // 会看到在遇到子元素的时候target为子元素
  let counter = +el.getAttribute("data-counter")!
  counter++
  el.setAttribute("data-counter",counter+"")
  console.log("drag enter ",counter);
  el.classList.add("hover")
}

function dragLeave(event:DragEvent,el:HTMLLIElement){
  const target = event.target as HTMLLIElement
  console.log("drag leave",target); // 会看到在遇到子元素的时候target为子元素
  let counter = +el.getAttribute("data-counter")!
  counter--
  el.setAttribute("data-counter",counter+"")
  console.log("drag leave ",counter);
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
  // 拖拽完之后需要进行清零
  this.setAttribute("data-counter","0")
  this.classList.remove("hover")
}

/**
 * 交换拖拽的元素
 * @param srcIdx 
 * @param targetIdx 
 */
function swap(srcIdx:number,targetIdx:number){
  const src = liCollection[srcIdx]
  const target = liCollection[targetIdx]

  const srcBook = src.querySelector("div")!
  const tgtBook = target.querySelector("div")!

  src.appendChild(tgtBook)
  target.appendChild(srcBook)
}