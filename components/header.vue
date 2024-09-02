<template>
  <div class="bg-red-500 p-2 flex justify-between sticky top-0">
    <NuxtImg src="/logo.png" width="40" densities="x1" />
    <div class="search w-[300px] border-2">
      <UInput
        color="white"
        variant="outline"
        placeholder="Search..."
        v-model="imageStore.query"
        @keyup.enter="navigate"
      />
    </div>
  </div>
</template>

<script setup>
import { useImageStore } from "@/store/index";
const imageStore = useImageStore();
import { useRouter } from "vue-router";
const router = useRouter();

function navigate() {
  console.log(router);
  
  router.push("/result");
  fetch(
    `https://api.unsplash.com/search/photos/?page=${imageStore.resultPage}&query=${imageStore.query}&per_page=30&client_id=${imageStore.client_id}`
  )
    .then((response) => response.json())
    .then((items) => {
      console.log(items);
      imageStore.resultImages = items?.results?.map((item) => ({
        id: item.id,
        alt_description: item.alt_description,
        links: item.links,
        urls: item.urls,
      }));
    });
}
</script>
