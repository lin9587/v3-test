import { defineComponent } from 'vue'
import { ElCard, ElCol, ElRow } from 'element-plus'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const cards: Array<string> = ['h5', 'threejs']
    const router = useRouter()

    const toPages = (url: string) => {
      router.push(url)
    }

    return () => (
      <ElRow gutter={12} justify="center" style={{ paddingTop: '20%' }}>
        {() => {
          return cards.map(routerPath => {
            return (
              <ElCol span={6} key={routerPath}>
                <div onClick={() => toPages(`/${routerPath}/`)}>
                  <ElCard shadow="hover">{routerPath}</ElCard>
                </div>
              </ElCol>
            )
          })
        }}
      </ElRow>
    )
  },
})
