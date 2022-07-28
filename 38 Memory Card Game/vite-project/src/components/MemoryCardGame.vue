

<script setup lang="ts">
import Card from '@/components/Card.vue'
import IMAGES from '@/ts/images'

import { onMounted, reactive } from 'vue'

const RANDIMAGES:string[] = reactive([])

onMounted(()=>{
    RANDIMAGES.push(...shuffle())
})

function shuffle(){
    return [
        ...[...IMAGES].sort(()=>Math.random()-0.5),
        ...[...IMAGES].sort(()=>Math.random()-0.5)
    ]
}

</script>


<template>
  <div class="container">
    <Card v-for="(image,idx) in RANDIMAGES"
        :img-url="image"
        :key="idx">
    </Card>
  </div>
</template>


<style lang="scss" scoped>
@import '@/scss/__common_variables.scss';
.container{
    background-color: $second-color;
    height: 400px;
    width: 400px;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(255,255,255,0.1);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>