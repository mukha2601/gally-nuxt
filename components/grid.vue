<script setup>
import { useImageStore } from "@/store/index";
const imageStore = useImageStore();

defineProps({
  images: {
    type: Array,
    required: false,
  },
});
</script>

<template>
  <!-- <Loading v-if="imageStore.loading" /> -->
  <div
    class="grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] auto-rows-[10rem] mt-2 md:mt-3 lg:mt-4 gap-2 relative"
  >
    <div v-for="item in images" class="overflow-hidden">
      <NuxtImg
        :src="item.urls.small"
        :key="item.id"
        @click="imageStore.openModal(item)"
        @load="imageStore.loading = false"
        class="w-full h-full object-cover hover:border-2 border-black"
      />
    </div>
  </div>
</template>
