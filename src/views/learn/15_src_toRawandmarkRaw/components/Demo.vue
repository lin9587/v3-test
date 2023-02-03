<template>
  <div>
    <h4>当前的sum值是：{{ sum }}</h4>
    <button @click="sum++">点我x++</button>
    <hr />
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>薪资：{{ job.j1.salary }}</h2>
    <h3 v-show="person.car">座驾信息: {{ person.car }}</h3>
    <button @click="name += 'lin'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
    <button @click="showRawPerson">输出最原始的person</button>
    <button @click="addCar">给一个人添加一台车</button>
    <button @click="changeCarName">换车名</button>
    <button @click="changeCarPrice">换价格</button>
  </div>
</template>

<script lang="ts">
import { toRefs, reactive, ref, toRaw, markRaw } from 'vue'

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
      car: {},
    })

    const showRawPerson = () => {
      const p = toRaw(person)
      console.log('show', person, p)
    }

    const addCar = () => {
      let car: { name: string; price: string } = { name: '奔驰', price: '40W' }
      person.car = markRaw(car)
    }

    const changeCarName = () => {
      if (person.car.name) person.car.name = '宝马'
    }

    const changeCarPrice = () => {
      if (person.car.name) person.car.price = '30w'
    }

    return {
      sum,
      addCar,
      changeCarName,
      changeCarPrice,
      showRawPerson,
      person,
      ...toRefs(person),
    }
  },
}
</script>
