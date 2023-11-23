"use client";
import NextImage from "next/image";

import getActiveView from "@/components/Helpers/getActiveView";
import getActiveViewIndex from "@/components/Helpers/getActiveViewIndex";

export default function ViewOutput({ vanView, vanBase, accessories }) {
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
      <div className="fixed z-10 h-screen w-screen">
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
          src={vanBase.images[activeView] + "&width=2000"}
          alt=""
          fill
          priority={true}
          loading="eager"
          // placeholder="blur"
          // blurDataURL={vanBase.images[activeView] + "&width=400"}
        />

        {accessories.map((accessory, i) => {
          return (
            accessory.active && (
              <NextImage
                key={i}
                className="z-10 object-cover"
                src={accessory.images[activeView] + "&width=2000"}
                alt=""
                fill
              />
            )
          );
        })}
      </div>
    );
  }

  return null;
}
