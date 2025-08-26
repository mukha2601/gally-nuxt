<template>
  <div class="border backdrop:blur-lg px-6 py-3">
    <i :class="icon" :style="{ opacity: disabled ? 0.5 : 1 }" />
    {{ label }}
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  icon: string;
  disabled?: boolean;
  label?: string;
  type?: "button" | "submit" | "reset";
}>();
</script>
