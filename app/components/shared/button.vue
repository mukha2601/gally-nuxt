<template>
  <button
    :type="type || 'button'"
    class="cursor-pointer duration-300 p-2 hover:px-3 flex justify-center items-center text-text bg-button hover:bg-button/80 active:bg-white"
    :class="className"
    :disabled="disabled"
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
