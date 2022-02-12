<!--
 * @Author: licl
 * @Date: 2022-02-12 09:30:28
 * @LastEditTime: 2022-02-12 10:47:39
 * @LastEditors: licl
 * @Description: 
-->
<template>
  <SnowBg></SnowBg>

  <div class="content">
    <LikeBtn></LikeBtn>
  </div>
</template>


<script setup lang="ts">
import SnowBg from '../components/SnowBg/index.vue'
import LikeBtn from '../components/LikeBtn/index.vue'
</script>


<style scoped>
.content {
  padding: 30px;
}
</style>