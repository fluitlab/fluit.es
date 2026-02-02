import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Si usas un dominio personalizado, base debe ser '/'
  // Si usas la url de github (usuario.github.io/repo), base debe ser '/repo/'
  base: '/fluit.es/',
})
