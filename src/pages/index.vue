<!--
 * @Author: licl
 * @Date: 2022-02-12 09:30:28
 * @LastEditTime: 2022-02-12 15:58:22
 * @LastEditors: licl
 * @Description:
-->
<script setup lang="ts">
import SnowBg from '../components/SnowBg/index.vue'
import LikeBtn from '../components/LikeBtn/index.vue'
import FlashBtn from '../components/FlashBtn/index.vue'
import ScarletMoon from '../components/ScarletMoon/index.vue'
</script>

<template>
  <SnowBg />

  <div class="main-content">
    <LikeBtn />
    <FlashBtn />
    <ScarletMoon />
  </div>
</template>

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
