
const inputText = document.getElementById('text')!
const todoList = document.getElementById('todo-list')!
const liEls = todoList.querySelectorAll('.todo-item')! as NodeListOf<HTMLElement>

liEls.forEach(li =>addBtnClickListener(li))

// 检测键盘事件
inputText.addEventListener('keypress',e => {
    if(!e) return
    const target = e.target as HTMLInputElement;
    //console.log('keypress: ',e.key);
    if(e.key === 'Enter'){
        const liEl = createLiElment(target.value)
        todoList.appendChild(liEl)
        // clear
        target.value = ''
    }
})


function createLiElment(text:string):HTMLLIElement{
    const li = document.createElement('li')
    li.classList.add('todo-item')
    li.innerHTML = `
        <span class="todo-item-text">${text}</span>
        <button class="btn">
            X
        </button>
    `
    addBtnClickListener(li)
    return li;
}

function addBtnClickListener(li:HTMLElement){
    if(li){
        li.querySelector('.btn')!.addEventListener('click',()=>{
            li.remove()
        })
    }
}