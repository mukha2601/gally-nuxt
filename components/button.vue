<template>
  <button
    class="flex py-2 px-4 items-center justify-center bg-black active:text-black active:bg-white"
  >
    <UIcon :name="icon" class="w-8 h-6" />
  </button>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: false,
  },
});
</script>
