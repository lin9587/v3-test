import type { RouteRecordRaw } from 'vue-router'
import Index from '../../views/admin'

const routes: RouteRecordRaw[] = [
  {
    path: '/admin/',
    component: Index,
    meta: {
      title: 'admin home',
    },
  },
]

export default routes
