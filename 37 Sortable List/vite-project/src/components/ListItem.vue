<script setup lang="ts">
import { ref } from 'vue'
defineProps({
    idx: {
        type: Number,
        required: true
    },
    book: {
        type:String,
        required: true
    }
})

const counter = ref(0)


function dragStart(){
    console.log("start");
    
}

</script>

<template>
    <li class="book"
        :data-idx="idx" 
        :data-counter="counter">

        <span class="number">{{idx+1}}</span>
        <div draggable="true" 
            class="draggable"
            @dragstart="dragStart">

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

    div{
        width: 200px;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: move;

        .name{
            &.right{
                color: green;
            }

            &.error{
                color: red;
            }
        }
    }

    &.hover div{
        background-color: #888;
    }
}
</style>