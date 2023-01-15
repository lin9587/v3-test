import type { RouteRecordRaw } from 'vue-router'
import Index from '../lesson/chapter1/index'

const chapter1: RouteRecordRaw[] = [
  {
    path: '/',
    component: Index,
    meta: {
      title: '第一个场景',
    },
  },
]

export default chapter1
