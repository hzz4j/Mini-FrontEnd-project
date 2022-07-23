/**
 * Vue will automatically use the container's innerHTML as the template 
 * if the root component does not already have a template option.
 */
// root component
import { createApp } from 'vue'
import './app.scss'
import TodoItem from '@/types/TodoItems'



const app = createApp({
  data() {
    return {
      todoItems: [{
        id: Date.now().toString(),
        title: 'Learn front end knowledge',
        completed: false
      }] as TodoItem[]
    }
  },
  methods: {
    addTodo(e:Event){
      const inputEl = e.target as HTMLInputElement
      const todoItem:TodoItem = {
        id: Date.now().toString(),
        title: inputEl.value,
        completed: false
      }
      this.todoItems.push(todoItem)
      inputEl.value = ''
    },
    deleteTodoItem(todoItem:TodoItem){
      console.log(todoItem);
      if(todoItem){
        this.todoItems.splice(this.todoItems.indexOf(todoItem),1)
      }
    }
  }

})

app.mount('#app')