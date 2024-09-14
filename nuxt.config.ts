// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-07-03',
  modules: [
    '@nuxt/test-utils/module',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/eslint',
  ],
  shadcn: {
    prefix: '',
    componentDir: 'app/components/ui',
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
