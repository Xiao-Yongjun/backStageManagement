import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 假设你的 router 文件被命名为 router.js  
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './style/reset.scss'
import './api/home/mock'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import { createPinia } from 'pinia'


const pinia = createPinia()



const app = createApp(App);

app.use(pinia)
app.use(ElementPlus, {
  locale: zhCn,
})

app.use(router);
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount('#app');