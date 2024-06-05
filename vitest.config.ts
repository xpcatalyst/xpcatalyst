// import { defineConfig } from 'vitest/config'
// import vue from '@vitejs/plugin-vue'

// export default defineConfig({
//   plugins: [vue()],
//   test: {
//     environment: 'happy-dom',
//     globals: true,
//   },
// });


import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  test: {
    environment: 'nuxt'
  },
})