import './style.scss'

const usernameInput = document.getElementById("username")! as HTMLInputElement
const emailInput = document.getElementById("email")! as HTMLInputElement
const passwordInput = document.getElementById("password")! as HTMLInputElement
const configPWdInput = document.getElementById("password2")! as HTMLInputElement
const submitButton = document.getElementById("submit")! as HTMLButtonElement


submitButton.addEventListener("click", e => {
    e.preventDefault()
    console.log("form submit")
    checkRequire([usernameInput,emailInput,passwordInput,configPWdInput])
    checkEmail(emailInput)
    checkLength(usernameInput,2,5)
    checkLength(passwordInput,2,5)
    checkMatch(passwordInput,configPWdInput)
})




function checkRequire(inputs:HTMLInputElement[]){
    inputs.forEach(input => {
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`)
        }else{
            showSuccess(input)
        }
    })
}

function checkEmail(input:HTMLInputElement){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())){
        showSuccess(input)
  }else{
        showError(input,"Email is not valid")
  }
}

function checkLength(input:HTMLInputElement,min:number,max:number){
    if(input.value.trim().length < min){
        showError(input,`${getFieldName(input)} must be at least ${min} character`)
    }

    if(input.value.trim().length > max){
        showError(input,`${getFieldName(input)} must less than ${max} character`)
    }
}

function checkMatch(input1:HTMLInputElement,input2:HTMLInputElement){
    if(input1.value.trim() !== input2.value.trim()){
        showError(input2,"Not match")
    }
}


function getFieldName(input:HTMLInputElement):string{
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}


function showError(input: HTMLInputElement,errorMsg:string){
    const formContoller = input.parentElement
    if(formContoller){
        formContoller.className = "form-controller error"
        const small = formContoller.querySelector("small")! as HTMLElement
        small.innerText = errorMsg
    }
}

function showSuccess(input: HTMLInputElement){
    const formContoller = input.parentElement
    if(formContoller){
        formContoller.className = "form-controller success"
    }
}



