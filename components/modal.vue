<template>
    <UModal
      v-model="imageStore.isOpen"
      :close="imageStore.closeModal"
      :ui="{
        overlay: {
          background: 'dark:bg-gray-800/95',
        },
      }"
    >
      <NuxtImg
        :src="imageStore.selectedImage.urls.small"
        class="h-[80vh] w-auto object-cover"
      />
      <div class=""></div>
    </UModal>
</template>

<script setup>
import { useImageStore } from "@/store/index";
const imageStore = useImageStore();
</script>
<style scoped>
.custom-modal-height {
  height: 80%;
}
</style>
