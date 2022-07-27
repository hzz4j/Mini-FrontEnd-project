import './style.scss'
import handleContent from './ts/handleContent'

const contents = document.querySelectorAll(".content")! as NodeListOf<HTMLElement>

contents.forEach(content => handleContent(content))






