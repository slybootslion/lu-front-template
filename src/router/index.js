import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../pages/home/home.vue'

const routes = [
  {
    path: '/',
    component: home,
    meta: {
      title: 'home',
    },
  },
  {
    path: '/about',
    component: () => import('../pages/about/about.vue'),
    meta: {
      title: 'about',
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(to => {
  document.title = `${to.meta.title}`
})

export default router
