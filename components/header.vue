<template>
  <div class="bg-white p-2 flex justify-between sticky top-0 z-10">
    <div class="sm:border-e-2 border-gray-500 pe-2">
      <NuxtImg src="/logo.png" width="40" densities="x4" />
    </div>
    <div
      class="search w-[300px] border-s-2 border-gray-500 ps-2 flex items-center"
    >
      <input
        placeholder="search"
        v-model="imageStore.query"
        @keyup.enter="navigate"
        class="w-full px-4 border-2 outline-none h-full text-black rounded-none bg-[rgba(255,255,255,0.326)]"
      />
      <Button
        icon="material-symbols:search"
        class="max-sm:hidden"
        @click="navigate"
      />
    </div>
  </div>
</template>

<script setup>
import { useImageStore } from "@/store/index";
const imageStore = useImageStore();
import { useRouter } from "vue-router";
const router = useRouter();

async function navigate() {
  router.push("/result");
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos/?page=${
        imageStore.resultPage
      }&query=${imageStore.query.trim()}&per_page=30&client_id=${
        imageStore.client_id
      }`
    );

    const items = await response.json();

    if (items.results && items.results.length > 0) {
      imageStore.resultImages = items.results.map((item) => ({
        id: item.id,
        alt_description: item.alt_description,
        links: item.links,
        urls: item.urls,
      }));

      router.push("/result");
      imageStore.loading = true;
    } else {
      console.log("No results found");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
</script>
