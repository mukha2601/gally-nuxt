<script setup>
import { useImageStore } from "@/store/index";
const imageStore = useImageStore();

function downImg(imgUrl) {
  fetch(imgUrl)
    .then((res) => res.blob())
    .then((blob) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = new Date().getTime();
      a.click();
    })
    .catch(() => alert("Failed to download image!"));
}
</script>

<template>
  <teleport to="body" v-if="imageStore.isOpen">
    <div
      class="modal-box flex justify-center items-center fixed inset-0 bg-black/50 backdrop-blur-lg z-20"
    >
      <Loading v-if="imageStore.loading" />
      <div
        class="modal flex flex-col justify-center gap-4 h-[80%] max-w-[90%] relative"
      >
        <NuxtImg
          :src="imageStore.selectedImage.urls.regular"
          class="max-w-full max-h-full"
        />
        <div class="flex justify-end gap-2">
          <Button
            icon="ic:sharp-arrow-downward"
            @click="downImg(imageStore.selectedImage.urls.full)"
          />
          <Button icon="ic:sharp-close" @click="imageStore.closeModal" />
        </div>
      </div>
    </div>
  </teleport>
</template>
