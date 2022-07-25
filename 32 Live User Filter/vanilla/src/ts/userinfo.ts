
import UserInfo from "./types"

export default function createUserLiElement(user: UserInfo){
    const li = document.createElement('li')
    li.classList.add('userinfo')
    li.innerHTML = `
      <img src="${user.img}" alt="">
      <div>
        <h4 class="username">${user.name}</h4>
        <p class="location">${user.location}</p>
      </div>
    `
    return li
}
