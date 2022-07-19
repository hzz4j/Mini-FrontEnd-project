const bgSection = document.querySelector('.bg')
const loadingText = document.querySelector('.loading-text')

let loaded = 0
let flag = setInterval(blurring,30)

function blurring() {
    loaded++
    if(loaded > 99){
        loaded = 100
        clearInterval(flag)
    }

    loadingText.innerText = `${loaded}%`
    // map [0,100]->[1,0]
    loadingText.style.opacity = `${scale(loaded,0,100,1,0)}`
    // map [0,100]->[30,0]
    bgSection.style.filter = `blur(${scale(loaded,0,100,30,0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}