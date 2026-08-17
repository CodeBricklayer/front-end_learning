import { createApp } from 'vue'
import App from './App.vue'
import directives from './directives/index.js' 
import i18n from './plugins/i18n.js'



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

// 声明一个中英文对应关系
const messages={
    en:{
        hello:'hello',
        world:'world'
    },
    zh:{
        hello:'你好',
        world:'世界'
    }
}
app.use(i18n,messages)
// 挂载应用
app.mount('#app')
