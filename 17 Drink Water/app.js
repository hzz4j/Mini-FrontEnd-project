const smallCups = document.querySelectorAll('.cups .cup')
const percentage = document.getElementById('percentage')
const liters = document.getElementById('liters')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup,idx) => {
    cup.addEventListener('click',()=>hightlightCups(idx))
})


function hightlightCups(idx){

    if(smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }

    smallCups.forEach((cup,idx2) => {
        if(idx2 <= idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}


function updateBigCup(){
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length


    // update content
    liters.innerText = `${2 - fullCups / totalCups}L`
    percentage.innerText = `${fullCups / totalCups *100}%`
    

    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }else{
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
    } 
    
    if(fullCups === totalCups){
        // 结合使用
        remained.style.visibility = "hidden"
        remained.style.height = 0
    }else{
        // 有内容了height = 0不再生效
        remained.style.visibility = "visible"
    }
}