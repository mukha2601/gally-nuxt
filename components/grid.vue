<script setup>
import { useImageStore } from "@/store/index";
const store = useImageStore();

const props = defineProps({
  images: {
    type: Array,
    required: false,
    default: () => [],
  },
});

const addToLikeList = (item) => {
  // Avval localStorage dan mavjud likeList ni olamiz
  let likeList = JSON.parse(localStorage.getItem("likeList")) || [];

  // Agar element allaqachon mavjud bo'lmasa, uni qo'shamiz
  if (!likeList.some((el) => el.id === item.id)) {
    likeList.push(item);
    localStorage.setItem("likeList", JSON.stringify(likeList));
  }
};
</script>

<template>
  <article
    class="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 auto-rows-[10rem] sm:auto-rows-[14rem] gap-2 relative"
  >
    <!-- <Loading v-if="loading" /> -->
    <figure
      v-for="(item, index) in images"
      :key="item.id"
      class="overflow-hidden group relative"
    >
      <NuxtImg
        loading="lazy"
        densities="1x"
        :src="item.urls.small_s3"
        :alt="item.alt_description"
        @click="store.openModal(item), console.log(item)"
        @load="loading = false"
        class="w-full h-full object-cover hover:border-2 border-black"
      />
      <Button
        icon="ic:round-favorite-border"
        class="absolute bottom-2 right-2 bg-black  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        @click="addToLikeList(item)"
      />
    </figure>
  </article>
</template>
