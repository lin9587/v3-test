<template>
  <Demo @hello="sayhelloMsg" msg="hello" lastName="lin">
    <template v-slot:qwe>
      <span>vue3</span>
    </template>
  </Demo>
</template>

<script lang="ts">
import Demo from './components/Demo.vue'

export default {
  components: { Demo },
  setup() {
    const sayhelloMsg = (val: number) => {
      alert(`触发了sayHelloMsg 事件，收到的参数是${val}`)
    }

    return {
      sayhelloMsg,
    }
  },
}
</script>
