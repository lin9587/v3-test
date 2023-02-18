<template>
  <div class="app">
    <h3>我是APP组件</h3>
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <div>nihao</div>
      </template>
    </Suspense>
  </div>
</template>
<script>
// import Child from './comp/Child.vue'
import { defineAsyncComponent } from 'vue' // 静态化引入
const Child = defineAsyncComponent(() => import('./comp/Child.vue')) // 动态引入 & 异步引入
console.log('child', Child)
export default {
  name: 'Parent',
  components: { Child },
}
</script>
<style scoped>
.app {
  background-color: green;
  padding: 10px;
}
</style>
