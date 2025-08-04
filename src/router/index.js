import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import BlogPage from '../pages/BlogPage.vue'
import OneBlogPage from '../pages/OneBlogPage.vue'
import NotFound from '../pages/NotFound.vue'



const routes = [
  { path: '/', component: HomePage },
  { path: '/blog', component: BlogPage },
  {path: '/card', component: OneBlogPage},
  { path: '/card/:id', component: OneBlogPage, name: 'blog-detail' },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
