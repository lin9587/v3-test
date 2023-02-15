<template>
  <div class="app">
    <h3>我是APP组件</h3>
    <Child />
  </div>
</template>
<script>
import Child from './comp/Child.vue'
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
