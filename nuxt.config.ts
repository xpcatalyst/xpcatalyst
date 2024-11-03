import { extendPages } from './app/utils/extend-pages'

import pkg from './package.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  content: {
    // Content module configuration
    navigation: {
      fields: ['title'],
    },
  },
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
  // supabase: {
  //   redirect: false,
  // },
  runtimeConfig: {
    public: {
      version: pkg.version,
      // supabaseUrl: process.env.SUPABASE_URL,
      // supabaseKey: process.env.SUPABASE_KEY,
      baseURL: process.env.NUXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    },
  },
  compatibilityDate: '2024-04-03',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: false },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    // integration to Nuxt Dev Tools
    // '@nuxtjs/supabase',
    '@nuxt/test-utils/module',
    '@pinia/nuxt',
    '@nuxt/content',
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
