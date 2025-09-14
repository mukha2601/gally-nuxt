<script setup>
import { useImageStore } from "~/stores/home-page";
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
        <IconsLoading v-if="store.loading" />
        <NuxtImg
          loading="lazy"
          format="webp"
          :alt="store.selectedImage.alt_description"
          :src="store.selectedImage.urls.regular"
          class="min-w-60 min-h-60 max-w-full max-h-full object-cover"
          @load="store.loading = false"
        />
        <div class="flex justify-center sticky">
          <SharedButton @click="store.addToLikeList(store.selectedImage)">
            <IconsBookmark />
          </SharedButton>
          <SharedButton @click="store.downImg(store.selectedImage.urls.full)">
            <IconsDownload />
          </SharedButton>
          <SharedButton icon="ic:sharp-close" @click="store.closeModal"
            ><IconsClose color="#000"
          /></SharedButton>
        </div>
      </div>
    </div>
  </teleport>
</template>
