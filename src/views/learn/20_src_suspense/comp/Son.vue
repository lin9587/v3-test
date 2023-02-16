<template>
  <div class="son">
    <h3>我是Son组件</h3>
    <Dialog />
  </div>
</template>
<script>
import { inject } from 'vue'
import Dialog from './Dialog.vue'

export default {
  name: 'Son',
  components: { Dialog },
  setup() {
    let car = inject('car')
    return { car }
  },
}
</script>
<style scoped>
.son {
  background-color: pink;
  padding: 10px;
}
</style>
