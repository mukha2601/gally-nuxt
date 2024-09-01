<template>
  <div class="bg-red-500 p-2 flex justify-between">
    <NuxtImg src="/logo.png" width="40" densities="x1" />
    <div class="search w-[300px] border-2">
      <UInput
        color="white"
        variant="outline"
        placeholder="Search..."
        v-model="imageStore.query"
        @keyup.enter="imageStore.searchResult()"
      />
    </div>
  </div>
</template>

<script setup>
import { useImageStore } from "@/store/index";
const imageStore = useImageStore();
</script>
