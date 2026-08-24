import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import AboutView from '@/pages/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      name: 'home'
    },
    {
      path: '/about',
      component: AboutView,
      name: 'about'
    },
    {
      path: '/mine',
      component: () => import('@/pages/MineView.vue'),
      name: 'mine'
    }
  ],
})


export default router
