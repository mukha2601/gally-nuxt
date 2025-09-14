<script setup lang="ts">
defineProps<{
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  className?: string;
}>();
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="size || 18"
    :height="size || 18"
    fill="none"
    :stroke="color || 'currentColor'"
    :stroke-width="strokeWidth || 2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="className"
  >
    <path d="m21 21l-4.34-4.34" />
    <circle cx="11" cy="11" r="8" />
  </svg>
</template>
