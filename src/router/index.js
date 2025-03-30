import { createRouter, createWebHashHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [{ path: '', component: HomeView }],
    },
  ],
})

export default router
