import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App'
import router from './router'

// 全局引入 ant design vue
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

// 全局配置 element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(antd)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })

app.mount('#app')
