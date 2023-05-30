<!-- @link: https://codepen.io/alphardex/pen/eYmGEGp -->
<script setup lang="ts">

</script>

<template>
  <div class="scarlet-moon" />
</template>

<style lang="scss" scoped>
.scarlet-moon {
  position: relative;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  background-color: #000;
  box-shadow: inset 8px -8px crimson;
  animation: spin 2s linear infinite;

  &::before,
  &::after {
    position: absolute;
    border-radius: inherit;
    width: 100%;
    height: 100%;
    background-color: inherit;
    box-shadow: inherit;
    content: "";
  }

  &::before {
    filter: blur(5px);
  }

  &::after {
    filter: blur(10px);
  }
}

@keyframes spin {
  0% {
    transform: rotate(1turn);
  }
}
</style>
