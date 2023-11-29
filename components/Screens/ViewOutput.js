"use client";
import { useEffect } from "react";

import getActiveView from "@/components/Helpers/getActiveView";

export default function ViewOutput({
  vanView,
  vanBase,
  accessories,
  zoomLevel,
}) {
  const activeView = getActiveView(vanView);

  const preloadImages = (imgObject) => {
    if (typeof window !== "undefined") {
      const imageKeys = Object.keys(imgObject);
      const imageUrls = imageKeys.map((key) => imgObject[key]);

      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    }
  };

  useEffect(() => {
    preloadImages({ ...vanBase.images });
  });

  if (vanBase.images[activeView]) {
    return (
      <>
        <img
          className="absolute left-0 top-0 h-full w-full object-contain lg:object-cover"
          src={vanBase.images[activeView]}
          alt=""
          loading="eager"
          style={{ transform: `scale(${zoomLevel})` }}
        />

        {accessories.length > 0 &&
          accessories.map((accessory, i) => {
            preloadImages({ ...accessory.images });

            return (
              accessory.active &&
              accessory.images[activeView] && (
                <img
                  key={i}
                  className="absolute left-0 top-0 h-full w-full object-contain lg:object-cover"
                  style={{ transform: `scale(${zoomLevel})` }}
                  src={accessory.images[activeView]}
                  alt=""
                />
              )
            );
          })}
      </>
    );
  }

  return null;
}

// const imageUrl = "https://cdn.shopify.com/s/files/your_image_url_here.jpg";
// const originalWidth = 4000; // Width of the original image
// const aspectRatio = 16 / 9; // Adjust based on your image's aspect ratio

// function MyComponent() {
//   const imageWidths = [320, 640, 768, 1024, 1280, 1536]; // Tailwind breakpoints

//   const srcSet = imageWidths.map((width) => {
//     // Calculate the corresponding height based on the aspect ratio
//     const height = Math.round(width / aspectRatio);

//     const imageUrlWithDimensions = `${imageUrl}?width=${width}&height=${height}`;
//     return `${imageUrlWithDimensions} ${width}w`;
//   }).join(", ");

//   return (
//     <div>
//       <img
//         src={imageUrl}
//         alt="Image Description"
//         width={originalWidth} // Original width for the largest breakpoint
//         height={Math.round(originalWidth / aspectRatio)} // Adjust height based on aspect ratio
//         sizes="(max-width: 320px) 280px, (max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, 1536px"
//         srcSet={srcSet}
//         loading="eager" // Prioritize loading
//       />
//     </div>
//   );
// }

// export default MyComponent;
