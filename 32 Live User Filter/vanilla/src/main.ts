import './style.scss'

import RAND_USER_API from './ts/config'
import UserInfo from './ts/types'
import createUserLiElement from './ts/userinfo'

const search = document.getElementById('search')!
const userCollection:HTMLLIElement[] = []


renderUserList()
search.addEventListener('input',(e:Event)=>{
    let input = e.target as HTMLInputElement
    filterUser(input.value)
})


/**
 * 过滤用户
 * @param content 用户输入的内容
 */
function filterUser(content: string){
  content = content.trim().toLowerCase()

  userCollection.forEach(userInfo => {
    let usernameEl = userInfo.querySelector('.username')!
    if(usernameEl.textContent?.trim().toLocaleLowerCase()
        .includes(content)){
          userInfo.classList.remove('hidden')
    }else{
      userInfo.classList.add('hidden')
    }  
  })
}

/**
 * 获取用户列表
 * @returns 用户列表
 */
async function getUserList<T>(){
    const res = await fetch(RAND_USER_API)
    const {results} = await res.json() // 解构
    console.log(results);
    
    return results as T
}

/**
 * 渲染页面
 */
async function renderUserList(){
  const userList = await getUserList<any[]>()
  const userListEl = document.getElementById('userlist')!
  userListEl.innerHTML = ''
  userList.forEach(user => {

    let userInfo:UserInfo = {
      img: user.picture.large,
      name: user.name.first,
      location: user.location.city
    }

    let liEl = createUserLiElement(userInfo)
    userListEl.appendChild(liEl)
    userCollection.push(liEl)
  })
}

