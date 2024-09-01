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
  <div class="grid grid-cols-4 gap-4">
    <div v-for="item in images">
      <NuxtImg
        :src="item.urls.small"
        :key="item.id"
        @click="imageStore.openModal(item)"
      />
    </div>
  </div>
</template>
