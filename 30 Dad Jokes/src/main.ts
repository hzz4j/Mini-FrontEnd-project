import './style.scss'

import { API_URL,config } from './ts/config'
import type {Joke} from './ts/config'

const btn = document.getElementById('btn')!
const jokeDiv = document.getElementById('joke')!

btn.addEventListener('click',getJoke)



getJoke()

async function getJoke(){
  const resp = await fetch(API_URL,config)
  const data = await resp.json() as Joke
  console.log(data.joke);
  jokeDiv.innerHTML = data.joke
}