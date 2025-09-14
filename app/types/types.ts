export interface ImageType {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  alt_description: string | null;
}

export interface BaseImgProps {
  format?: "webp" | "avif" | "jpeg" | "png";
  quality?: number;
  sizes?: string;
  placeholder?: "blur" | "empty" | "preview";
  loading?: "lazy" | "eager";
  decoding?: "async" | "sync" | "auto";
  class?: string;
}


