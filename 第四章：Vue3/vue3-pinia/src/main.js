import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// 全局变量
app.config.globalProperties.$message = 'hello vue'

app.use(createPinia())
app.use(router)

app.mount('#app')
