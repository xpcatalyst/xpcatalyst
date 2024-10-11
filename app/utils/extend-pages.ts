import { fileURLToPath } from 'url'
import fs from 'fs'
import path from 'path'
import type { NuxtPage } from '@nuxt/schema'

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

export function extendPages(pages: NuxtPage[]) {
  const layersDir = fileURLToPath(new URL('../../layers', import.meta.url))
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

        // // Apply prefix if provided
        // routePath = path.join(options.prefix, routePath)

        pages.push({
          name: `${layer}-${relativePath.replace(/\.vue$/, '').replace(/\//g, '-')}`,
          path: routePath,
          file: file,
        })
      })
    }
  })
}
