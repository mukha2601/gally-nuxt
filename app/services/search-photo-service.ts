// ~/services/search-photo-service.ts
import { useApi } from "~/composables/useApi"
import type { ImageType } from "~/types/types"

export async function searchPhotos(query: string, page = 1, perPage = 30) {
  const api = useApi()
  const config = useRuntimeConfig()
  const clientId = config.public.unsplashAccessKey

  return api.get<{
    total: number
    total_pages: number
    results: ImageType[]
  }>("/search/photos", {
    params: {
      query,
      page,
      per_page: perPage,
      client_id: clientId,
    },
  })
}
