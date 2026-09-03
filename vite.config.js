import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { pageMeta, siteUrl } from './src/pageMeta.js'

const replaceAttr = (html, pattern, value) =>
  html.replace(pattern, (match) => match.replace(/(content|href)="[^"]*"/, `$1="${value}"`))

const withMeta = (html, path) => {
  const { title, description, robots } = pageMeta[path]
  const url = `${siteUrl}${path === '/404' ? '/' : path}`

  let out = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)

  out = replaceAttr(out, /<link rel="canonical"[^>]*>/, url)
  out = replaceAttr(out, /<meta name="description"[^>]*>/, description)
  out = replaceAttr(out, /<meta property="og:title"[^>]*>/, title)
  out = replaceAttr(out, /<meta property="og:description"[^>]*>/, description)
  out = replaceAttr(out, /<meta property="og:url"[^>]*>/, url)
  out = replaceAttr(out, /<meta name="twitter:title"[^>]*>/, title)
  out = replaceAttr(out, /<meta name="twitter:description"[^>]*>/, description)

  if (robots) {
    out = out.replace(/\s*<link rel="canonical"[^>]*>/, '')
    out = out.replace('</head>', `  <meta name="robots" content="${robots}" />\n</head>`)
  }

  return out
}

const indexablePaths = () => Object.keys(pageMeta).filter((path) => !pageMeta[path].robots)

const routeSources = {
  '/': ['src/pages/Home.jsx', 'src/pageMeta.js'],
  '/portfolio': ['src/pages/Portfolio.jsx', 'src/pageMeta.js'],
}

const git = (...args) => execFileSync('git', args, { encoding: 'utf8' }).trim()

const hasFullHistory = () => {
  try {
    return git('rev-parse', '--is-shallow-repository') === 'false'
  } catch {
    return false
  }
}

const lastModified = (path) => {
  const dates = (routeSources[path] ?? [])
    .map((file) => git('log', '-1', '--format=%cs', '--', file))
    .filter(Boolean)

  return dates.sort().at(-1)
}

const sitemapEntry = (path, datedByGit) => {
  const lastmod = datedByGit ? lastModified(path) : undefined
  const loc = `<loc>${siteUrl}${path}</loc>`

  return `  <url>${loc}${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`
}

const sitemap = () => {
  const datedByGit = hasFullHistory()

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...indexablePaths().map((path) => sitemapEntry(path, datedByGit)),
    '</urlset>',
    '',
  ].join('\n')
}

const withAppHtml = (html, appHtml) =>
  html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

const page = (shell, path, render) => withAppHtml(withMeta(shell, path), render(path))

const ssrServer = async () => {
  const { createServer } = await import('vite')

  return createServer({
    configFile: false,
    plugins: [react()],
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'error',
  })
}

const clientRouteEntries = () => ({
  name: 'client-route-entries',
  async closeBundle() {
    const dist = fileURLToPath(new URL('./dist/', import.meta.url))
    const shell = readFileSync(`${dist}index.html`, 'utf8')
    const server = await ssrServer()

    try {
      const { render } = await server.ssrLoadModule('/src/entry-server.jsx')

      writeFileSync(`${dist}sitemap.xml`, sitemap())
      writeFileSync(`${dist}index.html`, page(shell, '/', render))
      writeFileSync(`${dist}404.html`, page(shell, '/404', render))

      for (const path of Object.keys(pageMeta)) {
        if (path === '/' || path === '/404') continue

        const route = path.slice(1)
        mkdirSync(`${dist}${route}`, { recursive: true })
        writeFileSync(`${dist}${route}/index.html`, page(shell, path, render))
      }
    } finally {
      await server.close()
    }
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), clientRouteEntries()],
})
