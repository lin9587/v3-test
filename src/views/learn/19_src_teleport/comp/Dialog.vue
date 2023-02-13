<template>
  <button @click="isShow = true">点我弹窗</button>
  <div v-if="isShow" class="dialog">
    我是一个弹窗
    <h4>一些内容</h4>
    <button class="close" @click="isShow = false">关闭弹窗</button>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'Dialog',
  setup() {
    let isShow = ref(false)
    return {
      isShow,
    }
  },
}
</script>
<style>
.dialog {
  width: 300px;
  height: 300px;
  background-color: yellow;
}
</style>
