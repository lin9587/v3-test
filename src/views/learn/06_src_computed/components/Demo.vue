<template>
  <div>
    <h1>一个人的信息</h1>
    性: <input v-model="person.firstName" /> <br />
    名: <input v-model="person.lastName" />
    <p>全名：{{ fullName }}</p>
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

    const fullName = computed(() => {
      return person.firstName + '-' + person.lastName
    })

    return {
      fullName,
      person,
    }
  },
}
</script>
