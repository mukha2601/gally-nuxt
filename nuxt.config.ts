import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxt/eslint", "@nuxt/image", "@pinia/nuxt", "@nuxtjs/color-mode"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      unsplashAccessKey: process.env.NUXT_PUBLIC_UNSPLASH_ACCESS_KEY,
      apiBase: process.env.API_BASE || "https://api.unsplash.com",
    },
  },
  app: {
    head: {
      title: "Gally",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          key: "description",
          name: "description",
          content:
            "Saytdan mualliflik huquqiga ega bo'lmagan fotosuratlarni topib yuklab olishingiz mumkin.",
        },
        {
          name: "keywords",
          content:
            "gally, rasm, qidirish, bepul fotosurat, surat, yuklab olish, mualliflik huquqi, unsplash",
        },
        { name: "author", content: "muhammaddin" },
        // OpenGraph
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Gally" },
        {
          property: "og:description",
          content: "Mualliflik huquqiga ega bo'lmagan fotosuratlar",
        },
        { property: "og:image", content: "/gally-logo.png" },
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Gally" },
        {
          name: "twitter:description",
          content:
            "Saytdan mualliflik huquqiga ega bo'lmagan fotosuratlarni topib yuklab olishingiz mumkin.",
        },
        { name: "twitter:image", content: "/gally-logo.png" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/gally-logo.png" },
        { rel: "canonical", href: "https://gally.uz" },
      ],
      htmlAttrs: {
        lang: "uz",
      },
    },
  },
});
