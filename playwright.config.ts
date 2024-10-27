import { defineConfig } from '@playwright/test'
import type { ConfigOptions } from '@nuxt/test-utils/playwright'

export default defineConfig<ConfigOptions>({
  testMatch: '**/__tests__/e2e/*.spec.ts',
})
