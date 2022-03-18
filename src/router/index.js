import { createRouter, createWebHistory } from 'vue-router'
import {listServiceContract} from '@/resolvers/ServiceContractResolver'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView/HomeView'),
    meta: {
      layout: 'AppLayoutHome'
    }
  },
  {
    path: '/turnos',
    component: () => import('@/views/WeekView/WeekView'),
    beforeEnter: [listServiceContract],
    children: [
      {
        path: 'disponibles',
        component: () => import('@/views/WeekAvailableView/WeekAvailableView'),
        meta: {
          layout: 'AppLayoutHome'
        }
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    redirect: '/' // PageNotExist, return the home page
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
