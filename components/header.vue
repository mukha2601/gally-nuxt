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

  if (imageStore.query === "" || imageStore.resultImages.length === 0) {
    router.push("/");
  }

  router.push("/result");
  fetch(
    `https://api.unsplash.com/search/photos/?page=${
      imageStore.resultPage
    }&query=${imageStore.query.trim()}&per_page=30&client_id=${
      imageStore.client_id
    }`
  )
    .then((response) => response.json())
    .then((items) => {
      if (items.results && items.results.length > 0) {
        imageStore.resultImages = items.results.map((item) => ({
          id: item.id,
          alt_description: item.alt_description,
          links: item.links,
          urls: item.urls,
        }));
      } else {
        console.log("No results found");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
</script>
