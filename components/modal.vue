<script setup>
import { useImageStore } from "@/store/index";
const store = useImageStore();
const loading = ref(false);
const isDisable = ref(false);

function downImg(imgUrl) {
  loading.value = true;
  isDisable.value = true;
  fetch(imgUrl)
    .then((res) => res.blob())
    .then((blob) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = new Date().getTime();
      a.click();
    })
    .catch(() => alert("Failed to download image!"))
    .finally(() => {
      loading.value = false;
      isDisable.value = false;
    });
}
</script>

<template>
  <teleport to="body" v-if="store.isOpen">
    <div
      class="modal-box flex justify-center items-center fixed inset-0 bg-black/50 backdrop-blur-lg z-20"
    >
      <div
        class="modal flex flex-col justify-center items-center gap-4 h-[80%] max-w-[90%] relative"
      >
        <Loading v-if="store.loading" class="absolute text-white" />
        <NuxtImg
        densities="1x 2x"
          loading="lazy"
          :src="store.selectedImage.urls.regular"
          class="min-w-60 min-h-60 max-w-full max-h-full object-cover"
          @load="store.loading = false"
        />
        <div class="flex gap-2 justify-center sticky">
          <Button
            :disabled="isDisable"
            :icon="
              loading
                ? 'line-md:loading-twotone-loop'
                : 'ic:sharp-arrow-downward'
            "
            @click="downImg(store.selectedImage.urls.full)"
          />
          <Button icon="ic:sharp-close" @click="store.closeModal" />
        </div>
      </div>
    </div>
  </teleport>
</template>
