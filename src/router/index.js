import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import SettingsView from '../views/Settings/SettingsView.vue'

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
  },
  {
    path: '/viewpdf',
    name: 'viewpdf',
    component: () => import('@/views/Home/ViewPDF.vue'),
    meta: {
      requiresAuth: false
    },
    props: (route) => ({
      task: route.query.task,
    })

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
