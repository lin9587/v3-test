<template>
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>
<script lang="ts">
import { ref, customRef } from 'vue'
export default {
  setup() {
    // 自定义一个ref 名为 myRef
    function myRef(value: string, delay: number) {
      // console.log('--myRef--', value)
      return customRef((track, trigger) => {
        let timer: NodeJS.Timeout | null = null
        return {
          get() {
            console.log(`有人从myRef函数读取数据了，我把${value}给它了`)
            track() // 通知vue追踪value的变化（提前和get商量，让它认为这个value是有用的）
            return value
          },
          set(newVal) {
            console.log(`有人从myRef函数中的数据改了，我把${newVal}给它了`)
            clearTimeout(timer) // 如果上面有定时器就先关掉再重新打开一个
            timer = setTimeout(() => {
              value = newVal
              trigger() // 通知vue 重新解析模板
            }, delay)
          },
        }
      })
    }

    // let keyWord = ref('hello') // 使用vue提供的ref
    let keyWord = myRef('hello', 500) // 使用程序员自定义的ref

    return {
      keyWord,
    } //
  },
}
</script>
