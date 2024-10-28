<template>
  <div class="w-full fixed right-0 flex justify-center top-5 z-10">
    <header
      class="p-1 w-fit shadow-2xl dark:bg-white rounded-full flex justify-between z-10 dark:text-black bg-black text-white"
      style="box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.5)"
    >
      <!-- <button
      @click="store.fetchImages"
      class="sm:border-e-2 border-gray-500 pe-2"
    >
      <NuxtImg
        src="/logo.png"
        width="40"
        height="40"
        densities="x1 x2"
        alt="logo"
      />
    </button> -->
      <div class="search min-w-[150px] border-gray-500 flex items-center">
        <input
          type="search"
          placeholder="search"
          v-model="store.query"
          @keyup.enter="navigate"
          class="min-w-[150px] w-full max-sm:hidden px-4 outline-none h-full dark:text-white text-black rounded-s-full"
        />
        <Button
          icon="material-symbols:search"
          @click="navigate"
          class="sm:rounded-s-none"
        />
        <Button
          @click="toggleDark()"
          icon="material-symbols:dark-mode-outline"
          class="mx-2"
        />

        <Button
          icon="tabler:heart-down"
          @click="store.isLikesOpen = true"
          class="me-2"
        />

        <!-- <Button icon="mingcute:user-1-line" class="ms-2" @click="navigate" /> -->
        <Button icon="material-symbols:refresh" @click="store.fetchImages" />
      </div>
    </header>
  </div>
</template>

<script setup>
import { useImageStore } from "@/store/index";
import { useDark, useToggle } from "@vueuse/core";
const store = useImageStore();
const isDark = useDark();
const toggleDark = useToggle(isDark);

function navigate() {
  if (store.query.length > 0) {
    store.fetchImages();
  }
}
</script>
