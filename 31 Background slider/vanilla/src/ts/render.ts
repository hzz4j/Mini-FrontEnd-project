import IMAGES from "./data";

/**
 * 渲染图片
 * @param container 
 * @returns 
 */
export default function renderDiv(container:HTMLDivElement) {
    IMAGES.forEach(image => {
        const div = document.createElement('div')
        div.classList.add('slide')
        div.style.backgroundImage = `url(${image})`
        container.appendChild(div)
    });

    document.body.style.backgroundImage = `url(${IMAGES[0]})`
    container.firstElementChild?.classList.add('active')
    return <NodeListOf<HTMLDivElement>>document.querySelectorAll('.slide')!
}