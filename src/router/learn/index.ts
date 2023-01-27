import type { RouteRecordRaw } from 'vue-router'
import Index from '../../views/learn'

const routes: RouteRecordRaw[] = [
  {
    path: '/learn/',
    component: Index,
    meta: {
      title: 'learn',
    },
  },
]

export default routes
