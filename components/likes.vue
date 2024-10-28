<script setup lang="ts">
import { useImageStore } from "@/store/index";
const store = useImageStore();
// items holatini yaratamiz
const likeList = ref([]);

// Component yuklanganda localStorage'dan ma'lumotlarni o'qish
onMounted(() => {
  const localItems = computed(() => localStorage.getItem("likeList"));
  if (localItems.value) {
    likeList.value = JSON.parse(localItems.value);
  }
});

console.log(likeList.value);
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
          <LikesCard v-if="likeList" v-for="item in likeList" :item="item" />
        </main>
      </UCard>
    </USlideover>
  </div>
</template>
