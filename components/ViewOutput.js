"use client";
import NextImage from "next/image";

import getActiveView from "@/components/Helpers/getActiveView";
import getActiveViewIndex from "@/components/Helpers/getActiveViewIndex";

export default function ViewOutput({
  vanView,
  vanBase,
  accessories,
  zoomLevel,
}) {
  const activeView = getActiveView(vanView);
  const activeViewID = getActiveViewIndex(vanView);
  const previousView =
    activeViewID == 0 ? vanView.length - 1 : activeViewID - 1;
  const nextView = activeViewID == vanView.length - 1 ? 0 : activeViewID + 1;

  const preloadImages = [
    vanBase.images[vanView[previousView].key],
    vanBase.images[vanView[nextView].key],
  ];

  if (vanBase.images[activeView]) {
    return (
      <>
        <link
          rel="prefetch"
          as="image"
          href={vanBase.images[vanView[previousView].key]}
        />
        <link
          rel="prefetch"
          as="image"
          href={vanBase.images[vanView[nextView].key]}
        />

        <NextImage
          className={vanBase.className}
          src={vanBase.images[activeView]}
          alt=""
          // fill
          width={3840}
          height={2155}
          priority={true}
          loading="eager"
          style={{ transform: `scale(${zoomLevel / 100})` }}
        />

        {accessories.map((accessory, i) => {
          return (
            accessory.active && (
              <NextImage
                key={i}
                className={vanBase.className}
                style={{ transform: `scale(${zoomLevel / 100})` }}
                src={accessory.images[activeView]}
                alt=""
                // fill
                width={3840}
                height={2155}
              />
            )
          );
        })}
      </>
    );
  }

  return null;
}
