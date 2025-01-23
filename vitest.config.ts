import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    workspace: [
      'layers/*',
      {
        test: {
          include: ['__tests__/unit/**/*.spec.ts'],
          name: 'unit',
          environment: 'node',
        },
      },
    ],
  },
})
