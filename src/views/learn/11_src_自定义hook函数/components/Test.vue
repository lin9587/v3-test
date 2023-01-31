<template>
  <h1>test 组件</h1>
  <h2>鼠标点击时显示鼠标坐标为：x:{{ point.x }}，y:{{ point.y }}</h2>
</template>

<script lang="ts">
import usePoint from '../hooks/usePoint'

export default {
  setup() {
    // 使用usePoint
    const point = usePoint()

    return {
      point,
    }
  },
}
</script>
