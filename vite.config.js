import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Tu Nombre de App',
        short_name: 'TuApp',
        description: 'Descripción breve de tu aplicación',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          {
            src: 'icons/logotipo_inaeba.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/logotipo_inaeba.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'icons/icon-app-2.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
})
