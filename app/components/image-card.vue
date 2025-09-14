<template>
  <div>
    <nuxt-img />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  image: {
    type: Object,
    required: true,
  },
});
</script>
