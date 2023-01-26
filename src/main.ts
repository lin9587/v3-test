// 引入的不再是 Vue 构造函数了，引入的是一个名为 createApp 的工厂函数
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

// 创建应用实例对象——app(类似于之前Vue2中的vm，但app比vm更“轻”)
const app = createApp(App)
console.log('createApp', app)

app.use(createPinia())
app.use(router)
app.use(antd)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })

// 挂载
app.mount('#app')

// 卸载
// setTimeout(() => {
//   app.unmount('#app')
// }, 2000)
