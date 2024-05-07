// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@nuxt/image",
    "nuxt-icon",
    "shadcn-nuxt",
  ],
  pinia: {
    storesDirs: ["./stores/**", "./features/**/stores/**"],
  },
  components: [
    { path: "~/components" },
    { path: "~/features/project/components" },
  ],
  shadcn: {
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});
