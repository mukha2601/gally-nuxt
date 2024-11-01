import { defineStore } from "pinia";

export const useImageStore = defineStore("images", {
  state: () => {
    return {
      images: [],
      selectedImage: null,
      isOpen: false,
      isLikesOpen: false,
      likeList: [],
      page: 1,
      query: "",
      loading: false,
      modalLoading: false,
      isDisable: false,
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
      const config = useRuntimeConfig();
      const client_id = config.public.unsplashAccessKey;

      fetch(
        this.query.length > 0
          ? `https://api.unsplash.com/search/photos/?page=${this.page}&query=${this.query}&per_page=30&client_id=${client_id}`
          : `https://api.unsplash.com/photos/random/?page=${this.page}&count=30&client_id=${client_id}`
      )
        .then((response) => response.json())
        .then((items) => {
          if (this.query.length > 0) {
            this.images = items?.results.map((item) => ({
              id: item.id,
              alt_description: item.alt_description,
              links: item.links,
              urls: item.urls,
            }));
          } else {
            this.images = items?.map((item) => ({
              id: item.id,
              alt_description: item.alt_description,
              links: item.links,
              urls: item.urls,
            }));
          }
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        })
        .finally(() => {
          this.loading = false;
          this.query = "";
        });
    },
    moreImages() {
      this.page++;

      const config = useRuntimeConfig();
      const client_id = config.public.unsplashAccessKey;

      fetch(
        this.query.length > 0
          ? `https://api.unsplash.com/search/photos/?page=${this.page}&query=${this.query}&per_page=30&client_id=${client_id}`
          : `https://api.unsplash.com/photos/random/?page=${this.page}&count=30&client_id=${client_id}`
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
    downImg(imgUrl) {
      // const imgUrl = this.selectedImage.urls.full;
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
    addToLikeList(item) {
      // Avval localStorage dan mavjud likeList ni olamiz
      let likeList = JSON.parse(localStorage.getItem("likeList")) || [];

      // Agar element allaqachon mavjud bo'lmasa, uni qo'shamiz
      if (!likeList.some((el) => el.id === item.id)) {
        likeList.push(item);
        localStorage.setItem("likeList", JSON.stringify(likeList));
      }
      this.getLocalStorageItems();
    },
    removeFromStorage(id) {
      // localStorage dan ma'lumotlarni olamiz
      let storedItems = JSON.parse(localStorage.getItem("likeList")) || [];

      // item.id ga teng bo'lmagan itemlarni filter qilamiz
      storedItems = storedItems.filter((storedItem) => storedItem.id !== id);

      // yangilangan ma'lumotni localStorage ga saqlaymiz
      localStorage.setItem("likeList", JSON.stringify(storedItems));
      this.getLocalStorageItems();
    },
    getLocalStorageItems() {
      const localItems = localStorage.getItem("likeList");
      if (localItems) {
        this.likeList = JSON.parse(localItems);
      }
    },
  },
});
