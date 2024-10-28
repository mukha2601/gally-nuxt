<template>
  <UContainer class="p-2 md:p-3 lg:p-4">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UContainer>
  <USlideovers />
</template>

<script setup>
useHead({
  title: "Gally",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "author", content: "Muhammaddin" },
    {
      name: "description",
      content:
        "Bu saytda siz o'zingiz uchun avtor tomonidan huquqga ega bo'lmagan fotosuratlarni topishingiz va yuklab olishingiz mumkin",
    },
    // Twitter meta teglar
    { name: "twitter:card", content: "./public/logo.png" },
    { name: "twitter:title", content: "Gally" },
    {
      name: "keywords",
      content:
        "bepul fotosuratlar, royxatsiz rasmlar yuklash, avtor huquqiga ega bo'lmagan rasmlar, Creative Commons rasmlar, erkin foydalanish fotosuratlari, public domain photos, free images, royalty-free photos, free stock images, no copyright photos, free image download, public domain images, Creative Commons photos",
    },

    {
      name: "twitter:description",
      content:
        "Bu saytda siz o'zingiz uchun avtor tomonidan huquqga ega bo'lmagan fotosuratlarni topishingiz va yuklab olishingiz mumkin",
    },
    { name: "twitter:image", content: "./public/logo.png" },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/logo.ico" }],
});

useSeoMeta({
  ogTitle: "Gally",
  ogDescription:
    "Bu saytda siz o'zingiz uchun avtor tomonidan huquqga ega bo'lmagan fotosuratlarni topishingiz va yuklab olishingiz mumkin",
  ogImage: "./public/logo.png",
  ogUrl: "https://www.gally.uz/",
  ogType: "website",
});
</script>

<style>
body {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 0.4rem;
  background-color: rgb(75, 75, 75);
}

::-webkit-scrollbar-thumb {
  background-color: rgb(167, 167, 167);
}
</style>
