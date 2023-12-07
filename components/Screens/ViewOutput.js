import getActiveView from "@/components/Helpers/getActiveView";
import preloadImages from "@/components/Helpers/preloadImages";
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

  const preloadAllImages = async () => {
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

    await preloadImages(imagesToPreload);
  };

  useEffect(() => {
    setLoading(true);

    const activeAccessories = accessories.filter(
      (accessory) => accessory.active,
    );
    setActiveAccessories(activeAccessories);

    preloadAllImages()
      .then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 200);
      })
      .catch((error) => {
        console.error("Error preloading images:", error);
        setLoading(false);
      });
  }, [accessories, vanBase.images, setLoading]);

  if (vanBase.images[activeView]) {
    return (
      <>
        <VanImages
          src={vanBase.images[activeView]}
          zoomLevel={zoomLevel}
          loading="eager"
          className="relative z-20"
        />
        {activeAccessories.length > 0 &&
          accessories.map(
            (accessory, i) =>
              accessory.active &&
              accessory.images[activeView] && (
                <React.Fragment key={i}>
                  <VanImages
                    src={accessory.images[activeView]}
                    zoomLevel={zoomLevel}
                    className={
                      accessory.layers[activeView]
                        ? accessory.layers[activeView]
                        : "z-30"
                    }
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
                            className={
                              accessoryGroup.layers[activeView]
                                ? accessoryGroup.layers[activeView]
                                : "z-30"
                            }
                          />
                        ),
                    )}
                </React.Fragment>
              ),
          )}
      </>
    );
  }

  return null;
}
