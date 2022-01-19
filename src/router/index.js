import { createRouter, createWebHashHistory } from 'vue-router'
// createWebHistory
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/people',
    name: 'Africa People',
    component: ()=>import('../views/People.vue'),
  },
  {
    path: '/map',
    name: 'Learn Africa on Map',
    component: ()=>import('../views/MapView.vue'),
  },
  {
    path: '/',
    name: 'Africa, Africa!',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
