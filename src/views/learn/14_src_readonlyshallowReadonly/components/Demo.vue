<template>
  <div>
    <h4>当前的sum值是：{{ sum }}</h4>
    <button @click="sum++">点我x++</button>
    <hr />
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>薪资：{{ job.j1.salary }}</h2>
    <button @click="name += 'lin'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
  </div>
</template>

<script lang="ts">
import { toRefs, reactive, ref, readonly, shallowReadonly } from 'vue'

export default {
  setup() {
    // 数据
    let sum = ref(0)
    let person = reactive({
      name: 'lin',
      age: 18,
      job: {
        j1: {
          salary: 1,
        },
      },
    })

    // person = readonly(person)
    // person = shallowReadonly(person)
    sum = readonly(sum)

    return {
      sum,
      ...toRefs(person),
    }
  },
}
</script>
