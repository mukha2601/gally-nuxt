<template>
  <button
    class="flex rounded-full p-3 items-center justify-center border-2 border-gray-600 dark:border-gray-300 dark:bg-[#F5F7F8] dark:text-black dark:active:text-white dark:active:bg-black text-white bg-[#1E201E] active:text-black active:bg-white"
  >
    <UIcon :name="icon" class="w-6 h-6" />
  </button>
</template>

<script setup>
const colorMode = useColorMode();
defineProps({
  icon: {
    type: String,
    required: false,
  },
});
</script>
