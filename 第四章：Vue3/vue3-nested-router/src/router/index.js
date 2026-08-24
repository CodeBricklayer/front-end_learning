import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import UserView from '@/pages/UserView.vue'
import ListView from '@/pages/ListView.vue'
import Item1 from '@/pages/ListSub/Item1.vue'
import Item2 from '@/pages/ListSub/Item2.vue'
import MyView from '@/pages/MyView.vue'
import LoginView from '@/pages/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 自定义激活状态类名
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes: [
    {
      path: '/',
      component: HomeView,
      meta: {
        // 自定义路由元信息
        // requiredAuth: true 表示需要登录才能访问
        requiredAuth: false
      }
    },
    {
      path: '/user/:name',
      component: UserView,
      // 具名路由
      name: 'userView',
      meta: {
        // 自定义路由元信息
        // requiredAuth: true 表示需要登录才能访问
        requiredAuth: true
      }
    },
    {
      path: '/list',
      component: ListView,
      name: 'listView',
      meta: {
        // 自定义路由元信息
        // requiredAuth: true 表示需要登录才能访问
        requiredAuth: true
      },
      // 子路由守卫：在子路由切换前调用
      beforeEnter: (to, from, next) => {
        console.log("即将进入的路由", to, "即将离开的路由", from)
        next()
      },
      // 子路由守卫：在子路由切换后调用
      afterEnter: (to, from) => {
        console.log("当前路由", to, "上一个路由", from)
      },
      children: [
        {
          // 子路由 path 写相对路径（不写 /），最终路径会自动拼接为 /list/item1
          path: 'item1',
          component: Item1
        },
        {
          path: 'item2',
          component: Item2
        }
      ]
    },
    {
      path: '/hello',
      // 重定向
      // redirect: '/list'
      redirect: {
        name: 'listView'
      }
    },
    {
      path: '/my',
      component: MyView,
      name: 'myView',
      // 别名
      alias: '/mine'
    },
    {
      path: '/login',
      component: LoginView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // 登录页滚动到指定位置 100px
    // if (to.path === '/login') {
    //   return { top: 100 }
    // }

    // 如果有保存的位置，就滚动到保存的位置. 如果没有保存的位置，就滚动到顶部
    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   return { top: 0, left: 0 }
    // }

    // 模拟异步滚动行为，例如等待服务器响应, 等待2秒后滚动到保存的位置, 如果没有保存的位置，就滚动到顶部
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(savedPosition || { top: 0, left: 0 })
      }, 2000)
    })
  }
})

// 导航守卫
// 前置守卫：在路由切换前调用
router.beforeEach((to, from, next) => {
  console.log("即将进入的路由", to, "即将离开的路由", from)
  // 检查是否登录
  // if (to.name !== 'Login' && !isAuthenticated()) {
  //   next({ name: 'Login' })
  // } else {
  //   next()
  // }
  // 必须显式调用 next() 才能放行路由，否则跳转将被挂起
  next()
})

// 后置守卫：在路由切换后调用
router.afterEach((to, from) => {
  console.log("当前路由", to, "上一个路由", from)
})

export default router
