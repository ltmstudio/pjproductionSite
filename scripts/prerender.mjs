// Пререндер: после `vite build` открывает каждую страницу в headless-Chromium
// и сохраняет готовый HTML (с текстом, title, description, canonical) в dist/.
// Запуск: npm run build:seo
import http from 'node:http'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { chromium } from 'playwright'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.pdf': 'application/pdf'
}

// Маршруты берём из тех же данных, что использует сайт
const { DataBlog } = await import(pathToFileURL(path.join(root, 'src/data/DataBlog.js')).href)
const routes = ['/', '/blog', ...DataBlog.map((c) => `/card/${c.id}`)]
const NOT_FOUND_PROBE = '/__not-found__' // даст dist/404.html

// Исходный SPA-шаблон сохраняем до того, как перезапишем index.html
const shell = await fs.readFile(path.join(dist, 'index.html'), 'utf8')

// Мини-сервер: отдаёт файлы из dist, для остальных путей — SPA-шаблон
const server = http.createServer(async (req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname)
  const file = path.join(dist, urlPath)
  if (file.startsWith(dist) && path.extname(file)) {
    try {
      const data = await fs.readFile(file)
      res.writeHead(200, { 'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream' })
      return res.end(data)
    } catch {
      res.writeHead(404)
      return res.end('not found')
    }
  }
  res.writeHead(200, { 'Content-Type': MIME['.html'] })
  res.end(shell)
})
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
const origin = `http://127.0.0.1:${server.address().port}`

// Сначала пробуем установленный Chrome (скачивать ничего не нужно),
// если его нет — Chromium от Playwright (npx playwright install chromium)
let browser
try {
  browser = await chromium.launch({ channel: 'chrome' })
} catch {
  browser = await chromium.launch()
}
const context = await browser.newContext({ viewport: { width: 1366, height: 900 } })

async function render(route) {
  const page = await context.newPage()
  // сторонние запросы (Google Fonts и т.п.) не ждём
  await page.route('**/*', (r) => (r.request().url().startsWith(origin) ? r.continue() : r.abort()))
  await page.goto(origin + route, { waitUntil: 'load' })
  await page.waitForFunction(() => document.querySelector('#app')?.children.length > 0, null, { timeout: 15000 })
  await page.waitForTimeout(600)
  // убираем прелоадер и показываем контент, чтобы в HTML текст не был скрыт (display:none)
  await page.evaluate(() => {
    document.querySelectorAll('.preloader').forEach((el) => el.remove())
    document.querySelectorAll('.app-content').forEach((el) => {
      el.style.removeProperty('display')
      if (!el.getAttribute('style')) el.removeAttribute('style')
    })
  })
  const html = '<!DOCTYPE html>\n' + (await page.evaluate(() => document.documentElement.outerHTML))
  await page.close()
  return html
}

async function save(route, html) {
  const out =
    route === NOT_FOUND_PROBE
      ? path.join(dist, '404.html')
      : route === '/'
        ? path.join(dist, 'index.html')
        : path.join(dist, route, 'index.html')
  await fs.mkdir(path.dirname(out), { recursive: true })
  await fs.writeFile(out, html)
  console.log('prerendered', route.padEnd(16), '->', path.relative(root, out))
}

try {
  for (const route of [...routes, NOT_FOUND_PROBE]) {
    await save(route, await render(route))
  }
} finally {
  await browser.close()
  server.close()
}
