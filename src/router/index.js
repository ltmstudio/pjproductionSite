import { createRouter, createWebHistory } from 'vue-router'
import { DataBlog } from '@/data/DataBlog'

const SITE = 'https://pj-production.ru'
const SITE_NAME = 'PJ Production'

const routes = [
  {
    path: '/',
    component: () => import('../pages/HomePage.vue'),
    meta: {
      title: 'PJ Production — продвижение в соцсетях',
      description: 'PJ Production — продвижение в соцсетях, таргет и контент-стратегии. Кейсы: стоматология, рестораны, детские товары, отбеливание зубов.'
    }
  },
  {
    path: '/blog',
    component: () => import('../pages/BlogPage.vue'),
    meta: {
      title: 'SMM и кейсы — PJ Production',
      description: 'Кейсы по продвижению в соцсетях: стоматология, рестораны, детские товары, отбеливание зубов.'
    }
  },
  // /card без номера не имеет содержимого — отправляем в список кейсов
  { path: '/card', redirect: '/blog' },
  {
    path: '/card/:id',
    component: () => import('../pages/OneBlogPage.vue'),
    name: 'blog-detail'
    // title / description / canonical строятся из DataBlog (см. resolveMeta)
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/NotFound.vue'),
    meta: {
      title: 'Страница не найдена — PJ Production',
      description: 'Запрашиваемая страница не найдена.',
      noindex: true
    }
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

// ---------- SEO: title / description / canonical / og для каждой страницы ----------

const clip = (text, max = 155) => {
  const t = text.replace(/\s+/g, ' ').trim()
  if (t.length <= max) return t
  return t.slice(0, max).replace(/\s+\S*$/, '') + '…'
}

function resolveMeta(to) {
  // Кейс: берём данные из DataBlog
  if (to.name === 'blog-detail') {
    const card = DataBlog.find((c) => c.id === Number(to.params.id))
    if (!card) {
      return {
        title: 'Кейс не найден — PJ Production',
        description: 'Запрашиваемый кейс не найден.',
        noindex: true,
        path: to.path
      }
    }
    const name = card.title.trim()
    return {
      title: `${name} — кейс ${SITE_NAME}`,
      description: clip(`${card.header} ${card.resultText}`),
      path: `/card/${card.id}`
    }
  }
  return { ...to.meta, path: to.path }
}

function setMetaTag(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function applyMeta(to) {
  const meta = resolveMeta(to)
  const title = meta.title ?? SITE_NAME
  const description = meta.description
  // каноничный адрес — без слеша на конце, кроме главной (как в sitemap.xml)
  const path = meta.path === '/' ? '/' : meta.path.replace(/\/+$/, '')
  const url = SITE + path

  document.title = title
  if (description) {
    setMetaTag('name', 'description', description)
    setMetaTag('property', 'og:description', description)
    setMetaTag('name', 'twitter:description', description)
  }
  setMetaTag('property', 'og:title', title)
  setMetaTag('name', 'twitter:title', title)
  setMetaTag('property', 'og:url', url)
  setMetaTag('name', 'robots', meta.noindex ? 'noindex, follow' : 'index, follow')
  if (meta.noindex) document.head.querySelector('link[rel="canonical"]')?.remove()
  else setCanonical(url)
}

router.afterEach((to) => {
  applyMeta(to)
})

export default router