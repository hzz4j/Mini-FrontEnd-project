const pannels = document.querySelectorAll('.pannel')! as NodeListOf<HTMLElement>;
const activeCls = 'active'

pannels.forEach(pannel => {
    pannel.addEventListener('click', ()=>{

        removeAllActive()
        pannel.classList.add(activeCls)
    })
})

function removeAllActive() {
    pannels.forEach(pannel => {
        pannel.classList.remove(activeCls)
    })
}
