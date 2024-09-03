<template>
  <div class="app max-w-[1500px] mx-auto p-2 md:p-3 lg:p-4 bg-[#F1F1F1]">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useImageStore } from "@/store/index";
const imageStore = useImageStore();

onMounted(() => {
  fetch(
    `https://api.unsplash.com/photos/random/?page=${imageStore.mainPage}&count=30&client_id=${imageStore.client_id}`
  )
    .then((response) => response.json())
    .then((items) => {
      console.log(items);
      imageStore.mainImages = items?.map((item) => ({
        id: item.id,
        alt_description: item.alt_description,
        links: item.links,
        urls: item.urls,
      }));
    });
});
</script>

<style>
/* body{
  background-color: #f5f5f5;
} */
::-webkit-scrollbar {
  width: 0.4rem;
  background-color: rgb(75, 75, 75);
}

::-webkit-scrollbar-thumb {
  background: rgb(167, 167, 167);
}
</style>
