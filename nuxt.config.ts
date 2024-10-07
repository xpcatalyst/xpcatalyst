import { fileURLToPath } from 'url'
import fs from 'fs'
import path from 'path'

// Function to recursively get all Vue files in a directory
const getVueFiles = (dir: string): string[] => {
  const files = fs.readdirSync(dir, { withFileTypes: true })
  return files.flatMap((file) => {
    const filePath = path.join(dir, file.name)
    if (file.isDirectory()) {
      return getVueFiles(filePath)
    }
    else if (file.name.endsWith('.vue')) {
      return [filePath]
    }
    return []
  })
}

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
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    },
  },
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
  // hooks: {
  //   'pages:extend'(pages) {
  //     pages.push({
  //       name: 'login',
  //       path: '/login',
  //       file: fileURLToPath(new URL('./layers/auth/presentation/pages/login.vue', import.meta.url)),
  //     })
  //   },
  // },

  hooks: {
    'pages:extend'(pages) {
      const layersDir = fileURLToPath(new URL('./layers', import.meta.url))
      const layers = fs.readdirSync(layersDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)

      layers.forEach((layer) => {
        const presentationDir = path.join(layersDir, layer, 'presentation')
        if (fs.existsSync(presentationDir)) {
          const vueFiles = getVueFiles(presentationDir)
          vueFiles.forEach((file) => {
            const relativePath = path.relative(presentationDir, file)
            let routePath = `/${relativePath.replace(/\.vue$/, '').replace(/index$/, '')}`

            // Remove 'pages' from the route path if it exists
            routePath = routePath.replace(/^\/pages/, '')

            // Special case for dashboard and login
            if (routePath === '/dashboard' || routePath === '/login') {
              routePath = `/${routePath.split('/').pop()}`
            }

            pages.push({
              name: `${layer}-${relativePath.replace(/\.vue$/, '').replace(/\//g, '-')}`,
              path: routePath,
              file: file,
            })
          })
        }
      })
    },
  },
})
