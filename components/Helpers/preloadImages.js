export default function preloadImages(imgObject) {
  if (typeof window !== "undefined") {
    const imageKeys = Object.keys(imgObject);
    const imageUrls = imageKeys.map((key) => imgObject[key]);

    const promises = imageUrls.map((url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = resolve;
        img.src = url;
      });
    });

    return Promise.all(promises);
  }
}
