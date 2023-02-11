<template>
  <div class="child">
    <h3>我是Child组件（子）</h3>
    <Son />
  </div>
</template>
<script>
import Son from './Son.vue'
export default {
  name: 'Child',
  components: { Son },
}
</script>
<style scoped>
.child {
  background-color: gray;
  padding: 10px;
}
</style>
