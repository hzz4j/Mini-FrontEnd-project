<template>
  <input 
    type="text" 
    name="text" 
    class="text"
    id="text"
    placeholder="Add todo"
    @keyup.enter="addTodoItem">
</template>

<script lang="ts">
    export default {
        emits:['addToDoItem'],
        methods:{
            addTodoItem(event:Event){
                const input = event.target as HTMLInputElement
                console.log(input.value)
                this.$emit('addToDoItem',input.value)
                input.value = ''
            }
        }
    }
</script>

<style lang="scss" scoped>

    @import '@/scss/common_variables';

    input{
        width: 100%;
        padding: 8px 10px;
        font-size: 1rem;
        border: 1px solid $vue-blue;

        &:focus{
            outline:none;
        }
    }

</style>