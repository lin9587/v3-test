import { defineComponent } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

export default defineComponent({
  setup() {
    const slots = {
      title: () => <span>第一章节</span>,
    }

    return () => (
      <>
        <a-menu mode="horizontal" style="position: fixed">
          <a-sub-menu title="第一章节">
            <a-menu-item key="1">
              <RouterLink to="/">第一个场景</RouterLink>
            </a-menu-item>
            <a-menu-item key="2">
              <RouterLink to="/chapter1/2">材质和光照</RouterLink>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
        <RouterView />
      </>
    )
  },
})
