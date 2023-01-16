import type { RouteRecordRaw } from 'vue-router'
import Index from '../../views/h5'

const routes: RouteRecordRaw[] = [
  {
    path: '/h5/',
    component: Index,
    meta: {
      title: 'h5 home',
    },
  },
]

export default routes
