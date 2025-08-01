import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import BlogPage from '../pages/BlogPage.vue'
import OneBlogPage from '../pages/OneBlogPage.vue'


const routes = [
  { path: '/', component: HomePage },
  { path: '/blog', component: BlogPage },
  {path: '/card', component: OneBlogPage},
  { path: '/card/:id', component: OneBlogPage, name: 'blog-detail' }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
