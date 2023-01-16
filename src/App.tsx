import { defineComponent, type HtmlHTMLAttributes } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

const fixed = {
  position: 'fixed',
  right: 0,
}

export default defineComponent({
  setup() {
    return () => (
      <>
        <div style={fixed}>fixed</div>
        <RouterView />
      </>
    )
  },
})
