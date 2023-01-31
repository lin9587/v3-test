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
import { ref, reactive, watch, watchEffect } from 'vue'

export default {
  setup() {
    const sum = ref<number>(100)
    const msg = ref('nihao')
    const person = reactive({
      name: 'lin',
      age: 18,
      job: {
        j1: {
          salary: 1,
        },
      },
    })

    // 监视
    // watch(sum, (newVal, oldVal) => {
    //   console.log('sum变了', newVal, oldVal)
    // })

    watchEffect(() => {
      let x1 = sum.value
      let x2 = person.job.j1.salary
      console.log('watchEffect所指定的回调执行了！')
    })

    return {
      sum,
      msg,
      person,
    }
  },
}
</script>
