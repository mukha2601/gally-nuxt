<template>
  <teleport to="body" v-if="imageStore.isOpen">
    <div
      class="modal-box flex justify-center items-center fixed inset-0 bg-black/50 backdrop-blur-lg"
      @click="imageStore.closeModal"
    >
      <div
        class="modal flex flex-col justify-center gap-4 h-[80%] max-w-[90%] relative"
      >
        <NuxtImg
          :src="imageStore.selectedImage.urls.regular"
          class="max-w-full max-h-full"
        />
        <div class="flex justify-end gap-2">
          <Button icon="ic:sharp-arrow-downward" />
          <Button icon="ic:sharp-close" />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { useImageStore } from "@/store/index";
const imageStore = useImageStore();
</script>
