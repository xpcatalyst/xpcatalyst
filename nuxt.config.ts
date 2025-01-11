import pkg from './package.json'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  runtimeConfig: {
    public: {
      version: pkg.version,
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon'
  ],
  shadcn: {
    prefix: '',
    componentDir: 'app/components/ui'
  },
  icon: {
    customCollections: [
      {
        prefix: 'xpc',
        dir: './app/assets/icons',
      },
    ],
  },
})