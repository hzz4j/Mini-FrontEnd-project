<template>
  <div class="container">
    <global-header></global-header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import GlobalHeader from './views/GlobalHeader.vue'

import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    GlobalHeader
  }
})
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: sans-serif;
}
</style>