const words = ['我打碎了夕阳','洒在你身上','你满是圣光','我黯然退场']
const linesDiv = document.querySelectorAll(".line")

const word = document.getElementById('word')
// ,'洒在你身上','你满是圣光','我黯然退场'
let arrayIndex = 0;
let charIndex = 1;
let allText = ''

let currentLine = linesDiv[arrayIndex]

let refresh = setInterval(() => {
    let content = words[arrayIndex].substring(0,charIndex);
    currentLine.innerText = content

    if(content.length === words[arrayIndex].length){
        allText += content;
        if(arrayIndex === words.length-1){
            // 清空内容重新书写
            linesDiv.forEach(div => div.innerText='')
            charIndex = 0;
            arrayIndex = 0;
            // clearInterval(refresh)
        }else{
            // next line
            arrayIndex++
            charIndex = 0;
        }
    }
    currentLine = linesDiv[arrayIndex]
    charIndex++;
    
}, 300);


