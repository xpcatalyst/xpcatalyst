import { extendPages } from './app/utils/extend-pages'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  image: {
    // dir: 'public',
    provider: 'netlify',
  },
  nitro: {
    // preset: 'netlify',
    watchOptions: {
      usePolling: true, // Set true if experiencing issues with file change detection
      interval: 1000,
      ignored: ['**/node_modules/**', '**/.git/**'],

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
