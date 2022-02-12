<!--
 * @Author: licl
 * @Date: 2022-02-12 09:30:28
 * @LastEditTime: 2022-02-12 15:26:35
 * @LastEditors: licl
 * @Description: 
-->
<template>
  <SnowBg></SnowBg>

  <div class="main-content">
    <LikeBtn></LikeBtn>
    <FlashBtn></FlashBtn>
  </div>
</template>


<script setup lang="ts">
import SnowBg from '../components/SnowBg/index.vue'
import LikeBtn from '../components/LikeBtn/index.vue'
import FlashBtn from '../components/FlashBtn/index.vue'
</script>


<style lang="scss">
.main-content {
  display: flex;
  justify-content: space-around;
  padding: 30px;
}
</style>