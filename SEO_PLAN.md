# План: мета для индексации и SEO — PJ Production (одна страница)

## 1. Базовые meta в `index.html` ✓

- `lang="ru"` у `<html>`
- `meta name="description"`, `keywords`, `robots` (index, follow)
- `link rel="canonical"` на главную
- `link rel="icon"` → favicon.svg, `apple-touch-icon`, `theme-color`

## 2. Open Graph и Twitter Card ✓

- og:title, og:description, og:image, og:url, og:type, og:locale, og:site_name
- twitter:card, twitter:title, twitter:description, twitter:image

## 3. Файлы для краулеров ✓

- `public/robots.txt` — Allow: /, Sitemap
- `public/sitemap.xml` — один URL: главная страница

## 4. JSON-LD ✓

- Organization + WebSite в `index.html`

## 5. Редиректы и заголовки ✓

- **Nginx:** `deploy/nginx.conf.example` — http→https, www→без www, security headers, SPA fallback.
- **Netlify:** `public/_redirects` (http/www→https), `public/_headers` (security headers).
- **Vercel:** `vercel.json` — headers и редирект www→pj-production.ru.

## 6. Картинка для соцсетей

Положить в `public/` файл **og-image.jpg** (1200×630 px). После `npm run build` он попадёт в `dist/`, по адресу https://pj-production.ru/og-image.jpg его будут использовать og:image и twitter:image.

## 7. Регистрация в поисковиках

- **Яндекс.Вебмастер:** https://webmaster.yandex.ru — добавить сайт https://pj-production.ru, подтвердить право, отправить sitemap: https://pj-production.ru/sitemap.xml
- **Google Search Console:** https://search.google.com/search-console — добавить ресурс https://pj-production.ru, подтвердить, в «Файлы Sitemap» указать https://pj-production.ru/sitemap.xml
