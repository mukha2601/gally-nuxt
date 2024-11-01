<template>
  <UContainer class="p-2 md:p-3 lg:p-4">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UContainer>
  <USlideovers />
</template>

<script setup>
useSeoMeta({
  title: "Gally",
  description:
    "Saytdan mualliflik huquqiga ega bo'lmagan fotosuratlarni topib yuklab olishingiz mumkin.",
  ogTitle: "Gally",
  ogDescription:
    "Saytdan mualliflik huquqiga ega bo'lmagan fotosuratlarni topib yuklab olishingiz mumkin.",
  ogImage: "/images/logo.png",
  ogUrl: "https://www.gally.uz/",
  ogType: "website",
  twitterTitle: "Gally",
  twitterDescription:
    "Saytdan mualliflik huquqiga ega bo'lmagan fotosuratlarni topib yuklab olishingiz mumkin.",
  twitterImage: "/images/logo.png",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "author", content: "Muhammaddin" },
    {
      name: "keywords",
      content:
        "bepul fotosuratlar, royxatsiz rasmlar yuklash, avtor huquqiga ega bo'lmagan rasmlar, Creative Commons rasmlar, erkin foydalanish fotosuratlari, public domain photos, free images, royalty-free photos, free stock images, no copyright photos, free image download, public domain images, Creative Commons photos",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/logo.png",
    },
  ],
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
