


const icon = ['🎉','❤️']
const { innerWidth, innerHeight } = window;

function getRandomIcon(){
    let idx = Math.floor(Math.random()*icon.length)
    return icon[idx]
}

function randomNumber(start:number, end:number) {
    return start + Math.random() * (end - start);
}

export default function showCelebrate(){
    for(let i = 0;i< 30;i++){
        let unit = document.createElement('div')! as HTMLElement
        unit.classList.add('celebrate')
        unit.innerHTML = getRandomIcon()
        unit.style.top = `${-50}px`
        unit.style.left = `${randomNumber(0,innerWidth)}px`
        unit.style.transform = `rotateZ(${randomNumber(-90,0)}deg)`
        document.body.appendChild(unit)

        setTimeout(()=>{
            // remove
            unit.style.top = `${innerHeight}px`
            unit.style.left = `${randomNumber(0,innerWidth)}px`
        },randomNumber(0,3000))

        //  remove
        setTimeout(()=>{
            unit.remove()
        },8000)
    }
}