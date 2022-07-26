<script setup lang="ts">

import {onMounted,ref } from 'vue'

const content = ref("")

onMounted(()=>{
    window.addEventListener('keydown',event =>{
        content.value = `
            <div class="key">
                <span class="content">
                ${event.key === " " ? event.code : event.key}
                </span>
                <small>event.key</small>
            </div>
            
            <div class="key">
                <span class="content">${event.keyCode}</span>
                <small>event.keyCode</small>
            </div>
            
            <div class="key">
                <span class="content">${event.code}</span>
                <small>event.code</small>
            </div>
        `
        console.log(content.value.length)
    })
})

</script>

<template>
    <div v-if="content.length" class="container" v-html="content">
    </div>
    <div v-else class="container" >
        <div class="msg">
            Press any key to get the keyCode
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '../scss/_common_variables';
.share-section{
        border: 1px solid $blue;
        border-radius: 10px;
        box-shadow: 1px 1px 10px $blue;
    }
.container{
    display: flex;

    :deep(.key){
        @extend .share-section;
        position: relative;
        color: $dark;
        background-color: $white;
        margin: 20px;
        padding: 20px;
        min-width: 150px;
        text-align: center;
        font-weight: bold;


        .content{
            font-size: 1.5rem;
        }

        small{
            position: absolute;
            top: -30px;
            left: 0;
            width: 100%;
            color:$white;
            font-size: 14px;
        }
    }

    .msg{
        @extend .share-section;
        background-color: $white;
        color: $dark;
        padding: 20px;
        font-weight: bold;
    }
}
</style>