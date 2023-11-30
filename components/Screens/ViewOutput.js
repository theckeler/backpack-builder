import getActiveView from "@/components/Helpers/getActiveView";
import React, { useEffect, useState } from "react";
import VanImages from "../Image";

export default function ViewOutput({
  vanView,
  vanBase,
  accessories,
  zoomLevel,
  setLoading,
  loading,
}) {
  const activeView = getActiveView(vanView);
  const [activeAccessories, setActiveAccessories] = useState([]);
  // useEffect(() => {
  //   console.log("activeAccessories useEffect:", activeAccessories);
  // }, [activeAccessories]);

  const preloadImages = (imgObject) => {
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
    const preloadAllImages = async () => {
      await preloadImages({ ...vanBase.images });
      const activeAccessories = accessories.filter(
        (accessory) => accessory.active,
      );
      setActiveAccessories(activeAccessories);

      const accessoryPromises = activeAccessories.map(async (accessory) => {
        await preloadImages({ ...accessory.images });

        if (accessory.group && accessory.group.length > 0) {
          const activeGroupAccessories = accessory.group.filter(
            (groupAccessory) => groupAccessory.active,
          );

          const groupAccessoryPromises = activeGroupAccessories.map(
            async (groupAccessory) => {
              await preloadImages({ ...groupAccessory.images });
            },
          );

          await Promise.all(groupAccessoryPromises);
        }
      });

      await Promise.all(accessoryPromises);
      setLoading(false);
    };

    preloadAllImages();
  }, [vanBase.images, accessories, setLoading]);

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
