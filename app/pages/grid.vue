<script setup lang="ts">
import type { ImageType } from "~/types/types";
import { getRandomPhotos } from "~/services/random-photo-service";
// import { searchPhotos } from "~/services/search-photo-service";
// import { baseImgProps } from "~/utils/image-props";

// Rasmlar
const photos = ref<ImageType[]>([]);

// Search

const loading = ref(false);

async function loadRandom() {
  loading.value = true;
  try {
    photos.value = await getRandomPhotos(30, 1);
  } finally {
    loading.value = false;
  }
}

onMounted(loadRandom);
</script>

<template>
  <div>
    <!-- <div v-if="loading"><IconsLoading /></div> -->

    <!-- Rasm grid -->
    <div
      class="grid grid-cols-64 md:grid-cols-32 md:grid-rows-32 lg:grid-rows-64 rounded-none border border-gray-200 w-full h-screen"
    >
      <NuxtImg
        v-for="p in photos"
        :key="p.id"
        v-bind="{
          ...baseImgProps,
          src: p.urls.small,
          alt: p.alt_description ?? '',
        }"
        class="col-span-8 row-span-8 border border-gray-300"
      />
    </div>
  </div>
</template>
