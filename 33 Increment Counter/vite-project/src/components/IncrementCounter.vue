

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const bilibili = ref<HTMLParamElement | null>(null)
const weibo = ref<HTMLParamElement | null>(null)
const tiktok = ref<HTMLParamElement | null>(null)


onMounted(()=>{
    const arr = [
        {
            el: bilibili.value!,
            target: +bilibili.value?.getAttribute("data-target")!
        },
        {
            el: weibo.value!,
            target: +weibo.value?.getAttribute("data-target")!
        },
        {
            el: tiktok.value!,
            target: +tiktok.value?.getAttribute("data-target")!
        }
    ]


    arr.forEach(item => {

        let step = item.target / 200
        let val = 0

        const updateCounter = ()=>{
            val += step
            if(val<item.target){
                item.el.textContent = val.toString()
                setTimeout(updateCounter,1)
            }else{
                item.el.textContent = item.target.toString()
            }
        }

        updateCounter()
    })
    
})



</script>


<template>
  <div class="container">
      <div class="item">
        <font-awesome-icon icon="fa-brands fa-bilibili" class="icon"/>
        <p class="counter" 
            data-target="12000"
            ref="bilibili"></p>
        <span>Bilibili Subscribers</span>
      </div>

      <div class="item">
        <font-awesome-icon icon="fa-brands fa-weibo" class="icon"/>
        <p class="counter" 
            data-target="5000"
            ref="weibo" ></p>
        <span>Weibo Followers</span>
      </div>

      <div class="item">
        <font-awesome-icon icon="fa-brands fa-tiktok" class="icon"/>
        <p class="counter" 
            data-target="23000"
            ref="tiktok"></p>
        <span>Tiktok Fans</span>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.container{
    display: flex;
    flex-direction: row;

    @media(max-width: 580px){
      flex-direction: column;
    }

    .item{
      margin: 30px 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .icon{
        font-size: 2rem;
      }

      .counter{
        margin: 20px 0 10px;
        font-size: 2.5rem;
      }
    }
  }
</style>