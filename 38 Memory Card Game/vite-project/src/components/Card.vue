<script setup lang="ts">
import { reactive, ref } from 'vue';


const props = defineProps({
    imgUrl: {
        type: String,
        required: true
    },
    idx:{
      type:Number,
      required: true
    },
    isClickable: Boolean
})


const emit = defineEmits<{
  (e: 'active',idx:number):void
}>()

const classObject = reactive({
  flip: false,
  shake: false
})


const id = ref(props.idx)

function flipCard(){
  if(props.isClickable && !classObject.flip){
    classObject.flip = true
    emit('active',props.idx)
  }
}

function shakeCard(){
  classObject.shake = true
}

function closeCard(){
  classObject.shake = false
  classObject.flip = false
}


function callMeTest(){
  console.log("call me ",id.value)
}

/**
 * 定义子组件暴露的样子
 */
defineExpose({
  id: id.value,
  shakeCard,
  closeCard,
  callMeTest
})

</script>


<template>
  <div class="card" 
    :class="classObject"
    @click="flipCard">

    <div class="front-view">
        <font-awesome-icon icon="fa-solid fa-question" />
    </div>
    <div class="back-view">
        <img :src="imgUrl" alt="">
    </div>
  </div>
</template>


<style lang="scss" scoped>
.card{
      position: relative;
      height: calc(100%/4 - 10px);
      width: calc(100%/4 - 10px);
  

      .view{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width:100%;
        height: 100%;
        backface-visibility: hidden; // 反转到背面隐藏
        background-color: #fff;
        box-shadow: 1px 3px 10px rgba(0,0,0,0.1);
        transition: transform 0.2s linear;
        pointer-events: none; // 很有用
        user-select: none;
      }

      

      .front-view{
        @extend .view;
        font-size: 2rem;
        color: #3eaf7c;
        transform: rotateY(0deg)
      }

      .back-view{
        @extend .view;
        
        transform: rotateY(180deg); // 反转到背面隐藏
        img{
          width: 45px;
          height: 45px;
        }
      }

      // 点击翻牌
      &.flip{
        .front-view{
          transform: rotateY(180deg);
        }

        .back-view{
          transform: rotateY(0deg);
        }
      }

      // 抖动
      &.shake{
        animation: shake 0.35s ease-in-out;

        @keyframes shake {
          0%,100%{
            transform: translateX(0);
          }
          20%{
            transform: translateX(12px);
          }
          40%{
            transform: translateX(-12px);
          }
          60%{
            transform: translateX(5px);
          }
          80%{
            transform: translateX(-5px);
          }

        }
      }
    }
</style>