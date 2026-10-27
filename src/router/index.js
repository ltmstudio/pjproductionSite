import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../pages/HomePage.vue'),
    meta: { title: 'PJ Production — продвижение в соцсетях', description: 'PJ Production — продвижение в соцсетях, таргет и контент-стратегии. Кейсы: стоматология, рестораны, детские товары, отбеливание зубов.' }
  },
  {
    path: '/blog',
    component: () => import('../pages/BlogPage.vue'),
    meta: { title: 'SMM и кейсы — PJ Production', description: 'Кейсы по продвижению в соцсетях: стоматология, рестораны, детские товары, отбеливание зубов.' }
  },
  {
    path: '/card',
    component: () => import('../pages/OneBlogPage.vue'),
    meta: { title: 'Кейс — PJ Production', description: 'Кейс по продвижению в соцсетях.' }
  },
  {
    path: '/card/:id',
    component: () => import('../pages/OneBlogPage.vue'),
    name: 'blog-detail',
    meta: { title: 'Кейс — PJ Production', description: 'Кейс по продвижению в соцсетях.' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/NotFound.vue'),
    meta: { title: 'Страница не найдена — PJ Production', description: 'Запрашиваемая страница не найдена.' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

function setMeta(meta) {
  document.title = meta?.title ?? 'PJ Production'
  const desc = document.querySelector('meta[name="description"]')
  if (desc && meta?.description) desc.setAttribute('content', meta.description)
}

router.afterEach((to) => {
  setMeta(to.meta)
})

export default router
