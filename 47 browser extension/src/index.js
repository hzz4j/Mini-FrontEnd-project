import axios from "axios";

// form fields
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');

const apiKey = document.querySelector('.api-key');

// results
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');

const API_TOKEN = "L7wUyoXF7ypDWm0WEfv3bfXgeSUkuMxw"
const API = "https://api.co2signal.com/v1/latest"
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    axios.get('https://api.electricitymap.org/v3/zones').then(r=>{
        console.log(r)
    })

    axios.get(API,{
        params: {
            countryCode: 'FR'
        },
        headers: {
            'auth-token': API_TOKEN
        }
    }).then(response => {
        console.log(response)
    })
   
})


