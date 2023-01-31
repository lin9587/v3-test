<template>
  <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <Demo v-if="isShowDemo" />
  <Test />
</template>

<script lang="ts">
import { ref } from 'vue'
import Demo from './components/Demo.vue'
import Test from './components/Test.vue'

export default {
  components: { Demo, Test },
  setup() {
    const isShowDemo = ref(true)

    return {
      isShowDemo,
    }
  },
}
</script>
