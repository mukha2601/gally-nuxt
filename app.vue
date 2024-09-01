<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useImageStore } from "@/store/index";
const imageStore = useImageStore();

onMounted(() => {
  fetch(
    "https://api.unsplash.com/photos/random/?count=30&client_id=5L7IgPO9W3WngJMhAa31bAes8r0gRoijpKnukBk2VHk"
  )
    .then((response) => response.json())
    .then((items) => {
      console.log(items);

      imageStore.images = items?.map((item) => ({
        id: item.id,
        alt_description: item.alt_description,
        links: item.links,
        urls: item.urls,
      }));
    });
});
</script>
