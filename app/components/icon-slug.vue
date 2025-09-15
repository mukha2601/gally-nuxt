<script setup lang="ts">
defineProps<{
  size?: number | string;
  color?: string;
  className?: string;
}>();
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size || 24"
    :height="size || 24"
    fill="none"
    :stroke="color || 'currentColor'"
    :class="className || 'text-icon'"
  >
    <slot />
  </svg>
</template>
