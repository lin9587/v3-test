<template>
  <div>一个人的信息</div>
  <div>姓名：{{ name }}</div>
  <div>年龄：{{ age }}</div>
  <div>工作种类：{{ job.type }}</div>
  <div>工作薪水：{{ job.salary }}</div>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'App',
  // 暂时不考虑响应式
  setup() {
    // ref 生成 引用实现的实例对象  refimpl   简称引用对象
    // ref -> reference 引用
    // impl implements 实现

    // 数据
    let name = ref('lin')
    let age = ref(18)
    let job = ref({
      type: '前端',
      salary: '1k',
    })

    function changeInfo() {
      // name.value = 'li'
      console.log(name, age, job)
      job.value.type = '后端'
      job.value.salary = '2k'
    }

    // 返回一个对象（常用）
    return {
      name,
      age,
      job,
      changeInfo,
    }
  },
}
</script>
