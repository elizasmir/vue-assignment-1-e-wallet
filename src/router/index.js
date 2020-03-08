import Vue from 'vue'
import VueRouter from 'vue-router'
import VuePageTransition from 'vue-page-transition'
import VueLocalStorage from 'vue-localstorage'
import Home from '../views/Home.vue'
import Add from '../views/Add.vue'

Vue.use(VueRouter)
Vue.use(VuePageTransition)
Vue.use(VueLocalStorage)

const routes = [
  {
    path: '/',
    redirect: '/cards'
  },
  {
    path: '/cards',
    name: 'Home',
    component: Home
  },
  {
    path: '/addcards',
    name: 'Add',
    component: Add,
    // meta: { transition: 'flip-y' },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
