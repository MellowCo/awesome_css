<script setup lang="ts">
</script>

<template>
  <div class="logo" />
</template>

<style scoped>
.logo {
  width: 100px;
  height: 100px;
  background-size: cover;
  background-image: url('./logo.png');

  &:hover{
    filter: drop-shadow(0 0 2em #249b73);
  }
}
</style>

<route lang="yaml">
meta:
  name: Drop Shadow
  github: xxx
</route>
