<template>
  <div>
    <h2>当前求和：{{ sum }}</h2>
    <button @click="sum++">点我加1</button>
    <br />
    <h2>当前的信息为：{{ msg }}</h2>
    <button @click="msg + '!'">点我加1</button>
    <br />
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>薪资：{{ person.job.j1.salary }}</h2>
    <button @click="person.name += 'lin'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
  </div>
</template>

<script lang="ts">
import { ref, watch } from 'vue'

export default {
  setup() {
    const sum = ref<number>(100)
    const msg = ref('nihao')
    const person = ref({
      name: 'lin',
      age: 18,
      job: {
        j1: {
          salary: 1,
        },
      },
    })

    // 监视的是 Refimpl 不需要 .value
    // watch(sum, (newVal, oldVal) => {
    //   console.log('sum变了', newVal, oldVal)
    // })

    // person 是 Refimpl
    // person.value 是 proxy
    // 监视的是 proxy 对象 需要点 .value
    // 方法一
    // watch(person.value, (newVal, oldVal) => {
    //   console.log('person.job变了', newVal, oldVal)
    // })
    // 方法二
    watch(
      person,
      (newVal, oldVal) => {
        console.log('person.job变了', newVal, oldVal)
      },
      { deep: true }
    )

    return {
      sum,
      msg,
      person,
    }
  },
}
</script>
