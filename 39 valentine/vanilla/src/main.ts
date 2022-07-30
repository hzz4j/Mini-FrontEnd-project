import './style.scss'
import { codesample } from './ts/codesample'
import Prism from 'prismjs'
import 'prismjs/components/prism-java' // Language
import 'prismjs/themes/prism-okaidia.css' // Theme
import showCelebrate from './ts/celebrate'

const codeEls = document.querySelectorAll<HTMLElement>('code')!
const showBoxEl = document.getElementById("show-box")! as HTMLElement
const codeBoxEl = document.getElementById("code-box")! as HTMLElement
const styleEl = document.getElementById("update")! as HTMLElement
const hearts = document.querySelectorAll(".heart")!



const PrismLanguages = [Prism.languages.java,Prism.languages.javascript,Prism.languages.css]
const langTypes = ['java','javascript','css']
let start = false
// codeEls.forEach(async(codeEl,idx) => {
  
// })

for(let idx=0;idx<codeEls.length;idx++){
  if(idx === 2){
    codeBoxEl.scrollTop = 1000000
    handleCss(idx,codesample[idx])
  }else{
    // codeEl.innerHTML = Prism.highlight(codesample[idx],PrismLanguages[idx],langTypes[idx])
    await handleCode(idx,codesample[idx],false)
  }
}


async function handleCss(idx:number,code:string){
  await handleCode(idx,code,true)
  // 散花
  showCelebrate()
  hearts.forEach((heart)=>{
    heart.addEventListener('click',showCelebrate)
  })
}




/**
 * 
 * @param idx 
 * @param code 代码
 * @param isCss 是否是处理css
 * @returns 
 */
function handleCode(idx:number,code:string,isCss:boolean){ 
  let line = 0
  const showCode = (index:number) => new Promise(resolve => {
    let char = code[index]
    if(index <= code.length -1){
      if('\n' === char){
        line++
        if(line > 2 && !start && isCss){
          // 添加box
          start = true
          showBoxEl.classList.add('show')
        }
        codeBoxEl.scrollTop = 1000000
      }
      let t = code.substring(0,index+1)
      codeEls[idx].innerHTML = Prism.highlight(t,PrismLanguages[idx],langTypes[idx])
      if(isCss){
        styleEl.innerHTML = t
      }
      // 代码输出速度
      setTimeout(()=> resolve(showCode(++index)),30)
    }else{
      console.log("finished");
      resolve(null)
    }
  })

  return showCode(0)
}