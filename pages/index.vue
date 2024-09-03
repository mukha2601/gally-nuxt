<script setup>
import { useImageStore } from "@/store/index";
const imageStore = useImageStore();
</script>

<template>
  <Modal />
  <div class="flex flex-col gap-4">
    <Grid :images="imageStore.mainImages" />
    <div class="w-full flex justify-center">
      <Button
        v-if="imageStore.mainImages.length"
        icon="material-symbols:keyboard-arrow-down"
        @click="imageStore.showMoreMain()"
      />
    </div>
  </div>
</template>
