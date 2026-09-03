import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const clientRoutes = ['portfolio']

const clientRouteEntries = () => ({
  name: 'client-route-entries',
  closeBundle() {
    const dist = fileURLToPath(new URL('./dist/', import.meta.url))
    const shell = `${dist}index.html`

    copyFileSync(shell, `${dist}404.html`)

    for (const route of clientRoutes) {
      mkdirSync(`${dist}${route}`, { recursive: true })
      copyFileSync(shell, `${dist}${route}/index.html`)
    }
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), clientRouteEntries()],
})
