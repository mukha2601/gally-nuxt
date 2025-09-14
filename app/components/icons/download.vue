<script setup lang="ts">
defineProps<{
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  classT?: string;
}>();
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="size || 24"
    :height="size || 24"
    fill="none"
    :stroke="color || 'currentColor'"
    :stroke-width="strokeWidth || 2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="classT"
  >
    <path d="M12 5v14m7-7l-7 7l-7-7" />
  </svg>
</template>
