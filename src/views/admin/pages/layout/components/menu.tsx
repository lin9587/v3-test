import { defineComponent } from 'vue'
import { ElMenu, ElMenuItemGroup, ElSubMenu } from 'element-plus'

export default defineComponent({
  setup() {
    const slots = {
      title: () => <span>Navigator One</span>,
    }

    return () => (
      <div>
        <ElMenu>
          <ElSubMenu index="1" v-slots={slots}>
            <ElMenuItemGroup>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </ElMenuItemGroup>
          </ElSubMenu>
          <ElSubMenu index="2">
            <template v-slot="title">Group One</template>
            <ElMenuItemGroup>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
            </ElMenuItemGroup>
          </ElSubMenu>
        </ElMenu>
      </div>
    )
  },
})
