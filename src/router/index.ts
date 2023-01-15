import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import chapter1 from './chapter1'

const routes: RouteRecordRaw[] = [...chapter1]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(to => {
  document.title = to.meta.title as string
})

export default router
