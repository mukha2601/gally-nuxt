<script setup lang="ts">
import type { ImageType } from "~/types/types";
import { searchPhotos } from "~/services/search-photo-service";
import { useImageStore } from "~/stores/home-page";

const store = useImageStore();
const route = useRoute();

const query = computed(() => (route.query.q as string) || "");

const photos = ref<ImageType[]>([]);
const loading = ref(false);
const page = ref(1);

// 🔍 Qidirish funksiyasi
async function loadSearch(reset = true) {
  if (!query.value) return;
  loading.value = true;
  try {
    if (reset) {
      page.value = 1;
      const res = await searchPhotos(query.value, page.value);
      photos.value = res.results;
    } else {
      page.value += 1;
      const res = await searchPhotos(query.value, page.value);
      photos.value.push(...res.results);
    }
  } finally {
    loading.value = false;
  }
}

// Query o‘zgarsa yangidan yuklaymiz
watch(query, () => loadSearch(true), { immediate: true });
</script>

<template>
  <div>
    <ImageGallery
      :photos="photos"
      :loading="loading"
      show-more
      @load-more="loadSearch(false)"
      @image-click="store.openModal"
    />

    <ImageModal />
  </div>
</template>
