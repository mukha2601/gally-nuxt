<template>
  <header
    class="p-2 flex justify-between sticky top-0 z-10 dark:bg-[#1E201E] dark:text-black text-white bg-[#F6F5F2]"
  >
    <button
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
    </button>
    <div
      class="search min-w-[150px] border-s-2 border-gray-500 ps-2 flex items-center"
    >
      <input
        type="search"
        placeholder="search"
        v-model="store.query"
        @keyup.enter="navigate"
        class="min-w-[150px] w-full max-sm:hidden px-4 border-2 outline-none h-full text-black rounded-none bg-[rgba(255,255,255,0.326)]"
      />
      <Button icon="material-symbols:search" @click="navigate" />
      <Button
        @click="toggleDark()"
        icon="material-symbols:dark-mode-outline"
        class="mx-2"
      />

      <Button icon="tabler:heart-down" @click="navigate" />
      <Button icon="mingcute:user-1-line" class="ms-2" @click="navigate" />
    </div>
  </header>
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
