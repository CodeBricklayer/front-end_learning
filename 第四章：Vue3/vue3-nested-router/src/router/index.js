import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import UserView from '@/pages/UserView.vue'
import ListView from '@/pages/ListView.vue'
import Item1 from '@/pages/ListSub/Item1.vue'
import Item2 from '@/pages/ListSub/Item2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
    }
  ],
})

export default router
