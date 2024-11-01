<template>
  <div class="flex mb-4 border-[1px] dark:border-gray-600" :key="item.id">
    <figure class="overflow-hidden w-[50%] h-32">
      <NuxtImg
        @click="store.openModal(item)"
        :src="item.urls.small_s3"
        class="w-full h-full object-cover cursor-pointer"
      />
    </figure>
    <div class="flex flex-col w-[50%] justify-between p-2 px-3">
      <p class="max-sm:text-xs">
        {{
          item.alt_description.split("").length > 58
            ? item.alt_description + "..."
            : item.alt_description
        }}
      </p>
      <div class="flex gap-2">
        <Button
          icon="material-symbols:delete-outline"
          @click="store.removeFromStorage(item.id)"
          class="py-1 text-xs rounded-none"
        />
        <Button
          class="py-0 rounded-none"
          :disabled="store.isDisable"
          :icon="
            store.modalLoading
              ? 'line-md:loading-twotone-loop'
              : 'ic:sharp-arrow-downward'
          "
          @click="store.downImg(item.urls.full)"
        />
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
