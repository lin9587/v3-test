<template>
  <button @click="isShow = true">点我弹窗</button>
  <teleport to="body">
    <div v-if="isShow" class="mask">
      <div class="dialog">
        我是一个弹窗
        <h4>一些内容</h4>
        <h4>一些内容</h4>
        <h4>一些内容</h4>
        <h4>一些内容</h4>
        <button class="close" @click="isShow = false">关闭弹窗</button>
      </div>
    </div>
  </teleport>
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
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: gray;
  opacity: 0.8;
}
.dialog {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background-color: yellow;
}
</style>
