import { useApi } from "~/composables/useApi"
import type { ImageType } from "~/types/types"

export async function getRandomPhotos(count = 30, page = 1) {
  const api = useApi()
  const config = useRuntimeConfig()
  const clientId = config.public.unsplashAccessKey

  return api.get<ImageType[]>("/photos/random", {
    params: {
      count,
      page,
      client_id: clientId,
    },
  })
}
