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
      <Button
        icon="material-symbols:keyboard-arrow-down"
        @click="imageStore.showMoreMain()"
      />
    </div>
  </div>
</template>
