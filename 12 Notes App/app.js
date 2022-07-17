const addBtn = document.getElementById("add-note");
const LS_NOTES_KEY = 'notes';


(function loadNotes(){
    const notes = JSON.parse(localStorage.getItem(LS_NOTES_KEY))
    if(notes && notes.length){
        notes.forEach(note => addNote(note))
        console.log('first in');
        console.log(notes.length);
    }else{
        // add demo
        const demo =  `
### 静默
![coding](https://avatars.githubusercontent.com/u/26297672?s=40&v=4) 
### Demo
- supporr markdown syntax
- This is a demo

----------

### Table

| Name   |                           website                            |
| ------ | :----------------------------------------------------------: |
| Blog   |        [Q10Viking Blog](https://q10viking.github.io)         |
| Github | [Source Code](https://github.com/Q10Viking/Mini-FrontEnd-project/tree/main/12%20Notes%20App) |
----------

### 诗句

我打碎了夕阳，目睹了世间的荒凉。愿寒冷的时光，不再侵蚀脆弱的脸庞。 我打碎了夕阳，游遍四海八荒，不知何时，你已在我心上。归来，你已是他的新娘。 我打碎了夕阳，碎片落在了我的身上，覆盖了我年少轻狂的模样，也浇灭了想去远方流浪的幻想。 我打碎了夕阳，哭得肝肠寸断，因为里面有我，曾许下的诗和远方
        ` 
        addNote(demo)
        console.log('second in');
    }
    
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