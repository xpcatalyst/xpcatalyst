// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', 'nuxt-icon', '@nuxt/test-utils/module', '@pinia/nuxt'],
})