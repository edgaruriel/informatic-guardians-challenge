import { createRouter, createWebHistory } from 'vue-router'

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
    children: [
      {
        path: 'disponibles',
        component: () => import('@/views/WeekAvailableView/WeekAvailableView'),
        meta: {
          layout: 'AppLayoutHome'
        }
      },
      {
        path: 'confirmados',
        component: () => import('@/views/WeekApprovedView/WeekApprovedView'),
        meta: {
          layout: 'AppLayoutHome'
        }
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    redirect: '/' // PageNotExist, create page /404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
