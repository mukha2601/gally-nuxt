<script setup>
import { useImageStore } from "@/store/index";
const imageStore = useImageStore();
</script>

<template>
  <Modal />
  <div class="flex flex-col gap-4">
    <Grid :images="imageStore.mainImages" />
    <div class="w-full flex justify-center">
      <UButton @click="imageStore.showMoreMain()" class="p-4 border-2 "
        >Show More</UButton
      >
    </div>
  </div>
</template>
