import type { RouteRecordRaw } from 'vue-router'
import Index from '../../views/threejs/chapter1'

const chapter1: RouteRecordRaw[] = [
  {
    path: '/threejs/',
    component: Index,
    meta: {
      title: '第一个场景',
    },
  },
]

export default chapter1
