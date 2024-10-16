<!-- <script setup>
import { useImageStore } from "@/store/index";
const store = useImageStore();

defineProps({
  images: {
    type: Array,
    required: false,
  },
});

const loadedImages = ref([]);

// Rasmlarni ketma-ket yuklash
const loadImagesSequentially = async () => {
  for (const item of images) {
    await loadImage(item.urls.small);
    loadedImages.value.push(item);
  }
};

// Rasm yuklash funksiyasi
const loadImage = (src) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
  });
};

onMounted(async () => {
  await loadImagesSequentially();
});
</script>

<template>
  <div
    class="grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] auto-rows-[10rem] mt-2 md:mt-3 lg:mt-4 gap-2 relative"
  >
    <div v-for="item in loadedImages" :key="item.id" class="overflow-hidden">
      <NuxtImg
        :src="item.urls.small"
        @click="store.openModal(item)"
        class="w-full h-full object-cover hover:border-2 border-black"
      />
    </div>
  </div>
</template> -->
