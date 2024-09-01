import { useImageStore } from "@/store/index";

function showMoreMain() {
  const imageStore = useImageStore();
  imageStore.page++;
  fetch(
    `https://api.unsplash.com/photos/random/?page=${imageStore.page}&count=30&client_id=5L7IgPO9W3WngJMhAa31bAes8r0gRoijpKnukBk2VHk`
  )
    .then((response) => response.json())
    .then((items) => {
      // Har bir elementni qo'shamiz
      items.forEach((item) => {
        imageStore.mainImages.push({
          id: item.id,
          alt_description: item.alt_description,
          links: item.links,
          urls: item.urls,
        });
      });
    })
    .catch((error) => {
      console.error("Error fetching images:", error);
    });
}

function showMoreResult() {
  const imageStore = useImageStore();
  imageStore.page++;
  fetch(
    `https://api.unsplash.com/photos/?page=${imageStore.page}&query=${imageStore.inputText}&count=30&client_id=5L7IgPO9W3WngJMhAa31bAes8r0gRoijpKnukBk2VHk`
  )
    .then((response) => response.json())
    .then((items) => {
      // Har bir elementni qo'shamiz
      items.forEach((item) => {
        imageStore.resultImages.push({
          id: item.id,
          alt_description: item.alt_description,
          links: item.links,
          urls: item.urls,
        });
      });
    })
    .catch((error) => {
      console.error("Error fetching images:", error);
    });
}



export { showMoreMain, showMoreResult,fetchImage };
