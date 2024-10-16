<script setup>
import { useImageStore } from "@/store/index";
const store = useImageStore();
// const loading = ref(false);

const props = defineProps({
  images: {
    type: Array,
    required: false,
    default: () => [],
  },
});

// onMounted(() => {
//   loading.value = true;
// });
</script>

<template>
  <div
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 auto-rows-[10rem] sm:auto-rows-[14rem] mt-2 md:mt-3 lg:mt-4 gap-2 relative"
  >
    <!-- <Loading v-if="loading" /> -->
    <div
      v-for="(item, index) in images"
      :key="item.id"
      class="overflow-hidden relative"
    >
      <NuxtImg
        loading="lazy"
        densities="1x 2x"
        :src="item.urls.small_s3"
        :alt="item.alt_description"
        @click="store.openModal(item)"
        @load="loading = false"
        class="w-full h-full object-cover hover:border-2 border-black"
      />
    </div>
  </div>
</template>
