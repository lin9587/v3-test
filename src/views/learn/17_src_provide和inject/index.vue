<template>
  <div class="app">
    <h3>我是Parent组件（父）, {{ name }}, {{ price }}</h3>
    <Child />
  </div>
</template>
<script>
import { reactive, toRefs, provide } from 'vue'
import Child from './comp/Child.vue'
export default {
  name: 'Parent',
  components: { Child },
  setup() {
    let car = reactive({ name: '奔驰', price: '40w' })
    provide('car', car) // 给自己的后台组件传输数据
    return { ...toRefs(car) }
  },
}
</script>
<style scoped>
.app {
  background-color: green;
  padding: 10px;
}
</style>
