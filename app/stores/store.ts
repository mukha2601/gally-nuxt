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

  async function downImg(url: string, filename?: string) {
    modalLoading.value = true;
    try {
      // Fetch the image
      const response = await fetch(url, {
        mode: "cors", // Handle CORS
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.status}`);
      }

      // Get the blob
      const blob = await response.blob();

      // Create blob URL
      const blobUrl = URL.createObjectURL(blob);

      // Get filename from URL or use provided filename
      const finalFilename = filename || getFilenameFromUrl(url) || "image.jpg";

      // Create download link
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = finalFilename;
      link.style.display = "none";

      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up blob URL
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
      // Show error message to user
      throw error;
    } finally {
      modalLoading.value = false;
    }
  }

  // Utility function to extract filename from URL
  function getFilenameFromUrl(url: string): string {
    try {
      const urlObj = new URL(url);
      const pathname = urlObj.pathname;
      const filename = pathname.split("/").pop();

      if (filename && filename.includes(".")) {
        return filename;
      }

      // If no extension, try to determine from content-type or use default
      return "image.jpg";
    } catch {
      return "image.jpg";
    }
  }

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
