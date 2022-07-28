import IMAGES from "./images"

export default function renderUI(){
    const container = document.querySelector(".container")!
    for(let i=0; i<16; i++){

        const div = document.createElement('div')
        div.classList.add('card')
        div.setAttribute("data-idx",`${i}`)
        div.innerHTML = `
        <div class="front-view">
            <i class="fa-solid fa-question"></i>
        </div>
        <div class="back-view">
            <img src="${IMAGES[i%8]}" alt="">
        </div>

        `
        container.append(div)
    }
}
