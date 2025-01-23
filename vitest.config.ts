import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    include: ['layers/*/__tests__/unit/*.spec.ts'],
    environment: 'node',
  },
})
