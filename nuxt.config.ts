import { extendPages } from './app/utils/extend-pages'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  ],
  fonts: [
    {
      name: 'Cabinet Grotesk', // Name of the font
      weight: [400, 500, 700], // Specify the weights you want to use
      display: 'swap', // Use the swap display property for better performance
      fallbacks: ['sans-serif'], // Add fallbacks like sans-serif
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
