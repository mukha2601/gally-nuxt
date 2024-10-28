<template>
  <div class="flex mb-4 border-[1px]" :key="item.id">
    <figure class="overflow-hidden w-44 h-32">
      <NuxtImg :src="item.urls.small_s3" class="w-full h-full object-cover" />
    </figure>
    <div class="flex flex-col w-44 justify-between p-2 px-3">
      <p class="text-sm">{{ item.alt_description }}</p>
      <div class="flex gap-2">
        <Button
          @click="removeFromStorage(item.id)"
          label="remove"
          class="py-1 rounded-md"
        />
        <Button label="download" class="py-1 rounded-md" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["remove"]);

function removeFromStorage(id) {
  // localStorage dan ma'lumotlarni olamiz
  let storedItems = JSON.parse(localStorage.getItem("likeList")) || [];

  // item.id ga teng bo'lmagan itemlarni filter qilamiz
  storedItems = storedItems.filter((storedItem) => storedItem.id !== id);

  // yangilangan ma'lumotni localStorage ga saqlaymiz
  localStorage.setItem("likeList", JSON.stringify(storedItems));

  // ota komponentga hodisani yuboramiz
  emit("remove");
}
</script>
