<script setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(_isDark) {
    colorMode.preference = _isDark ? "dark" : "light";
  },
});
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <SharedButton @click="isDark = !isDark">
      <IconsMoon v-if="isDark" />
      <IconsSun v-else />
    </SharedButton>
  </ClientOnly>
</template>
