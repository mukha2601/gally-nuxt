<script setup>
import { useImageStore } from "@/store/index";
const imageStore = useImageStore();

definePageMeta({
  middleware: "redirect-if-empty",
});
</script>

<template>
  <Modal />

  <div class="flex flex-col gap-4">
    <Grid :images="imageStore.resultImages" />
    <div class="w-full flex justify-center">
      <Button
        v-if="imageStore.resultImages.length"
        icon="material-symbols:keyboard-arrow-down"
        @click="imageStore.showMoreResult()"
      />
    </div>
  </div>
</template>
