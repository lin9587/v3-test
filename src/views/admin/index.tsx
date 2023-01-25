import { defineComponent } from 'vue'
import Layout from './pages/layout'

export default defineComponent({
  setup() {
    return () => (
      <>
        <Layout />
      </>
    )
  },
})
