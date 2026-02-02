import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // En desarrollo usa '/', en producción usa '/fluit.es/'
  // Cuando uses dominio personalizado, cambia a '/' en ambos
  base: mode === 'production' ? '/fluit.es/' : '/',
}))
