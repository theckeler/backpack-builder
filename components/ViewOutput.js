"use client";
import NextImage from "next/image";

import getWhichView from "@/components/Helpers/getWhichView";
import getWhichViewIndex from "@/components/Helpers/getWhichViewIndex";

export default function ViewOutput({
  vanView,
  vanBase,
  accessories,
  // imageLoading,
  // setImageLoading,
}) {
  const whichView = getWhichView(vanView);
  const whichViewID = getWhichViewIndex(vanView);
  // console.log(whichViewID);

  if (vanBase.images[whichView]) {
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
