<template>
  <div
    class="fixed h-10 flex z-20 left-2 max-lg:top-2 bottom-2 backdrop-blur-2xl bg-white/20"
  >
    <!-- Toggle Button -->
    <SharedButton class-name="px-2" @click="toggleSearch">
      <div v-if="isSearchOpen">
        <IconsLeft icon="lucide:x" style="color: #000" />
      </div>
      <IconsSearch
        v-else
        icon="lucide:search"
        width="24"
        height="24"
        style="color: #000"
      />
    </SharedButton>

    <div
      class="flex overflow-hidden transition-all duration-500 ease-in-out"
      :class="{
        'w-0 opacity-0': !isSearchOpen,
        'md:w-80 opacity-100': isSearchOpen,
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
      <SharedButton class="bg-black/75 shrink-0" @click="goSearch">
        <IconsSearch
          icon="lucide:search"
          width="24"
          height="24"
          style="color: #000"
        />
      </SharedButton>
    </div>
  </div>
  <div class="fixed right-2 bottom-2 z-20">
    <SharedButton>
      <IconsHome icon="charm:home" width="24" height="24" color="#000" />
    </SharedButton>
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
  // isSearchOpen.value = false;
}
</script>
