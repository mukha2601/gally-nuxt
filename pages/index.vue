<script setup>
import { useImageStore } from "@/store/index";
const imageStore = useImageStore();
</script>

<template>
  <Modal />
  <Grid :images="imageStore.images" />
  <UButton @click="imageStore." class="p-4 border-2">Show More</UButton>
</template>
