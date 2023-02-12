<template>
  <div class="app">
    <h3>我是APP组件</h3>
  </div>
</template>
<script>
import {
  ref,
  reactive,
  toRefs,
  readonly,
  isRef,
  isReactive,
  isProxy,
  isReadonly,
} from 'vue'
export default {
  name: 'Parent',
  setup() {
    let car = reactive({ name: '奔驰', price: '40w' })
    let sum = ref(0)
    let car2 = readonly(car)

    console.log(isRef(sum))
    console.log(isReactive(car))
    console.log(isReadonly(car2))
    console.log(isProxy(car))
    console.log(isProxy(car2)) // true  需要注意
    console.log(isProxy(sum))

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
