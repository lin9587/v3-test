<template>
  <div>
    <h2>当前求和：{{ sum }}</h2>
    <button @click="sum++">点我加1</button>
  </div>
</template>

<script lang="ts">
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref,
} from 'vue'

export default {
  setup() {
    const sum = ref<number>(100)

    // 通过组合式API的形式去使用生命周期钩子
    onBeforeMount(() => {
      console.log('--- onBeforeMount ---')
    })
    onMounted(() => {
      console.log('--- onMounted ---')
    })
    onBeforeUpdate(() => {
      console.log('--- onBeforeUpdate ---')
    })
    onUpdated(() => {
      console.log('--- onUpdated ---')
    })
    onBeforeUnmount(() => {
      console.log('--- onBeforeUnmount ---')
    })
    onUnmounted(() => {
      console.log('--- onUnmounted ---')
    })

    return {
      sum,
    }
  },
  // 通过配置项的形式使用生命周期钩子
  // beforeCreate() {
  //   console.log('--- beforeCreate ---')
  // },
  // created() {
  //   console.log('--- created ---')
  // },
  // beforeMount() {
  //   console.log('--- beforeMount ---')
  // },
  // mounted() {
  //   console.log('--- mounted ---')
  // },
  // beforeUpdate() {
  //   console.log('--- beforeUpdate ---')
  // },
  // updated() {
  //   console.log('--- updated ---')
  // },
  // beforeUnmount() {
  //   console.log('--- beforeUnmount ---')
  // },
  // unmounted() {
  //   console.log('--- unmounted ---')
  // },
  // // Vue2.x 不奏效了
  // beforeDestroy() {
  //   console.log('--- beforeDestroy ---')
  // },
  // destroyed() {
  //   console.log('--- destroyed ---')
  // },
}
</script>
