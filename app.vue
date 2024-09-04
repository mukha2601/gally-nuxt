<template>
  <div
    class="app min-h-screen max-w-[1600px] mx-auto p-2 md:p-3 lg:p-4 bg-[#F1F1F1]"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useImageStore } from "@/store/index";

onBeforeMount(() => {
  const imageStore = useImageStore();
  fetch(
    `https://api.unsplash.com/photos/random/?page=${imageStore.mainPage}&count=30&client_id=${imageStore.client_id}`
  )
    .then((response) => response.json())
    .then((items) => {
      imageStore.mainImages = items?.map((item) => ({
        id: item.id,
        alt_description: item.alt_description,
        links: item.links,
        urls: item.urls,
      }));
    });
});

useHead({
  title: "Gally",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      content:
        "Bu saytda siz o'zingiz uchun avtor tomonidan huquqga ega bo'lmagan fotosuratlarni topishingiz mumkin",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/logo.ico" }],
});

useSeoMeta({
  ogTitle: "Gally",
  ogDescription:
    "Bu saytda siz o'zingiz uchun avtor tomonidan huquqga ega bo'lmagan fotosuratlarni topishingiz mumkin",
  ogImage: "https://www.gally.uz/logo.ico",
  ogUrl: "https://www.gally.uz/",
  ogType: "website",
});
</script>

<style>
::-webkit-scrollbar {
  width: 0.4rem;
  background-color: rgb(75, 75, 75);
}

::-webkit-scrollbar-thumb {
  background: rgb(167, 167, 167);
}
</style>
