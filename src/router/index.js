import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('@/views/product')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('@/views/service')
  },
  {
    path: '/platform',
    name: 'Platform',
    component: () => import('@/views/platform')
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export default router