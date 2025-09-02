<template>
  <div>
    <IconsLoading v-if="loading" />

    <!-- Flex ustunlar -->
    <div class="flex gap-2 p-2">
      <div
        v-for="(col, colIndex) in columns"
        :key="colIndex"
        class="flex flex-col gap-2 flex-1 hover:p-2 duration-800"
      >
        <NuxtImg
          v-for="p in col"
          :key="p.id"
          v-bind="{
            ...baseImgProps,
            src: p.urls.small,
            alt: p.alt_description ?? '',
          }"
          :class="
            isMd
              ? 'grayscale hover:grayscale-0 hover:p-2 duration-800 cursor-pointer'
              : ''
          "
          @click="store.openModal(p)"
        />
      </div>
    </div>

    <!-- Show More -->
    <div class="flex justify-center my-6">
      <button
        v-if="!loading"
        :loading="loading"
        class="text-white"
        @click="loadRandom(true)"
      >
        Show more
      </button>
    </div>

    <!-- Modal -->
    <ImageModal />
  </div>
</template>

<script setup lang="ts">
import type { ImageType } from "~/types/types";
import { getRandomPhotos } from "~/services/random-photo-service";
import { baseImgProps } from "~/utils/image-props";
import { useImageStore } from "~/stores/homePage";
import { useBreakpoints } from "@vueuse/core";

// Store
const store = useImageStore();

const photos = ref<ImageType[]>([]);
const loading = ref(true);

// Breakpoints
const breakpoints = useBreakpoints({
  sm: 640,
  md: 768,
  lg: 1024,
});
const isMd = breakpoints.greaterOrEqual("md");

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

// Rasmlarni ustunlarga taqsimlash
const columns = computed(() => {
  const columnCount = isMd.value ? 4 : 2;
  const result: ImageType[][] = Array.from({ length: columnCount }, () => []);

  photos.value.forEach((photo, index) => {
    result[index % columnCount].push(photo);
  });

  return result;
});

onMounted(() => loadRandom());
</script>
