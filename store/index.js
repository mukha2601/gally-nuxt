import { defineStore } from "pinia";

export const useImageStore = defineStore("images", {
  state: () => {
    return {
      images: [],
      selectedImage: null,
      isOpen: false,
      page: 1,
      query: "",
      loading: false,
      modalLoading: false,
      isDisable: false,
      client_id: "QaxOLYJFNjV5katlAPBXlpedw2R2Ovti2SKbFZEI4RU",
    };
  },
  actions: {
    openModal(event) {
      this.loading = true;
      this.isOpen = true;
      this.selectedImage = event;
      document.body.style.overflow = "hidden";
    },
    closeModal() {
      this.loading = false;
      this.isOpen = false;
      this.selectedImage = [];
      document.body.style.overflow = "";
    },
    fetchImages() {
      this.loading = true;
      fetch(
        this.query.length > 0
          ? `https://api.unsplash.com/search/photos/?page=${this.page}&query=${this.query}&per_page=30&client_id=${this.client_id}`
          : `https://api.unsplash.com/photos/random/?page=${this.page}&count=30&client_id=${this.client_id}`
      )
        .then((response) => response.json())
        .then((items) => {
          console.log(items);

          if (this.query.length > 0) {
            this.images = items.results.map((item) => ({
              id: item.id,
              alt_description: item.alt_description,
              links: item.links,
              urls: item.urls,
            }));
          }
          this.images = items.map((item) => ({
            id: item.id,
            alt_description: item.alt_description,
            links: item.links,
            urls: item.urls,
          }));
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    moreImages() {
      this.page++;
      fetch(
        this.query.length > 0
          ? `https://api.unsplash.com/search/photos/?page=${this.page}&query=${this.query}&per_page=30&client_id=${this.client_id}`
          : `https://api.unsplash.com/photos/random/?page=${this.page}&count=30&client_id=${this.client_id}`
      )
        .then((response) => response.json())
        .then((items) => {
          console.log(items);

          if (this.query.length > 0) {
            items?.results?.map((item) => {
              this.images.push({
                id: item.id,
                alt_description: item.alt_description,
                links: item.links,
                urls: item.urls,
              });
            });
          } else {
            items?.map((item) => {
              this.images.push({
                id: item.id,
                alt_description: item.alt_description,
                links: item.links,
                urls: item.urls,
              });
            });
          }
        });
    },
    downImg() {
      const imgUrl = this.selectedImage.urls.full;
      this.modalLoading = true;
      this.isDisable = true;
      fetch(imgUrl)
        .then((res) => res.blob())
        .then((blob) => {
          const a = document.createElement("a");
          a.href = URL.createObjectURL(blob);
          a.download = new Date().getTime();
          a.click();
        })
        .catch(() => alert("Failed to download image!"))
        .finally(() => {
          this.modalLoading = false;
          this.isDisable = false;
        });
    },
  },
});
