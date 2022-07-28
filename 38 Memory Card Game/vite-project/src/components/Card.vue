<script setup lang="ts">

defineProps({
    imgUrl: {
        type: String,
        required: true
    }
})

</script>


<template>
  <div class="card">
    <div class="front-view">
        <font-awesome-icon icon="fa-solid fa-question" />
    </div>
    <div class="back-view">
        <img :src="imgUrl" alt="">
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>