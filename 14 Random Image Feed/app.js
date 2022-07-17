const container = document.querySelector(".container")
const BASIC_API = "https://source.unsplash.com/random/"
let rows = 10

// load images
for(i = 0;i < rows * 3;i++){
    const img = document.createElement('img')
    img.src = generateRandomLink() // 直接设置连接 : https://source.unsplash.com/random/301x302
    container.appendChild(img)
}

console.log(generateRandomLink())

function getRandomNr(){
    return Math.floor(Math.random() * 10) + 300
}

function getRandomSize(){
    return `${getRandomNr()}x${getRandomNr()}`
}

function generateRandomLink(){
    return BASIC_API + getRandomSize()
}