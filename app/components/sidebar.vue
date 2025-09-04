<template>
  <div class="fixed h-12 flex z-20 left-0 bottom-0 top-1/2 backdrop-blur-2xl bg-white/20">
    <!-- Toggle Button -->
    <SharedButton class-name="px-2" @click="toggleSearch">
      <IconsLeft
        v-if="isSearchOpen"
        :icon="isSearchOpen ? 'lucide:x' : 'lucide:search'"
        style="color: #fff"
      />
      <IconsSearch v-else icon="lucide:search" style="color: #fff" />
    </SharedButton>

    <!-- Search Container with Animation -->
    <div
      class="flex overflow-hidden transition-all duration-500 ease-in-out"
      :class="{
        'w-0 opacity-0': !isSearchOpen,
        'w-96 opacity-100': isSearchOpen,
      }"
    >
      <input
        ref="searchInput"
        v-model="query"
        type="text"
        placeholder="Search..."
        class="flex-1 outline-none backdrop-blur-2xl text-black bg-white/30 px-4 min-w-0"
        @keyup.enter="goSearch"
      />
      <SharedButton class="bg-black/75 text-white shrink-0" @click="goSearch">
        <IconsSearch icon="lucide:search" style="color: #fff" />
      </SharedButton>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "SidebarNav",
});

const query = ref("");
const isSearchOpen = ref(false);
const searchInput = ref<HTMLInputElement | null>(null);
const router = useRouter();

function toggleSearch() {
  isSearchOpen.value = !isSearchOpen.value;

  // Agar search ochilayotgan bo'lsa, input ga focus qilish
  if (isSearchOpen.value) {
    nextTick(() => {
      searchInput.value?.focus();
    });
  } else {
    // Yopilganda query ni tozalash (ixtiyoriy)
    // query.value = "";
  }
}

function goSearch() {
  if (!query.value.trim()) return;
  router.push({ path: "/results", query: { q: query.value } });
  // Search qilingandan so'ng yopish (ixtiyoriy)
  // isSearchOpen.value = false;
}
</script>
