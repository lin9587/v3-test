<template>
  <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <Demo v-if="isShowDemo" />
</template>

<script lang="ts">
import { ref } from 'vue'
import Demo from './components/Demo.vue'

export default {
  components: { Demo },
  setup() {
    const isShowDemo = ref(true)

    return {
      isShowDemo,
    }
  },
}
</script>
