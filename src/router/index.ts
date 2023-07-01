import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  // 路由配置规则
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
