<script setup>
import { useImageStore } from "@/store/index";
import { computed, onMounted } from "vue";
const store = useImageStore();

const imgData = computed(() => store.images);

onMounted(() => {
  store.fetchImages();
});
</script>

<template>
  <Modal />
  <Likes />
  <main class="flex flex-col gap-2">
    <Grid v-if="imgData.length" :images="imgData" />
    <Loading v-if="store.loading" class="text-black" />
    <div class="w-full flex justify-center">
      <Button
        v-if="imgData.length"
        icon="ic:sharp-arrow-downward"
        @click="store.moreImages"
        class="my-3"
      />
    </div>
  </main>
</template>
