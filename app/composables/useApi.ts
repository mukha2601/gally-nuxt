import { ref } from "vue";
import type { FetchOptions } from "ofetch";

export function useApi() {
  const config = useRuntimeConfig();
  const base = config.public.apiBase;
  const loading = ref(false);
  const lastError = ref<unknown | null>(null);

  async function get<T = any>(
    path: string,
    opts: FetchOptions = {}
  ): Promise<T> {
    loading.value = true;
    lastError.value = null;
    try {
      const data = await $fetch<T>(cleanUrl(base, path), {
        method: "GET",
        ...opts,
      });
      loading.value = false;
      return data;
    } catch (err) {
      loading.value = false;
      lastError.value = err;
      throw err;
    }
  }

  return { base, loading, lastError, get };
}

function cleanUrl(base: string, path: string) {
  if (!path) return base;
  if (path.startsWith("http")) return path;
  return `${base.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`;
}
