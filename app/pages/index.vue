<script setup lang="ts">
import type { ImageType } from "~/types/types";
import { getRandomPhotos } from "~/services/random-photo-service";
import { useImageStore } from "~/stores/home-page";

const store = useImageStore();

const photos = ref<ImageType[]>([]);
const loading = ref(true);

async function loadRandom(append = false) {
  loading.value = true;
  try {
    const newPhotos = await getRandomPhotos();
    if (append) {
      photos.value.push(...newPhotos);
    } else {
      photos.value = newPhotos;
    }
  } finally {
    loading.value = false;
  }
}

onMounted(() => loadRandom());
</script>

<template>
  <div>
    <ImageGallery
      :photos="photos"
      :loading="loading"
      show-more
      @image-click="store.openModal"
      @load-more="loadRandom(true)"
    />
    <ImageModal />
  </div>
</template>
