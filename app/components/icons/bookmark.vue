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
    <path d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
</template>
