<template>
  <LiveUserFilter></LiveUserFilter>
</template>

<script lang="ts" setup>
import LiveUserFilter from "./components/LiveUserFilter.vue"
</script>

<style lang="scss">
@import './scss/__common_variables.scss';
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: $dark;
}

</style>