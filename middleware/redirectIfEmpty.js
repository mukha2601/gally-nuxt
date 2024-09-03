import { useImageStore } from "@/store/index";
import { useRouter } from "vue-router";

export default function () {
  const imageStore = useImageStore();
  const router = useRouter();

  // Ma'lumotlar mavjud bo'lmasa, `/` sahifasiga yo'naltiramiz
  if (imageStore.resultImages.length <= 0) {
    router.push("/")
    // return navigateTo("/");
  }
}
