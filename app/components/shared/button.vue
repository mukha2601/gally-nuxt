<template>
  <button
    :type="type || 'button'"
    class="cursor-pointer duration-300 p-2 flex justify-center items-center bg-white/60"
    :class="className"
    :disabled="disabled || false"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  icon?: string;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}>();
</script>
