<template>
  <div>
    <h4>当前的x值是：{{ x }}</h4>
    <button @click="x++">点我x++</button>
    <br />
    <h4>{{ person }}</h4>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>薪资：{{ job.j1.salary }}</h2>
    <button @click="name += 'lin'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
  </div>
</template>

<script lang="ts">
import { toRefs, reactive, shallowReactive, shallowRef, ref } from 'vue'

export default {
  setup() {
    // const person = shallowReactive({ // 只考虑第一层数据的响应式数据
    const person = reactive({
      name: 'lin',
      age: 18,
      job: {
        j1: {
          salary: 1,
        },
      },
    })

    const x = ref(0)

    return {
      x,
      ...toRefs(person),
      person,
    }
  },
}
</script>
