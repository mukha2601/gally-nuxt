<script setup lang="ts">
import { useImageStore } from "@/store/index";
const store = useImageStore();
// items holatini yaratamiz
const likeList = ref([]);

function getLocalStorageItems() {
  const localItems = localStorage.getItem("likeList");
  if (localItems) {
    likeList.value = JSON.parse(localItems);
  }
}

// Komponent yuklanayotganda localStorage'dan ma'lumotlarni olish
onMounted(() => {
  getLocalStorageItems();
});

function remove() {
  getLocalStorageItems();
}
</script>

<template>
  <div>
    <USlideover v-model="store.isLikesOpen" prevent-close>
      <UCard class="flex flex-col h-screen relative bg-white dark:bg-black p-1">
        <header
          class="flex justify-between items-center sticky top-0 w-full bg-white dark:bg-black py-2"
        >
          <p class="text-xl">Liked images</p>
          <Button
            icon="iconoir:xmark"
            class="py-1 px-1"
            @click="store.isLikesOpen = false"
          />
        </header>

        <main class="overflow-auto h-[87vh] p-1">
          <LikesCard
            v-if="likeList"
            v-for="item in likeList"
            :item="item"
            @remove="remove"
          />
        </main>
      </UCard>
    </USlideover>
  </div>
</template>
