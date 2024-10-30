<template>
  <div class="flex mb-4 border-[1px]" :key="item.id">
    <figure class="overflow-hidden w-44 h-32">
      <NuxtImg :src="item.urls.small_s3" class="w-full h-full object-cover" />
    </figure>
    <div class="flex flex-col w-44 justify-between p-2 px-3">
      <p class="text-sm">{{ item.alt_description }}</p>
      <div class="flex gap-2">
        <Button
          icon="material-symbols:delete-outline"
          @click="store.removeFromStorage(item.id)"
          class="py-1 text-xs rounded-none"
        />
        <Button icon="ic:sharp-arrow-downward" class="py-0 rounded-none" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useImageStore } from "@/store/index";
const store = useImageStore();
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
