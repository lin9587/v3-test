<template>
  <div>
    <h2>当前求和：{{ sum }}</h2>
    <button @click="sum++">点我加1</button>
    <hr />
    <h2>鼠标点击时显示鼠标坐标为：x:{{ point.x }}，y:{{ point.y }}</h2>
  </div>
</template>

<script lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import usePoint from '../hooks/usePoint'

export default {
  setup() {
    const sum = ref(100)

    // 调用usePoint
    const point = usePoint()

    // const point = reactive({
    //   x: 0,
    //   y: 0,
    // })

    // // 方法
    // const savePoint = event => {
    //   point.x = event.pageX
    //   point.y = event.pageY
    // }

    // onMounted(() => {
    //   window.addEventListener('click', savePoint)
    // })

    // onBeforeUnmount(() => {
    //   window.removeEventListener('click', savePoint)
    // })

    return {
      sum,
      point,
    }
  },
}
</script>
