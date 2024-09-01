<template>
  <div class="max-w-[1440px] mx-auto">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UModals />
  </div>
</template>

<script setup>
import { useImageStore } from "@/store/index";
const imageStore = useImageStore();

onMounted(() => {
  fetch(
    `https://api.unsplash.com/photos/random/?page=${imageStore.page}&count=30&client_id=5L7IgPO9W3WngJMhAa31bAes8r0gRoijpKnukBk2VHk`
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

<style>
::-webkit-scrollbar {
  width: 0.4rem;
  background-color: rgb(75, 75, 75);
}

::-webkit-scrollbar-thumb {
  background: rgb(167, 167, 167);
}
</style>
