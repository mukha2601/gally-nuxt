<template>
  <UModal v-model="imageStore.isOpen">
    <div class="p-4">
      <NuxtImg :src="imageStore.selectedImage.urls.regular" />
    </div>
  </UModal>
</template>

<script setup>
import { useImageStore } from "@/store/index";
const imageStore = useImageStore();
</script>
