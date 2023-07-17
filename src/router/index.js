import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import SettingsView from '../views/Settings/SettingsView.vue'

x = 123;

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: false
    }, 
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('@/views/Home/CreateView.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView,
    meta: {
      requiresAuth: false
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
