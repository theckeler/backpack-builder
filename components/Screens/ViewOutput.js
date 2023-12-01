import getActiveView from "@/components/Helpers/getActiveView";
import VanImages from "@/components/Image";
import React, { useEffect, useState } from "react";

export default function ScreenViewOutput({
  vanView,
  vanBase,
  accessories,
  zoomLevel,
  setLoading,
}) {
  const activeView = getActiveView(vanView);
  const [activeAccessories, setActiveAccessories] = useState([]);

  const preloadImages = async (imgObject) => {
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
  };

  useEffect(() => {
    setLoading(true);

    const activeAccessories = accessories.filter((accessory) => accessory.active);
    setActiveAccessories(activeAccessories);

    const imagesToPreload = {
      ...vanBase.images,
      ...activeAccessories.reduce((acc, accessory) => {
        if (accessory.images) {
          Object.keys(accessory.images).forEach((key) => {
            acc[key] = accessory.images[key];
          });
        }
        return acc;
      }, {}),
    };

    preloadImages(imagesToPreload)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error preloading images:", error);
        setLoading(false);
      });
  }, [accessories, vanBase.images, setLoading]);

  if (vanBase.images[activeView]) {
    return (
      <span id="ViewOutput">
        <VanImages src={vanBase.images[activeView]} zoomLevel={zoomLevel} />
        {activeAccessories.length > 0 &&
          accessories.map(
            (accessory, i) =>
              accessory.active &&
              accessory.images[activeView] && (
                <React.Fragment key={i}>
                  <VanImages
                    src={accessory.images[activeView]}
                    zoomLevel={zoomLevel}
                  />
                  {accessory.group?.length > 0 &&
                    accessory.group?.map(
                      (accessoryGroup, j) =>
                        accessoryGroup.active &&
                        accessoryGroup.images[activeView] && (
                          <VanImages
                            src={accessoryGroup.images[activeView]}
                            zoomLevel={zoomLevel}
                            key={j}
                          />
                        ),
                    )}
                </React.Fragment>
              ),
          )}
      </span>
    );
  }

  return null;
}
