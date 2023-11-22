"use client";
import NextImage from "next/image";

import getWhichView from "@/components/Helpers/getWhichView";

export default function ViewOutput({
  vanView,
  vanBase,
  accessories,
  imageLoading,
  setImageLoading,
}) {
  // console.log("vanView", vanView);
  // console.log("vanBase", vanBase);
  // console.log("accessories", accessories);

  // const whichView =
  //   Object.keys(vanView).find((view) => vanView[view].active) || null;

  const whichView = getWhichView(vanView);

  if (vanView[whichView].active) {
    return (
      <div>
        {/* <link rel="preload" as="image" href={vanBase.images[whichView]} /> */}
        <NextImage
          className={vanBase.className}
          src={vanBase.images[whichView] + "&width=2000"}
          alt=""
          fill
        />

        {accessories.map((accessory, i) => {
          return (
            accessory.active && (
              <NextImage
                key={i}
                className="z-10 object-cover"
                src={accessory.images[whichView] + "&width=2000"}
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
