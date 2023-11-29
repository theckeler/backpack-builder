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
    // console.log("imgObject", imgObject);
    const imageKeys = Object.keys(imgObject);
    const imageUrls = imageKeys.map((key) => imgObject[key]);

    imageUrls.forEach((url) => {
      // console.log("url:", url);
      const img = new Image();
      img.src = url;
    });
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
