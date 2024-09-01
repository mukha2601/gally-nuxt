// stores/counter.js
import { defineStore } from "pinia";

export const useImageStore = defineStore("images", {
  state: () => {
    return {
      images: [],
      selectedID: null,
      isOpen: false,
    };
  },
  actions: {
    openModal() {
      this.isOpen = true;
    },
  },
});
