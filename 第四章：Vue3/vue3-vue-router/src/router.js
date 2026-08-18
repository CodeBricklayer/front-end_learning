import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './components/HomeView.vue'
import AboutView from './components/AboutView.vue'

// 路由规则：定义路径和对应的组件
const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/about',
        component: AboutView
    }
]

// 创建路由实例
// 配置路由规则
const router = createRouter({

    history: createWebHashHistory(),
    // 路由规则：定义路径和对应的组件
    // 当访问 /home 时，渲染 HomeView 组件
    // 当访问 /about 时，渲染 AboutView 组件
    routes: routes
})

export default router