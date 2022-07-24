const API_URL =  "https://icanhazdadjoke.com"
const config = {
    headers: {
        Accept: 'application/json'
    }
}

interface Joke{
    id:string,
    joke:string,
    status:number
  }


export {
    API_URL,
    config
}

export type{
    Joke
}