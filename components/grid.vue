<template>
  <div class="grid grid-cols-4 gap-4">
    <div v-for="(el, index) in 20">
      <NuxtImg
        src="/logo.png"
        :key="el"
        @click="() => console.log('clicked', index)"
      />
    </div>
  </div>
</template>
