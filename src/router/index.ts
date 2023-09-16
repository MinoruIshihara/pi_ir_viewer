import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Images from '../views/Images.vue'

const routes: Array<RouteRecordRaw> = [
{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/images',
  name: 'Images',
  component: Images
},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router