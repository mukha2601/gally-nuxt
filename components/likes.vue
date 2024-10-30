<script setup>
import { useImageStore } from "@/store/index";
const store = useImageStore();

onMounted(() => {
  store.getLocalStorageItems();
});
</script>

<template>
  <div>
    <USlideover v-model="store.isLikesOpen" :ui="{ rounded: 'rounded-none' }">
      <UCard
        :ui="{
          body: {
            padding: 'p-0',
          },
          rounded: 'rounded-none',
          strategy: 'override',
          base: '',
        }"
        class="flex flex-col h-screen relative bg-white dark:bg-black p-3"
      >
        <header
          class="flex justify-between items-center sticky top-0 w-full bg-white dark:bg-black"
        >
          <p class="text-xl">Liked images</p>
          <Button
            icon="iconoir:xmark"
            class="py-1 px-1"
            @click="store.isLikesOpen = false"
          />
        </header>

        <main class="overflow-auto h-[91vh] mt-3 pe-3">
          <LikesCard
            v-if="store.likeList.length"
            v-for="item in store.likeList"
            :item="item"
          />
        </main>
      </UCard>
    </USlideover>
  </div>
</template>
