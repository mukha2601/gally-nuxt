import type { BaseImgProps } from "~/types/types";

export const baseImgProps: BaseImgProps = {
  format: "webp", // Rasmlarni WebP formatida optimizatsiya qiladi (agar brauzer qo‘llasa)
  quality: 80, // Siqish darajasi (0–100), 80 odatda sifat va hajm balansida

  sizes: "sm:100vw md:50vw lg:400px",
  // Responsive dizayn uchun: kichik ekranda 100% kenglik, o‘rtada 50%, katta ekranda 400px

  placeholder: "blur",
  // Rasm yuklanmaguncha blur preview ko‘rsatadi (UX uchun foydali)

  loading: "lazy",
  // Lazy-loading: faqat viewport’ga kirganida rasm yuklanadi (performance)

  decoding: "async",
  // Browser rasmni async tarzda decode qiladi (yuklanishni bloklamaydi)

  class: "w-full h-auto rounded-lg shadow-lg object-cover",
};
