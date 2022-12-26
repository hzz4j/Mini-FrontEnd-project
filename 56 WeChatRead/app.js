const text = `
朋友,
是她演技太好,
还是你太单纯,
起了红粉飘零的怜惜,
你们的关系可以讲点感情,
但毕竟这是一场交易,
抽完这支烟,
收心吧
`;

const words = text.split(",");
const linesDiv = createDiv();
let arrayIndex = 0;
let charIndex = 1;
let allText = "";
let currentLine = linesDiv[arrayIndex];
const millseconds = 10000 / text.length;

function createDiv() {
  const word = document.getElementById("word");
  let allDivs = [];
  for (let i = words.length; i > 0; i--) {
    let el = document.createElement("div");
    el.classList.add("line");
    word.appendChild(el);
    allDivs.push(el);
  }
  return allDivs;
}

function showText() {
  let refresh = setInterval(() => {
    let content = words[arrayIndex].substring(0, charIndex);
    currentLine.innerText = content;

    if (content.length === words[arrayIndex].length) {
      allText += content;
      if (arrayIndex === words.length - 1) {
        // 清空内容重新书写
        //   linesDiv.forEach((div) => (div.innerText = ""));
        //   charIndex = 0;
        //   arrayIndex = 0;
        // 停止
        clearInterval(refresh);
      } else {
        // next line
        arrayIndex++;
        charIndex = 0;
      }
    }
    currentLine = linesDiv[arrayIndex];
    charIndex++;
  }, millseconds);
}

window.onload = () => {
  showText();
};
