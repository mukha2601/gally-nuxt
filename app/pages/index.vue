<script setup lang="ts">
import type { ImageType } from "~/types/types";
import { getRandomPhotos } from "~/services/random-photo-service";
import { baseImgProps } from "~/utils/image-props";
import { useImageStore } from "~/stores/homePage";

// Store
const store = useImageStore();

const photos = ref<ImageType[]>([]);
const loading = ref(true);

async function loadRandom() {
  loading.value = true;
  try {
    photos.value = await getRandomPhotos();
  } finally {
    loading.value = false;
  }
}

const columns = computed(() => {
  const perColumn = 8;
  const result: ImageType[][] = [];
  for (let i = 0; i < photos.value.length; i += perColumn) {
    result.push(photos.value.slice(i, i + perColumn));
  }
  return result;
});

onMounted(loadRandom);
</script>

<template>
  <div>
    <IconsLoading v-if="loading" />

    <!-- Rasm ustunlari -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 p-6">
      <div
        v-for="(col, colIndex) in columns"
        :key="colIndex"
        class="flex flex-col gap-2"
      >
        <NuxtImg
          v-for="p in col"
          :key="p.id"
          v-bind="{
            ...baseImgProps,
            src: p.urls.small,
            alt: p.alt_description ?? '',
          }"
          class="hover:p-2 duration-500 cursor-pointer"
          @click="store.openModal(p)"
        />
      </div>
    </div>

    <!-- Modal -->
    <ImageModal />
  </div>
</template>
