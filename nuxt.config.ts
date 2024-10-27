import { extendPages } from './app/utils/extend-pages'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'netlify',
    watchOptions: {
      usePolling: true, // Set true if experiencing issues with file change detection
      interval: 1000, // Check for changes every 500ms; adjust as needed
      ignored: ['**/node_modules/**', '**/.git/**'], // Ignore common directories

    },
  },
  compatibilityDate: '2024-04-03',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/test-utils/module', // integration to Nuxt Dev Tools
  ],
  fonts: [
    {
      name: 'Cabinet Grotesk',
      weight: [400, 500, 700, 800],
      display: 'swap',
      fallbacks: ['sans-serif'],
    },
    {
      name: 'Fira Sans',
      weight: [400, 500, 700, 800],
      display: 'swap',
      fallbacks: ['sans-serif'],
    },
  ],
  icon: {
    customCollections: [
      {
        prefix: 'xp',
        dir: './app/assets/icons',
      },
    ],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  hooks: {
    'pages:extend'(pages) {
      extendPages(pages)
    },
  },
  shadcn: {
    componentDir: './app/components/ui',
  },
})
