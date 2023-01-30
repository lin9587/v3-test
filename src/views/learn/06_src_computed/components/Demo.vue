<template>
  <div>
    <h1>一个人的信息</h1>
    性: <input v-model="person.firstName" /> <br />
    名: <input v-model="person.lastName" /> <br />
    全名：<input v-model="fullName" />
  </div>
</template>

<script lang="ts">
import { reactive, computed } from 'vue'

export default {
  // Vue2.x
  // computed: {
  //   fullName() {
  //     return this.person.firstName + '-' + this.person.lastName
  //   },
  // },
  setup() {
    const person = reactive({
      firstName: 'li',
      lastName: 'lin',
    })

    // 简写
    // const fullName = computed(() => {
    //   return person.firstName + '-' + person.lastName
    // })

    // 完整写
    const fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName
      },
      set(value) {
        if (typeof value === 'string') {
          const nameArr = value.split('-')
          person.firstName = nameArr[0]
          person.lastName = nameArr[1]
        }
      },
    })

    return {
      fullName,
      person,
    }
  },
}
</script>

function typeOf(value: string): any { throw new Error('Function not
implemented.') } function typeOf(value: string): any { throw new Error('Function
not implemented.') }
