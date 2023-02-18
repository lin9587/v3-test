<template>
  <div class="child">
    <h3>我是Child组件</h3>
    {{ sum }}
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'Child',
  setup() {
    let sum = ref(0)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ sum })
      }, 1000)
    })
  },
}
</script>
<style scoped>
.child {
  background-color: gray;
  padding: 10px;
}
</style>
