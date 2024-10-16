<script setup>
import { useImageStore } from "@/store/index";
import { ref } from "vue";
const store = useImageStore();

const data = ref(store.resultImages);

// const route = useRoute();
// const client_id = "5L7IgPO9W3WngJMhAa31bAes8r0gRoijpKnukBk2VHk";
// const resultPage = ref(1);
// const resultImages = ref([]);

// definePageMeta({
//   middleware: "redirect-if-empty",
// });

// console.log(route.params.id);

// const fetchImages = async () => {
//   resultPage.value++;
//   try {
//     const response = await fetch(
//       `https://api.unsplash.com/search/photos/?page=${resultPage}&query=${route.params.id}&per_page=30&client_id=${client_id}`
//     );

//     const items = await response.json();

//     if (items.results && items.results.length > 0) {
//       resultImages.value = items.results.map((item) => ({
//         id: item.id,
//         alt_description: item.alt_description,
//         links: item.links,
//         urls: item.urls,
//       }));

//       // router.push("/result");
//       // store.loading = true;
//     } else {
//       console.log("No results found");
//     }
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

onMounted(() => {
  store.showMoreResult();
});
</script>

<template>
  <Modal />
  <p>hello</p>

  <div class="flex flex-col gap-4">
    <Grid :images="data" />
    <div class="w-full flex justify-center">
      <Button
        icon="material-symbols:keyboard-arrow-down"
        @click="fetchImages"
      />
    </div>
  </div>
</template>
