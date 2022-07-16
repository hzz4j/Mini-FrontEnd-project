const menus = document.querySelectorAll(".single-menu")


function activeMenu(){
    menus.forEach(menu => menu.classList.remove('active'))
    this.classList.add('active')
}

menus.forEach(menu => {
    menu.addEventListener('click',activeMenu)
})