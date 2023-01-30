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
import { reactive, ref, watch } from 'vue'

export default {
  // Vue2.x
  // watch: {
  // 简写
  // sum(newVal, oldVal) {
  //   console.log('sum的值变化了', newVal, oldVal)
  // },
  // 完整
  // sum: {
  //   handler(newVal, oldVal) {
  //     console.log('sum的值变化了', newVal, oldVal)
  //   },
  //   immediate: true,
  //   deep: true,
  // },
  // },
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

    // 情况一：监视ref所定义的单个响应式数据
    // watch(sum, (newVal, oldVal) => {
    //   console.log('sum变了', newVal, oldVal)
    // }, { immediate: true })

    // 情况二：监视ref所定义的多个响应式数据
    // watch(
    //   [sum, msg],
    //   (newVal, oldVal) => {
    //     console.log('sum, msg', newVal, oldVal)
    //   },
    //   { immediate: true }
    // )

    /**
     * 情况三：监视reacitve所定义的一个数据的全部属性
     *    1.注意：此处无法正确获得oldVal
     *    2.注意：强制开启了深度监视（deep）配置无需
     */
    // watch(
    //   person,
    //   (newVal, oldVal) => {
    //     console.log('person变了', newVal, oldVal)
    //   }
    //   { deep: true } // 此处的 deep 无效
    // )

    // 情况四：监视reactive所定义的一个响应式数据中的某个属性
    // watch(
    //   () => person.name,
    //   (newVal, oldVal) => {
    //     console.log('person.name变了', newVal, oldVal)
    //   }
    // )

    // 情况五：监视reactive所定义的一个响应式数据中的某些属性
    // watch([() => person.name, () => person.age], (newVal, oldVal) => {
    //   console.log('person的name或age变了', newVal, oldVal)
    // })

    // 特殊情况
    watch(
      () => person.job,
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
