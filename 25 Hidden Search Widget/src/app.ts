const search = document.querySelector('.search')! as HTMLElement
const input = document.querySelector('.input')! as HTMLElement
const button = document.querySelector('.btn')! as HTMLElement

const active = 'active'

button.addEventListener('click', () => {
   search.classList.toggle(active)
   input.focus()
})