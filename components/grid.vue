<script setup>
import { useImageStore } from "@/store/index";
const store = useImageStore();

const props = defineProps({
  images: {
    type: Array,
    required: false,
    default: () => [],
  },
});
</script>

<template>
  <article
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 auto-rows-[10rem] sm:auto-rows-[14rem] gap-2 relative"
  >
    <!-- <Loading v-if="loading" /> -->
    <figure
      v-for="(item, index) in images"
      :key="item.id"
      class="overflow-hidden group relative"
    >
      <NuxtImg
        loading="lazy"
        densities="1x"
        format="webp"
        :src="item.urls.small_s3"
        :alt="item.alt_description"
        @click="store.openModal(item)"
        @load="loading = false"
        class="w-full h-full object-cover hover:border-2 border-black"
      />
      <Button
        icon="ic:round-favorite-border"
        class="absolute bottom-2 right-2 hidden group-hover:flex transition-opacity duration-300"
        @click="store.addToLikeList(item)"
      />
    </figure>
  </article>
</template>
