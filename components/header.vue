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
          placeholder="Search"
          v-model="store.query"
          @keyup.enter="navigate"
          class="min-w-[150px] w-full max-sm:hidden px-4 outline-none h-full dark:text-white text-black rounded-s-full"
        />

        <Button
          icon="material-symbols:search"
          @click="navigate"
          class="max-sm:hidden rounded-s-none"
        />
        <UPopover
          overlay
          :popper="{ placement: 'bottom-end' }"
          :ui="{ rounded: 'rounded-full' }"
          class="sm:hidden"
        >
          <Button icon="material-symbols:search" />

          <template #panel="{ close }">
            <div class="p-1">
              <input
                type="search"
                placeholder="Search"
                v-model="store.query"
                @keyup.enter="navigate(), close()"
                class="w-[225px] px-4 outline-none h-full dark:text-black text-white dark:bg-white bg-black rounded-full p-4"
              />
            </div>
          </template>
        </UPopover>
        <Button
          @click="toggleDark()"
          icon="material-symbols:dark-mode-outline"
          class="mx-2"
        />

        <div class="relative">
          <Button
            icon="tabler:heart-down"
            @click="store.isLikesOpen = true"
            class="me-2"
          />
          <span
            v-if="store.likeList.length > 0"
            class="absolute top-0 right-1 w-5 h-5 text-white font-bold bg-red-600 grid place-content-center rounded-full text-xs"
            >{{ store.likeList.length }}</span
          >
        </div>

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
