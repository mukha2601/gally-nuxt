<!-- <template>
  <div></div>
</template>

<script lang="ts" setup>
import { searchPhotos } from "~/services/search-photo-service";
// Search
const query = ref("");
async function doSearch() {
  if (!query.value) return loadRandom();
  loading.value = true;
  try {
    const res = await searchPhotos(query.value, 1, 30);
    photos.value = res.results;
  } finally {
    loading.value = false;
  }
}
</script> -->

<template>
  <div
    class="fixed h-12 flex z-20 left-0 bottom-0 top-1/2 w-full backdrop-blur-xl"
  >
    <input type="text" class="bg-white outline-none px-4" />
    <button>search</button>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: "SidebarNav",
});
</script>

<style></style>
