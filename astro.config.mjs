import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://www.blossompixel.xyz',
  output: 'static',
  integrations: [
    react(),
    sitemap({
      serialize(item) {
        return { ...item, changefreq: 'monthly', priority: 1.0, lastmod: '2026-03-02' }
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
})
