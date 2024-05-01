// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@vueform/nuxt",
  ],
  pinia: {
    storesDirs: ["./stores/**", "./features/**/stores/**"],
  },
  components: [
    { path: "~/components" },
    { path: "~/features/project/components" },
  ],
});
