<!--
 * @Author: licl
 * @Date: 2022-02-12 15:55:04
 * @LastEditTime: 2022-02-12 16:10:39
 * @LastEditors: licl
 * @Description: 猩红之月 https://codepen.io/alphardex/pen/eYmGEGp
-->
<template>
  <div class="scarlet-moon"></div>
</template>

<script setup lang="ts">

</script>

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