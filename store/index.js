import { defineStore } from "pinia";

export const useImageStore = defineStore("images", {
  state: () => {
    return {
      mainImages: [],
      resultImages: [],
      selectedImage: null,
      isOpen: false,
      mainPage: 1,
      resultPage: 1,
      query: "",
      loading: false,
      client_id: "coqmge2ykQgYjS7v1EqICeFAOZNxpAFi6x34bOOms4g",
    };
  },
  actions: {
    openModal(event) {
      this.isOpen = true;
      this.selectedImage = event;
    },
    closeModal() {
      this.isOpen = false;
      this.selectedImage = [];
    },
    showMoreMain() {
      this.page++;
      fetch(
        `https://api.unsplash.com/photos/random/?page=${this.mainPage}&count=30&client_id=${this.client_id}`
      )
        .then((response) => response.json())
        .then((items) => {
          // Har bir elementni qo'shamiz
          items.forEach((item) => {
            this.mainImages.push({
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
    showMoreResult() {
      this.page++;
      fetch(
        `https://api.unsplash.com/search/photos/?page=${this.mainPage}&per_page=30&client_id=${this.client_id}`
      )
        .then((response) => response.json())
        .then((items) => {
          // Har bir elementni qo'shamiz
          items.forEach((item) => {
            this.resultImages.push({
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
    // searchResult() {
    //   fetch(
    //     `https://api.unsplash.com/search/photos/?page=${this.page}&query=${this.query}&per_page=30&client_id=${this.client_id}`
    //   )
    //     .then((response) => response.json())
    //     .then((items) => {
    //       console.log(items);
    //       this.images = items?.results?.map((item) => ({
    //         id: item.id,
    //         alt_description: item.alt_description,
    //         links: item.links,
    //         urls: item.urls,
    //       }));
    //     });
    // },
  },
});
