import { createRouter, createWebHistory } from 'vue-router'
import authRouter from '../modules/auth/router/index.js'
import platformRouter from '@/modules/platform/router/index.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/auth'
    },
    {
      path: '/auth',
      ...authRouter
    },
    {
      path:'/platform',
      ...platformRouter
    }
  ]
})

export default router