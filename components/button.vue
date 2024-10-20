<template>
  <button
    class="flex py-2 px-4 items-center justify-center active:text-black active:bg-white"
    :class="[
      colorMode.preference === 'dark'
        ? 'bg-[#E5E1DA] text-black'
        : 'text-white bg-black',
    ]"
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
