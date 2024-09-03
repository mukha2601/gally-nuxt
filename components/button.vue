<template>
  <button
    class="flex py-2 px-4 items-center justify-center border-0 rounded-none bg-black bg-[rgba(255,255,255,0.326)] hover:text-black hover:bg-white"
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
  label: {
    type: String,
    required: false,
  },
});
</script>
