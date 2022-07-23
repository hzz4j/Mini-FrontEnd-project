<template>
  <div class="todo-list-container">
    <BaseInput
      @addToDoItem="addItem"
    ></BaseInput>

    <ol>
      <TodoItem 
        v-for="item in todoItems"
        :key="item.id"
        :todoItem="item"
        @delete-item="deleteItem"
      ></TodoItem>
    </ol>
    
  </div>
</template>

<script lang="ts">

import TodoItem  from "@/components/ToDoItem.vue"
import BaseInput from '@/components/BaseInput.vue'
import Item from "@/types/TodoItems"

export default {
  components: {
    TodoItem,
    BaseInput
  },
  data(){
    return {
      todoItems: [{
        id: Date.now().toString(),
        title: 'Front End Knowlege',
        completed: false
      }] as Item[]
    }
  },
  methods:{
    deleteItem(item:Item){
      console.log(item)
      this.todoItems.splice(this.todoItems.indexOf(item),1)
    },
    addItem(title:string){
      const item:Item = {
        id: Date.now().toString(),
        title,
        completed:false
      }
      this.todoItems.push(item)
    }
  }

}
</script>

<style lang="scss" scoped>
  @import '@/scss/_common_variables.scss';

  .todo-list-container{
    margin: 30px auto;
    width: $size;
  
    ol{
      padding: 30px;
      list-style-type: disc;
    }
  }
</style>