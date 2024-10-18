<template>
  <header class="bg-white p-2 flex justify-between sticky top-0 z-10">
    <button
      @click="store.fetchImages"
      class="sm:border-e-2 border-gray-500 pe-2"
    >
      <NuxtImg src="/logo.png" width="40" height="40" densities="x1 x2" alt="logo" />
    </button>
    <div
      class="search w-[300px] border-s-2 border-gray-500 ps-2 flex items-center"
    >
      <input
      type="search"
        placeholder="search"
        v-model="store.query"
        @keyup.enter="navigate"
        class="w-full px-4 border-2 outline-none h-full text-black rounded-none bg-[rgba(255,255,255,0.326)]"
      />
      <Button
        icon="material-symbols:search"
        class="max-sm:hidden"
        @click="navigate"
      />
    </div>
  </header>
</template>

<script setup>
import { useImageStore } from "@/store/index";
const store = useImageStore();

function navigate() {
  if (store.query.length > 0) {
    store.fetchImages();
  }
}
</script>
