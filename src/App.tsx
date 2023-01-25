import { defineComponent, type HtmlHTMLAttributes } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

// const fixed = {
//   position: 'fixed',
//   left: 50,
// }

export default defineComponent({
  setup() {
    return () => (
      <>
        {/* <div style={fixed}>fixed</div> */}
        <RouterView />
      </>
    )
  },
})
