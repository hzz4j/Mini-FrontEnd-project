const toastsContainer = document.getElementById("toasts")
const notifiBtn = document.getElementById('notification')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five'
]

const types = [
    'info',
    'error',
    'success'
]

notifiBtn.addEventListener('click',() => {
    showNotification()
})

function showNotification(message = '',type = ''){
    const div = document.createElement('div')
    div.classList.add('toast')
    div.classList.add(type ? type : getRandomType()) // 添加不同的类型

    div.innerText = message ? message : getRandomMsg()
    toastsContainer.appendChild(div)

    setTimeout(() => {
        div.remove()
    }, 3000);
}


function getRandomMsg(){
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType(){
    return types[Math.floor(Math.random() * types.length)]
}
