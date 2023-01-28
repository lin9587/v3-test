<template>
  <div>一个人的信息</div>
  <div>姓名：{{ person.name }}</div>
  <div>年龄：{{ person.age }}</div>
  <div>工作种类：{{ person.job.type }}</div>
  <div>工作薪水：{{ person.job.salary }}</div>
  <div>
    爱好：
    <p>
      {{ JSON.stringify(person.hobby) }}
    </p>
  </div>
  <div>测试对象：{{ person.job.a.b.c }}</div>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script lang="ts">
import { ref, reactive } from 'vue'
export default {
  name: 'App',
  // 暂时不考虑响应式
  setup() {
    // ref 生成 引用实现的实例对象  refimpl   简称引用对象
    // ref -> reference 引用
    // impl implements 实现

    // 数据
    // let name = ref('lin')
    // let age = ref(18)
    // let job = reactive({
    //   type: '前端',
    //   salary: '1k',
    //   num: 666,
    //   a: {
    //     b: {
    //       c: 99,
    //     },
    //   },
    // })
    // let hobby = reactive(['抽烟', '喝酒', '烫头'])

    // 数据
    const person = reactive({
      name: 'lin',
      age: 18,
      job: {
        type: '前端',
        salary: '1k',
        num: 666,
        a: {
          b: {
            c: 99,
          },
        },
      },
      hobby: ['抽烟', '喝酒', '烫头'],
    })

    function changeInfo() {
      // name.value = 'li'
      // console.log(name, age, job)
      // job.type = '后端'
      // job.salary = '2k'
      // job.a.b.c = 66
      // hobby[0] = '学习'
      person.name = 'li'
      person.age = 19
      person.job.type = '后端'
      person.job.salary = '2k'
      person.job.a.b.c = 66
      person.hobby[0] = '学习'
    }

    // 返回一个对象（常用）
    return {
      person,
      changeInfo,
    }
  },
}
</script>
