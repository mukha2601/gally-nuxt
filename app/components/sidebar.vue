<template>
  <div
    class="fixed h-10 flex z-20 left-2 max-lg:top-2 bottom-2 backdrop-blur-2xl bg-white/20"
  >
    <!-- Toggle Button -->
    <SharedButton class-name="px-2" @click="toggleSearch">
      <div v-if="isSearchOpen">
        <IconsLeft />
      </div>
      <IconsSearch v-else />
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
      <SharedButton @click="goSearch">
        <IconsSearch />
      </SharedButton>
    </div>
  </div>
  <div class="fixed flex right-2 bottom-2 z-20">
    <SharedButton v-if="showScrollToTop" @click="scrollToTop">
      <IconsUp />
    </SharedButton>

    <SharedButton
      v-if="!isHomePage"
      class-name="flex gap-1"
      @click="() => navigateTo('/')"
    >
      <IconsHome />
    </SharedButton>

    <SharedButton v-if="isHomePage" @click="refreshPage">
      <IconsRefresh />
    </SharedButton>

    <ColorModeButton />
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
const route = useRoute();

// Scroll to top visibility
const showScrollToTop = ref(false);

// Check if current page is home
const isHomePage = computed(() => route.path === "/");

// Scroll event handler
function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // Show button when user is 200px or less from the bottom (including at the bottom)
  const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
  showScrollToTop.value = distanceFromBottom <= 200;
}

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Refresh page function
function refreshPage() {
  window.location.reload();
}

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
  isSearchOpen.value = false;
}

// Add scroll event listener on mount
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // Initial check
  handleScroll();
});

// Remove scroll event listener on unmount
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
