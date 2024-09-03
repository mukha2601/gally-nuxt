import { useImageStore } from "@/store/index";
import { useRouter } from "vue-router";
const router = useRouter();

export default function () {
  const imageStore = useImageStore();

  // Ma'lumotlar mavjud bo'lmasa, `/` sahifasiga yo'naltiramiz
  if (!imageStore.resultImages.length) {
    return router.push("/");
    // return navigateTo("/");
  }
}
