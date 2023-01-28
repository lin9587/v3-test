<template>
  <div>一个人的信息</div>
  <div>姓名：{{ name }}</div>
  <div>年龄：{{ age }}</div>
  <button @click="sayHello">说话</button>
</template>

<script lang="ts">
import { h } from 'vue'
export default {
  name: 'App',
  // 暂时不考虑响应式
  setup() {
    // 数据
    let name = 'lin'
    let age = 18

    function sayHello() {
      alert(`${name}, ${age}`)
    }

    // 返回一个对象（常用）
    return {
      name,
      age,
      sayHello,
    }

    // 返回一个函数 称为渲染函数
    // return () => {
    //   return h('h1', 'lin')
    // }
  },
}
</script>
