<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import MemoryCardGame from './components/MemoryCardGame.vue'
</script>

<template>
    <div class="title">
        <h2>Memory Card Game</h2>
        <small>Using Vue3+SCSS+Typescript knowlege</small>
    </div>
    <MemoryCardGame></MemoryCardGame>
</template>

<style lang="scss" scoped>

.title{
    position: relative;
    top: -20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:20px;
    color: white;

    h2{
        text-align: center; 
        margin: 20px;
    }
}
 
</style>
