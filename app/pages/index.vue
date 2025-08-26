<script setup lang="ts">
import type { ImageType } from "~/types/types";
import { getRandomPhotos } from "~/services/random-photo-service";
import { searchPhotos } from "~/services/search-photo-service";
import { baseImgProps } from "~/utils/image-props";

// Rasmlar
const photos = ref<ImageType[]>([]);

// Search
const query = ref("");
const loading = ref(false);

async function loadRandom() {
  loading.value = true;
  try {
    photos.value = await getRandomPhotos(30, 1);
  } finally {
    loading.value = false;
  }
}

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

onMounted(loadRandom);
</script>

<template>
  <div class="p-6">
    <!-- Qidiruv -->
    <div class="flex gap-2 mb-6">
      <input
        v-model="query"
        placeholder="Search Unsplash photos..."
        class="w-full"
        @keyup.enter="doSearch"
      />
      <button @click="doSearch">Search</button>
    </div>

    <div v-if="loading" class="text-center text-gray-500">Loading...</div>

    <!-- Rasm grid -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded-none">
      <NuxtImg
        v-for="p in photos"
        :key="p.id"
        v-bind="{
          ...baseImgProps,
          src: p.urls.small,
          alt: p.alt_description ?? '',
        }"
      />
    </div>
  </div>
</template>
