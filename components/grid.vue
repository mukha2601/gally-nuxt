<script setup>
import { useImageStore } from "@/store/index";
const imageStore = useImageStore();
defineProps({
  images: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div
    class="grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] auto-rows-[10rem]"
  >
    <div v-for="item in images" class="overflow-hidden">
      <NuxtImg
        :src="item.urls.small"
        :key="item.id"
        @click="imageStore.openModal(item)"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>
