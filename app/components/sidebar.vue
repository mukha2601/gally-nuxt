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
  <div class="text-white fixed left-0 flex h-screen items-center">
    <input type="text" class="bg-white" />
    <button>search</button>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: "SidebarNav",
});
</script>

<style></style>
