import { defineStore } from "pinia";
import type { ImageType } from "~/types/types";

export const useImageStore = defineStore("image", () => {
  // state
  const isOpen = ref(false);
  const loading = ref(true);
  const selectedImage = ref<ImageType | null>(null);
  const modalLoading = ref(false);
  const isDisable = ref(false);
  const likeList = ref<ImageType[]>([]);

  // actions
  function openModal(image: ImageType) {
    selectedImage.value = image;
    isOpen.value = true;
    loading.value = true;
  }

  function closeModal() {
    isOpen.value = false;
    selectedImage.value = null;
  }

  function addToLikeList(image: ImageType) {
    likeList.value.push(image);
  }

  async function downImg(url: string) {
    modalLoading.value = true;
    try {
      const link = document.createElement("a");
      link.href = url;
      link.download = "image.jpg";
      link.click();
    } finally {
      modalLoading.value = false;
    }
  }

  // return qilamiz
  return {
    // state
    isOpen,
    loading,
    selectedImage,
    modalLoading,
    isDisable,
    likeList,
    // actions
    openModal,
    closeModal,
    addToLikeList,
    downImg,
  };
});
