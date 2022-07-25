import './style.scss'

const counters = document.querySelectorAll(".counter")!

counters.forEach(counter => {
  counter.innerHTML = "0"
  const target = +counter.getAttribute("data-target")!
  const step = target / 200
  let val = 0

  // 这段函数设置在这里的意义是方便访问外边的变量
  const updateNumber = ()=>{
    val += step
    if(val<target){
      counter.innerHTML = val+""
      // 递归调用 setTimeout这里并不会第一次阻塞下一次的循环，程序设置完定时器后继续执行了
      setTimeout(updateNumber,1)
    }else{
      counter.innerHTML = target+""
    }
  }
  
  updateNumber()
})
