import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
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

const sitemap = () =>
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...indexablePaths().map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`),
    '</urlset>',
    '',
  ].join('\n')

const clientRouteEntries = () => ({
  name: 'client-route-entries',
  closeBundle() {
    const dist = fileURLToPath(new URL('./dist/', import.meta.url))
    const shell = readFileSync(`${dist}index.html`, 'utf8')

    writeFileSync(`${dist}sitemap.xml`, sitemap())
    writeFileSync(`${dist}404.html`, withMeta(shell, '/404'))

    for (const path of Object.keys(pageMeta)) {
      if (path === '/' || path === '/404') continue

      const route = path.slice(1)
      mkdirSync(`${dist}${route}`, { recursive: true })
      writeFileSync(`${dist}${route}/index.html`, withMeta(shell, path))
    }
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), clientRouteEntries()],
})
