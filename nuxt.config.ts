import { extendPages } from './app/utils/extend-pages'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  image: {
    provider: process.env.NODE_ENV === 'production' ? 'netlify' : '',
  },
  nitro: {
    // preset: 'netlify',
    watchOptions: {
      usePolling: true, // Set true if experiencing issues with file change detection
      interval: 1000,
      ignored: ['**/node_modules/**', '**/.git/**'],

    },
  },
  supabase: {
    redirect: false,
  },
  runtimeConfig: {
    public: {
      // supabaseUrl: process.env.SUPABASE_URL,
      // supabaseKey: process.env.SUPABASE_KEY,
      baseURL: process.env.NUXT_PUBLIC_BASE_URL || 'http://localhost:3000',
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
    // integration to Nuxt Dev Tools
    '@nuxt/test-utils/module',
    // '@nuxtjs/supabase',
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
