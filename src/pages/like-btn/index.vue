<script setup lang="ts">
import { ref } from 'vue'
import useMo from './hook/useMo'

const heartRef = ref(null)

const { heartStyle, isLike, start } = useMo(heartRef)

function handleClick() {
  if (isLike.value)
    isLike.value = false
  else
    start()
}
</script>

<template>
  <div class="like-btn" @click="handleClick">
    <div ref="heartRef" class="heart">
      <svg
        class="heart-svg"
        :style="heartStyle"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
      >
        <path
          d="M533.504 268.288q33.792-41.984 71.68-75.776 32.768-27.648 74.24-50.176t86.528-19.456q63.488 5.12 105.984 30.208t67.584 63.488 34.304 87.04 6.144 99.84-17.92 97.792-36.864 87.04-48.64 74.752-53.248 61.952q-40.96 41.984-85.504 78.336t-84.992 62.464-73.728 41.472-51.712 15.36q-20.48 1.024-52.224-14.336t-69.632-41.472-79.872-61.952-82.944-75.776q-26.624-25.6-57.344-59.392t-57.856-74.24-46.592-87.552-21.504-100.352 11.264-99.84 39.936-83.456 65.536-61.952 88.064-35.328q24.576-5.12 49.152-1.536t48.128 12.288 45.056 22.016 40.96 27.648q45.056 33.792 86.016 80.896z"
          p-id="2432"
        />
      </svg>
    </div>

    <div class="info">
      99喜欢
    </div>
  </div>
</template>

<style scoped lang="scss">
.like-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  cursor: pointer;
  border: 1px solid #e5e5e5;

  .heart {
    position: relative;
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }

  .heart-svg {
    transition: fill .3s, stroke .3s;

    stroke: #9a9daa;
    stroke-width: 80px;
    fill: transparent;
  }

  &:hover {
    .heart-svg {
      stroke: #e05b5b;
    }
  }

  .info{
    color: #000;
  }
}
</style>

<route lang="yaml">
meta:
  name: Like Button
  github: xxx
</route>
