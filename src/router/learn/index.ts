import type { RouteRecordRaw } from 'vue-router'
import Setup from '../../views/learn/01_src_初识setup/index.vue'
import Ref from '../../views/learn/02_src_ref函数/index.vue'
import Reactive from '../../views/learn/03_src_reactive函数/index.vue'
import SetupRq from '../../views/learn/05_src_setup两个注意点/index.vue'
import Computed from '../../views/learn/06_src_computed/index.vue'
import Watch from '../../views/learn/07_src_watch/index.vue'
import WatchRefvsReactive from '../../views/learn/08_src_watchRefvsReactive/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/learn/',
    component: Setup,
    meta: {
      title: 'learn',
    },
  },
  {
    path: '/ref/',
    component: Ref,
    meta: {
      title: 'ref',
    },
  },
  {
    path: '/reactive/',
    component: Reactive,
    meta: {
      title: 'reactive',
    },
  },
  {
    path: '/setupRq/',
    component: SetupRq,
    meta: {
      title: 'setupRq',
    },
  },
  {
    path: '/computed/',
    component: Computed,
    meta: {
      title: 'computed',
    },
  },
  {
    path: '/watch/',
    component: Watch,
    meta: {
      title: 'watch',
    },
  },
  {
    path: '/watchRefvsReactive/',
    component: WatchRefvsReactive,
    meta: {
      title: 'watchRefvsReactive',
    },
  },
]

export default routes
