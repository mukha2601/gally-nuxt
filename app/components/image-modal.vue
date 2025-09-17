<script setup>
import { useImageStore } from "~/stores/store";
const store = useImageStore();
</script>

<template>
  <teleport v-if="store.isOpen" to="body">
    <div
      class="modal-box flex justify-center items-center fixed inset-0 bg-black/20 backdrop-blur-lg z-50"
    >
      <div
        class="modal flex flex-col justify-center items-center gap-4 h-[90%] max-w-[90%] relative"
      >
        <IconsLoading v-if="store.loading" />
        <NuxtImg
          loading="lazy"
          format="webp"
          :alt="store.selectedImage.alt_description"
          :src="store.selectedImage.urls.regular"
          class="min-w-60 min-h-40 max-w-full max-h-full object-cover"
          @load="store.loading = false"
        />
        <div v-if="!store.loading" class="flex justify-center sticky">
          <SharedButton
            :disabled="store.modalLoading"
            :class-name="
              store.modalLoading ? 'opacity-50 !cursor-not-allowed' : 'cursor-pointer'
            "
            @click="store.downImg(store.selectedImage.urls.full)"
          >
            <LoadingMini v-if="store.modalLoading" />
            <IconsDownload v-else />
          </SharedButton>
          <SharedButton icon="ic:sharp-close" @click="store.closeModal">
            <IconsClose />
          </SharedButton>
        </div>
      </div>
    </div>
  </teleport>
</template>
