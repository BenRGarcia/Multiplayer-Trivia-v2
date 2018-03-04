import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Play from '@/components/Play'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
      { // Redirect unknown paths to home
        path: '*',
        redirect: '/home'
      },
      { // Home page
        path: '/home',
        name: 'Home',
        component: Home,
      },
      { // Play page
        path: '/play',
        name: 'Play',
        component: Play,
      },
      { // Admin page
        path: '/admin',
        name: 'Admin',
        component: Admin,
      }
    ]
})
