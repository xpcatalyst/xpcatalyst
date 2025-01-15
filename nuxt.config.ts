import pkg from './package.json'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxtjs/supabase',
  ],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      version: pkg.version,
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  icon: {
    customCollections: [
      {
        prefix: 'xpc',
        dir: './app/assets/icons',
      },
    ],
  },
  shadcn: {
    prefix: '',
    componentDir: 'app/components/ui',
  },
})
