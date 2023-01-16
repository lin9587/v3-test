import { defineComponent } from 'vue'
import { ElCard, ElCol, ElRow } from 'element-plus'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()

    const toPages = (url: string) => {
      router.push(url)
    }

    return () => (
      <ElRow gutter={12} justify="center" style={{ paddingTop: '20%' }}>
        <ElCol span={6}>
          <div onClick={() => toPages('/admin/')}>
            <ElCard shadow="hover">admin</ElCard>
          </div>
        </ElCol>
        <ElCol span={6}>
          <div onClick={() => toPages('/h5/')}>
            <ElCard shadow="hover">h5</ElCard>
          </div>
        </ElCol>
        <ElCol span={6}>
          <ElCard shadow="hover">
            <div onClick={() => toPages('/threejs/')}>threejs</div>
          </ElCard>
        </ElCol>
      </ElRow>
    )
  },
})
