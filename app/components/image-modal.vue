<script setup>
import { useImageStore } from "~/stores/homePage";
const store = useImageStore();
</script>

<template>
  <teleport v-if="store.isOpen" to="body">
    <div
      class="modal-box flex justify-center items-center fixed inset-0 bg-black/20 backdrop-blur-lg z-50"
    >
      <div
        class="modal flex flex-col justify-center items-center gap-4 h-[80%] max-w-[90%] relative"
      >
        <Loading v-if="store.loading" class="absolute text-white" />
        <NuxtImg
          loading="lazy"
          format="webp"
          :alt="store.selectedImage.alt_description"
          :src="store.selectedImage.urls.regular"
          class="min-w-60 min-h-60 max-w-full max-h-full object-cover"
          @load="store.loading = false"
        />
        <div class="flex gap-2 justify-center sticky">
          <button @click="store.addToLikeList(store.selectedImage)">
            like
          </button>
          <button @click="store.downImg(store.selectedImage.urls.full)">
            down
          </button>
          <Button icon="ic:sharp-close" @click="store.closeModal">close</Button>
        </div>
      </div>
    </div>
  </teleport>
</template>
