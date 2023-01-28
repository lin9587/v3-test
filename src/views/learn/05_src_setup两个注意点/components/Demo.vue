<template>
  <div>
    <p>名字: {{ person.name }}</p>
    <p>性别: {{ person.age }}</p>
    <button @click="test">触发一下Demo组件的 hello 事件</button>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'

export default {
  name: 'Demo',
  // beforeCreate() {
  //   console.log('---beforeCreate---')
  // },

  props: ['msg'],
  emits: ['hello'],
  setup(props, context) {
    // console.log('---setup---', props)
    // console.log('---setup---', context)
    // console.log('---setup---', context.attrs) // 相当于 vue2.x 中的 $attrs
    // console.log('---setup---', context.emit) // 触发自定义是事件相当于 vue2.x 中的 $emit
    console.log('---setup---', context.slots) //

    const person = reactive({
      name: 'lin',
      age: 18,
    })

    const test = () => {
      context.emit('hello', 666)
    }

    return {
      test,
      person,
    }
  },
}
</script>
