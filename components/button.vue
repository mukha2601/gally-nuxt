<template>
  <button
    class="flex py-2 px-2 sm:px-4 items-center justify-center dark:bg-[#E5E1DA] dark:text-black dark:active:text-white dark:active:bg-black text-white bg-black active:text-black active:bg-white"
  >
    <UIcon :name="icon" class="w-8 h-6" />
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
