import { fileURLToPath } from 'url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
    '@nuxtjs/supabase',
  ],
  supabase: {
    redirect: false,
  },
  shadcn: {
    prefix: '',
    componentDir: 'app/components/ui',
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  // extends: [
  //   './layers/auth/nuxt.config',
  // ],

  // Extend the auth layer
  // extends: './layers/auth',

  // Use the extendPages hook to add the /login route
  hooks: {
    'pages:extend'(pages) {
      pages.push({
        name: 'login',
        path: '/login',
        file: fileURLToPath(new URL('./layers/auth/presentation/pages/login.vue', import.meta.url)),
      })
    },
  },
})
