// composables/useDarkMode.ts
import { useDark, useToggle } from "@vueuse/core";

export const useDarkMode = () => {
  const isDark = useDark({
    selector: "html",
    attribute: "class",
    valueDark: "dark",
    valueLight: "light",
  });

  const toggleDark = useToggle(isDark);

  return {
    isDark: readonly(isDark),
    toggleDark,
  };
};
