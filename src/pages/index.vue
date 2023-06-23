<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

defineOptions({
  name: 'IndexPage',
})

const router = useRouter()
const routes = router.options.routes.filter(route => !['index', 'all'].includes(route.name as string))

function go(route: RouteRecordRaw) {
  router.push(route.path)
}
</script>

<template>
  <div mx-auto max-w-300 flex flex-col items-center justify-center>
    <div mb-5 flex justify-center>
      <div
        v-for="(route, index) in routes"
        :key="index"
        p="x-4 y-2"
        m="2"
        cursor-pointer rounded
        op="75 hover:100"
        class="transition-all duration-200 ease-out hover:bg-#888/11"
        @click="go(route)"
      >
        {{ `${index + 1}. ${route.meta?.name || 'Unknown route'}` }}
      </div>
    </div>
  </div>
</template>
