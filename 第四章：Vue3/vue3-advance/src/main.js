import { createApp } from 'vue'
import App from './App.vue'
import directives from './directives/index.js' 

const app = createApp(App)
// 全局注册自定义指令
// app.directive('focus', {
//     mounted(el, binding, vnode) {
//         el.focus()
//         el.style.backgroundColor = 'red'
//     },
//     // 绑定元素的父组件更新前调用
//     beforeUpdate(el, binding, vnode, prevVnode) {
//         el.style.backgroundColor = 'blue'
//     }

// })
// 全局批量注册自定义指令
app.use(directives)

app.mount('#app')
