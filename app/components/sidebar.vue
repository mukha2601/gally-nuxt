<template>
  <div class="fixed h-12 flex z-20 left-0 bottom-0 top-1/2 backdrop-blur-xl">
    <input
      v-model="query"
      type="text"
      placeholder="Search images..."
      class="flex-1 outline-none hover:pe-8 duration-500 backdrop-blur-2xl text-black bg-white/30 px-4 max-w-96"
    />
    <button class="px-4 bg-black/75 text-white" @click="goSearch">
      <IconsSearch
        icon="lucide:search"
        width="24"
        height="24"
        style="color: #fff"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { IconsSearch } from "#components";

defineOptions({
  name: "SidebarNav",
});
const query = ref("");
const router = useRouter();

function goSearch() {
  if (!query.value.trim()) return;
  router.push({ path: "/results", query: { q: query.value } });
}
</script>
