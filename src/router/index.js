import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/sign-up',
    name: 'Sign-Up',
    component: () => import(/* webpackChunkName: "sign-up" */ '../views/Sign-Up.vue')
  },
  {
    path: '/add-product',
    name: 'Add-Product',
    component: () => import(/* webpackChunkName: "add-product" */ '../views/Add-Product.vue')
  },
  {
    path: '/admin-product',
    name: 'Admin-Product',
    component: () => import(/* webpackChunkName: "admin-product" */ '../views/Admin-Product.vue')
  },
  {
    path: '/edit-product/:id',
    name: 'Edit-Product',
    component: () => import(/* webpackChunkName: "edit-product" */ '../views/Edit-Product.vue'),
    props: true
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () => import(/* webpackChunkName: "activity" */ '../views/Activity.vue'),
  },
  {
    path: '*',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '../views/404.vue'),
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
  
})

export default router
