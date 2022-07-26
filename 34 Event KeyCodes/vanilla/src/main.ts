import './style.scss'

const container = document.getElementById("container")!

window.addEventListener('keydown',event =>{
    
    container.innerHTML = `
        <div class="key">
            <span class="content">
            ${event.key === " " ? event.code : event.key}
            </span>
            <small>event.key</small>
        </div>
        
        <div class="key">
            <span class="content">${event.keyCode}</span>
            <small>event.keyCode</small>
        </div>
        
        <div class="key">
            <span class="content">${event.code}</span>
            <small>event.code</small>
        </div>
    `
    console.log(event)
})


