import { defineStore } from "pinia";

export const useImageStore = defineStore("images", {
  state: () => {
    return {
      images: [],
      selectedImage: null,
      isOpen: false,
      page: 1,
      query: "",
    };
  },
  actions: {
    openModal() {
      this.isOpen = true;
      this.selectedItem = null;
    },
    closeModal() {
      this.isOpen = false;
      this.selectedItem = null;
    },
    showMore() {
      this.page++;
      fetch(
        `https://api.unsplash.com/photos/?page=${this.page}&query=${this.query}&count=30&client_id=5L7IgPO9W3WngJMhAa31bAes8r0gRoijpKnukBk2VHk`
      )
        .then((response) => response.json())
        .then((items) => {
          // Har bir elementni qo'shamiz
          items.forEach((item) => {
            this.images.push({
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
    },
    searchResult() {
      fetch(
        `https://api.unsplash.com/photos/?page=${this.page}&query=${this.query}&count=30&client_id=5L7IgPO9W3WngJMhAa31bAes8r0gRoijpKnukBk2VHk`
      )
        .then((response) => response.json())
        .then((items) => {
          console.log(items);
          this.images = items?.map((item) => ({
            id: item.id,
            alt_description: item.alt_description,
            links: item.links,
            urls: item.urls,
          }));
        });
    },
  },
});
