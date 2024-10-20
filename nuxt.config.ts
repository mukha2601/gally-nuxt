// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@pinia/nuxt", "@nuxt/ui", "@nuxtjs/color-mode"],
  colorMode: {
    preference: "light",
    fallback: "light",
    classSuffix: "",
  },
});
