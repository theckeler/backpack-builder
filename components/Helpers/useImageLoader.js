// useImageLoader.js
import { useEffect, useState } from "react";

export default function useImageLoader(src) {
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setImageLoading(false);
    };

    return () => {
      img.onload = null;
    };
  }, [src]);

  return imageLoading;
}
