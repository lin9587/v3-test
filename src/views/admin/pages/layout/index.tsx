import { defineComponent } from 'vue'
import Header from './components/header'
import Menu from './components/menu'

export default defineComponent({
  setup() {
    return () => (
      <div class="container">
        <Header />
        <div class="main" style={{ display: 'flex', flexDirection: 'row' }}>
          <Menu />
          <div>content</div>
        </div>
      </div>
    )
  },
})
