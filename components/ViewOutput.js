"use client";
import NextImage from "next/image";

export default function ViewOutput({ vanView, vanBase, accessories }) {
  // console.log("vanView", vanView);
  // console.log("vanBase", vanBase);
  // console.log("accessories", accessories);

  const whichView = Object.keys(vanView).reduce((activeView, view) => {
    if (vanView[view].active) {
      return view;
    }
    return activeView;
  }, null);

  if (vanView[whichView].active) {
    return (
      <div>
        <NextImage
          className={vanBase.className}
          src={vanBase.images[whichView] + "&width=2000"}
          alt=""
          fill
        />

        {Object.keys(accessories).map((accessoryKey, i) => {
          const accessory = accessories[accessoryKey];
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

        {accessories.active && (
          <NextImage
            className="z-10 object-cover"
            src={accessories.images[whichView] + "&width=2000"}
            alt=""
            fill
          />
        )}
      </div>
    );
  }

  return null;
}
