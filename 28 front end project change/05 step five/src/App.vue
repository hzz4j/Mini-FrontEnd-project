<template>
    <div>
        <h1>TodoList App</h1>
        <button @click="counter++">{{counter}}</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            counter: 0
        }
    }
}
</script>

<style lang="scss">
h1{
    color: red;
}
</style>