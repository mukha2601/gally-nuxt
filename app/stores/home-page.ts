import { defineStore } from "pinia";
import type { ImageType } from "~/types/types";

export const useImageStore = defineStore("image", () => {
  // state
  const query = ref("");
  const isOpen = ref(false);
  const loading = ref(true);
  const selectedImage = ref<ImageType | null>(null);
  const modalLoading = ref(false);
  const isDisable = ref(false);

  // actions
  function openModal(image: ImageType) {
    selectedImage.value = image;
    isOpen.value = true;
    loading.value = true;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    isOpen.value = false;
    selectedImage.value = null;
    document.body.style.overflow = "auto";
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
    query,
    isOpen,
    loading,
    selectedImage,
    modalLoading,
    isDisable,
    // actions
    openModal,
    closeModal,
    downImg,
  };
});
