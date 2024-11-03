export default defineNuxtConfig({
  components: [
    { path: './presentation/components' },
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
})
