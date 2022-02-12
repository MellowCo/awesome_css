<!--
 * @Author: licl
 * @Date: 2022-02-12 09:30:28
 * @LastEditTime: 2022-02-12 15:58:22
 * @LastEditors: licl
 * @Description: 
-->
<template>
  <SnowBg></SnowBg>

  <div class="main-content">
    <LikeBtn></LikeBtn>
    <FlashBtn></FlashBtn>
    <ScarletMoon></ScarletMoon>
  </div>
</template>


<script setup lang="ts">
import SnowBg from '../components/SnowBg/index.vue'
import LikeBtn from '../components/LikeBtn/index.vue'
import FlashBtn from '../components/FlashBtn/index.vue'
import ScarletMoon from '../components/ScarletMoon/index.vue'
</script>


<style lang="scss">
.main-content {
  display: flex;
  justify-content: space-around;
  padding: 30px;
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    width: 100px;
    height: 40px;
  }
}
</style>