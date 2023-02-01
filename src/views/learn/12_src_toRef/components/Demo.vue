<template>
  <div>
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
import { reactive, toRef, toRefs } from 'vue'

export default {
  setup() {
    const person = reactive({
      name: 'lin',
      age: 18,
      job: {
        j1: {
          salary: 1,
        },
      },
    })

    // const name1 = person.name
    // console.log('name1', name1) : 'string'
    // const name2 = toRef(person, 'name')
    // console.log('name2', name2) : Refimpl

    // const x1 = toRefs(person)
    // console.log('x1', x1)

    return {
      // name: 'lin' 不在响应式数据
      // // name: person.name,
      // name: toRef(person, 'name'),
      // age: toRef(person, 'age'),
      // salary: toRef(person.job.j1, 'salary'),
      ...toRefs(person),
      person,
    }
  },
}
</script>
