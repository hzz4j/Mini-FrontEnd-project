<template>
    <h1 class="title">Todo List App Demo</h1>
    <TodoList></TodoList>
</template>

<script lang="ts">
import TodoList from '@/components/TodoList.vue'

export default {
    components: {
        TodoList
    }
}
</script>

<style lang="scss">

    @import '@/scss/common_variables';

    *{
        margin: 0;
        padding: 0;
    }

    body{
        background-color: $vue-green;
    }
</style>

<style lang="scss" scoped>
    h1{
        width: 100%;
        margin: 20px;
        text-align: center;
    }
</style>