import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    // include: ['layers/*/__tests__/unit/*.spec.ts'],
    // environment: 'node',
    workspace: [
      'layers/*',

      {
        extends: true,
        test: {
          include: ['__tests__/components/*.spec.ts'],
          // it is recommended to define a name when using inline configs
          name: 'happy-dom',
          environment: 'happy-dom',
        },
      },
      {
        test: {
          include: ['__tests__/unit/*.spec.ts'],
          name: 'node',
          environment: 'node',
        },
      },
    ],
  },
})
