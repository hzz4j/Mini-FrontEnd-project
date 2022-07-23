<template>
  <li class="todo-item">
    <span class="todo-item-text">{{todoItem.title}}</span>
    <button class="btn" @click="$emit('deleteItem',todoItem)">X</button>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type TodoItem from '@/types/TodoItems'

export default defineComponent({
    props: {
        todoItem: {
            type: Object as PropType<TodoItem>,
            required: true
        }
    },
    emits: ['deleteItem']
})
</script>

<style lang="scss" scoped>

    @import '@/scss/common_variables';
    .todo-item{
        margin-top: 10px;

        .todo-item-text{
            font-size: 1.2rem;
        }

        .btn{
            margin-left: 10px;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            color: #fff;
            background-color: $vue-blue;
            cursor: pointer;

            &:active{
                transform: scale(0.93);
            }
        }
    }
</style>