const addBtn = document.getElementById("add-note");
const LS_NOTES_KEY = 'notes';


(function loadNotes(){
    const notes = JSON.parse(localStorage.getItem(LS_NOTES_KEY))
    notes.forEach(note => addNote(note))
})()

addBtn.addEventListener('click',()=>addNote())

function addNote(text = ''){
    const note = document.createElement('div')
    note.classList.add("note")
    note.innerHTML = `
        <div class="tools">
            <button class="edit ${text ? '': 'hidden'}" title="编辑" ><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="save ${text ? 'hidden': ''}" title="保存"><i class="fa-solid fa-floppy-disk"></i></button>
            <button class="delete" title="删除"><i class="fa-solid fa-trash"></i></button>
            
        </div>
        <div class="main ${text ? '': 'hidden'}"></div>
        <textarea class="${text ? 'hidden': ''}"></textarea>
    `
    document.body.appendChild(note)

    const editBtn = note.querySelector('.edit')
    const saveBtn = note.querySelector('.save')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    textArea.value = text
    main.innerHTML = marked.parse(text)

    editBtn.addEventListener('click',()=>{
        changeShowAndEdit(main,textArea,editBtn,saveBtn)
    })

    saveBtn.addEventListener('click',()=>{
        main.innerHTML = marked.parse(textArea.value)
        changeShowAndEdit(main,textArea,editBtn,saveBtn)
    })

    deleteBtn.addEventListener('click',()=>{
        note.remove()
        updateLS()
    })

    textArea.addEventListener('input',updateLS)
    textArea.focus() // focus 新的textarea
}


function changeShowAndEdit(main,textArea,editBtn,saveBtn){
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
    editBtn.classList.toggle('hidden')
    saveBtn.classList.toggle('hidden')
}


function updateLS(){
   const textAreas =  document.querySelectorAll('textarea')
   const notes = []
   textAreas.forEach(note => notes.push(note.value))
   localStorage.setItem(LS_NOTES_KEY,JSON.stringify(notes))
}