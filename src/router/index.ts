/*
 * @Author: licl
 * @Date: 2021-11-25 11:45:53
 * @LastEditTime: 2022-02-12 09:32:49
 * @LastEditors: licl
 * @Description: 路由
 */

import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../pages/index.vue')
  },
  {
    path: '/snow',
    component: () => import('../pages/snow/index.vue'),
    meta: {
      title: '雪'
    }
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.afterEach((to) => {
  const { meta } = to

  const title = (meta.title as string) || 'css'

  window.document.title = title
})

export default router
