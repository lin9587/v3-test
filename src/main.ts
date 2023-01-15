import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App'
import router from './router'

import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import './style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(antd)

app.mount('#app')
