<template>
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    // let keyWord = ref('hello') // 使用vue提供的ref
    let keyWord = ref('hello') // 使用程序员自定义的ref

    return {
      keyWord,
    } //
  },
}
</script>
