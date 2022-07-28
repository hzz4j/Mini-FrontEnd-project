<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
    idx: {
        type: Number,
        required: true
    },
    book: {
        type:String,
        required: true
    }
})
// 普通定义
// defineEmits(['change'])
// 定义事件，并带有参数
const emit = defineEmits<{
    (e:'change',srcIdx:number,targetIdx:number):void  // 方法签名
    }>()

const counter = ref(0)
const isActive = ref(false)

function dragStart(event:DragEvent){
    event.dataTransfer?.setData("text/plain", `${props.idx}`)
    console.log("start");
}

function dragEnd(){
    console.log("drag end");
}

function dragEnter(){
    counter.value++
    isActive.value = true
    console.log("drag enter",counter.value);
}
function dragOver(){
    console.log("Over");    
}
function dragLeave(){
    counter.value--
    if(!counter.value){
        isActive.value = false
    }
    console.log("drag leave");
}
function dragDrop(event:DragEvent){
    const srcIdxStr = event.dataTransfer?.getData("text/plain")
    let srcIdx = 0
    if(typeof srcIdxStr === 'string'){
        srcIdx = parseInt(srcIdxStr)
        console.log(srcIdx,props.idx);
        emit("change",srcIdx,props.idx)
    }
    counter.value = 0
    isActive.value = false
    console.log("drag drop");
}
</script>

<template>
    <li class="book"
        :data-idx="idx" 
        :data-counter="counter"
        :class="{hover: isActive}"
        @dragenter="dragEnter"
        @dragover.prevent="dragOver"
        @dragleave="dragLeave"
        @drop="dragDrop">

        <span class="number">{{idx+1}}</span>
        <div draggable="true" 
            class="draggable"
            @dragstart="dragStart"
            @dragend="dragEnd">

          <p class="name">{{book}}</p>
          <font-awesome-icon icon="fa-solid fa-grip-lines" />
        </div>
    </li>
</template>

<style lang="scss" scoped>

@import '../scss/_common_variables';
.book{
    display: flex;
    background-color: $second-color;
    color: #000;
    border: 1px solid #888;
    
    .number{
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 50px;
        font-size: 1.5rem;
        background-color: $third-color;
    }


    &.right .draggable .name{
        color: green;
    }

    &.error .draggable .name{
        color: red;
    }

    .draggable{
        width: 200px;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: move;
    }

    &.hover div{
        background-color: #888;
    }
}
</style>