<template>
  <div class="flex mb-4 border-[1px]">
    <figure class="overflow-hidden w-44 h-32">
      <NuxtImg :src="item.urls.small_s3" class="w-full h-full object-cover" />
    </figure>
    <div class="flex flex-col w-44 justify-between p-2 px-3">
      <p class="text-sm">{{ item.alt_description }}</p>
      <div class="flex gap-2">
        <Button label="remove" class="py-1 rounded-md" />
        <Button label="download" class="py-1 rounded-md" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
