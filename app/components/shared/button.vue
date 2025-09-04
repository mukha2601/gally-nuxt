<template>
  <button
    :type="type || 'button'"
    class="cursor-pointer duration-300 text-black p-3 flex justify-center items-center"
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
