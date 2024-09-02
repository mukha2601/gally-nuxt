<script setup>
import { useImageStore } from "@/store/index";
const imageStore = useImageStore();
// import { useRouter } from "vue-router";
// const router = useRouter();
</script>

<template>
  <Modal />
  <div class="flex flex-col gap-4">
    <Grid :images="imageStore.resultImages" />
    <div class="w-full flex justify-center">
      <UButton @click="imageStore.showMoreResult()" class="p-4 border-2"
        >Show More</UButton
      >
    </div>
  </div>
</template>
