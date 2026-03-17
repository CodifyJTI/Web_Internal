import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'Logo_Codify.png'],
      manifest: {
        name: 'Codify Internal Portal',
        short_name: 'Codify',
        description: 'Internal operational portal for Codify',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'Logo_Codify.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'Logo_Codify.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
