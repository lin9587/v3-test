import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import Home from '../views/HomeView'

import h5 from './h5'
import learn from './learn'
import threejs from './threejs'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'home',
    },
  },
  ...learn,
  ...h5,
  ...threejs,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(to => {
  document.title = to.meta.title as string
})

export default router
