<template>
  <div>
    <IconsLoading v-if="loading" />

    <div class="flex gap-2 p-2 overflow-hidden">
      <div
        v-for="(col, colIndex) in columns"
        :key="colIndex"
        class="flex flex-col gap-2 flex-1"
      >
        <NuxtImg
          v-for="p in col"
          :key="p.id"
          v-bind="{
            ...baseImgProps,
            src: p.urls.small,
            alt: p.alt_description ?? '',
          }"
          class="grayscale hover:grayscale-0 hover:scale-103 hover:z-10 transition duration-300 cursor-pointer"
          @click="emit('imageClick', p)"
        />
      </div>
    </div>

    <div v-if="showMore" class="flex justify-center my-6">
      <SharedButton
        v-if="!loading"
        :disabled="loading"
        class-name="px-8 hover:px-10 py-2 border border-primary/20"
        @click="emit('loadMore')"
        >Load more</SharedButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ImageType } from "~/types/types";
import { baseImgProps } from "~/utils/image-props";
import { useBreakpoints } from "@vueuse/core";

// ✅ Props faqat bir marta, top-levelda
const props = withDefaults(
  defineProps<{
    photos: ImageType[];
    loading: boolean;
    showMore?: boolean;
  }>(),
  {
    showMore: false,
  }
);

const { photos, loading, showMore } = toRefs(props);

const emit = defineEmits<{
  (e: "imageClick", image: ImageType): void;
  (e: "loadMore"): void;
}>();

// Breakpoints
const breakpoints = useBreakpoints({ sm: 640, md: 768, lg: 1024 });
const isMd = breakpoints.greaterOrEqual("md");

// Rasmlarni ustunlarga taqsimlash
const columns = computed(() => {
  const columnCount = isMd.value ? 5 : 2;
  const result: ImageType[][] = Array.from({ length: columnCount }, () => []);

  photos.value.forEach((photo, index) => {
    result[index % columnCount].push(photo);
  });

  return result;
});
</script>
