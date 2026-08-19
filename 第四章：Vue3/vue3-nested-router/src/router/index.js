import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import UserView from '@/pages/UserView.vue'
import ListView from '@/pages/ListView.vue'
import Item1 from '@/pages/ListSub/Item1.vue'
import Item2 from '@/pages/ListSub/Item2.vue'
import MyView from '@/pages/MyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 自定义激活状态类名
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/user/:name',
      component: UserView,
      // 具名路由
      name: 'userView'
    },
    {
      path: '/list',
      component: ListView,
      name: 'listView',
      children: [
        {
          path: '/list/item1',
          component: Item1
        },
        {
          path: '/list/item2',
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
      alias:'/mine'
    }
  ],
})

export default router
