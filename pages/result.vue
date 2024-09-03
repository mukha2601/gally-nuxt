<script setup>
import { useImageStore } from "@/store/index";
const imageStore = useImageStore();
// import { useRouter } from "vue-router";
// const router = useRouter();

definePageMeta({
  middleware: 'redirect-if-empty'
});

// onMounted(() => {
//   if (imageStore.resultImages.length == 0) {
//     router.push('/')
//   }
// })
</script>

<template>
  <Modal />
  <div class="flex flex-col gap-4">
    <Grid :images="imageStore.resultImages" />
    <div class="w-full flex justify-center">
      <Button
        icon="material-symbols:keyboard-arrow-down"
        @click="imageStore.showMoreResult()"
      />
    </div>
  </div>
</template>
