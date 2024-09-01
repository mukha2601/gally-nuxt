<script setup>
import { useImageStore } from "@/store/index";
import { showMoreResult } from "@/utils/fetch";
const imageStore = useImageStore();

onMounted(() => {
  fetch(
    `https://api.unsplash.com/photos/?page=${imageStore.page}&query=dog&count=30&client_id=5L7IgPO9W3WngJMhAa31bAes8r0gRoijpKnukBk2VHk`
    // `https://api.unsplash.com/photos/?page=${imageStore.page}&query=${imageStore.inputText}&count=30&client_id=5L7IgPO9W3WngJMhAa31bAes8r0gRoijpKnukBk2VHk`
  )
    .then((response) => response.json())
    .then((items) => {
      console.log(items);
      imageStore.resultImages = items?.map((item) => ({
        id: item.id,
        alt_description: item.alt_description,
        links: item.links,
        urls: item.urls,
      }));
    });
});
</script>

<template>
  <Modal />
  <Grid :images="imageStore.resultImages" />
  <button @click="showMoreResult" class="p-4 border-2">Show More</button>
</template>
