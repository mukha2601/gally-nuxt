<script setup>
import { useImageStore } from "@/store/index";
const store = useImageStore();
</script>

<template>
  <teleport to="body" v-if="store.isOpen">
    <div
      class="modal-box flex justify-center items-center fixed inset-0 bg-black/50 backdrop-blur-lg z-50"
    >
      <div
        class="modal flex flex-col justify-center items-center gap-4 h-[80%] max-w-[90%] relative"
      >
        <Loading v-if="store.loading" class="absolute text-white" />
        <NuxtImg
          densities="1x 2x"
          loading="lazy"
          format="webp"
          :alt="store.selectedImage.alt_description"
          :src="store.selectedImage.urls.regular"
          class="min-w-60 min-h-60 max-w-full max-h-full object-cover"
          @load="store.loading = false"
        />
        <div class="flex gap-2 justify-center sticky">
          <Button
            icon="ic:round-favorite-border"
            @click="store.addToLikeList(store.selectedImage)"
          />
          <Button
            :disabled="store.isDisable"
            :icon="
              store.modalLoading
                ? 'line-md:loading-twotone-loop'
                : 'ic:sharp-arrow-downward'
            "
            @click="store.downImg(store.selectedImage.urls.full)"
          />
          <Button icon="ic:sharp-close" @click="store.closeModal" />
        </div>
      </div>
    </div>
  </teleport>
</template>
