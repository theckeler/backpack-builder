"use client";

import { Icons } from "@/images/Icons";

export default function ControlsPosition({ menuChange, css, menuPosition }) {
  const { iconCSS, buttonCSS } = css;

  return (
    <div className="grid auto-cols-max grid-flow-col gap-1">
      <button
        className={
          buttonCSS +
          (menuPosition.top && menuPosition.right
            ? " bg-amber-400 fill-black"
            : " bg-neutral-700 fill-white")
        }
        onClick={() =>
          menuChange({
            position: {
              left: false,
              top: true,
              right: true,
              bottom: false,
            },
          })
        }
      >
        <Icons className={iconCSS} icon="positiontopright" />
      </button>
      <button
        className={
          buttonCSS +
          (menuPosition.bottom && menuPosition.right
            ? " bg-amber-400 fill-black"
            : " bg-neutral-700 fill-white")
        }
        onClick={() =>
          menuChange({
            position: {
              left: false,
              top: false,
              right: true,
              bottom: true,
            },
          })
        }
      >
        <Icons className={iconCSS} icon="positionbottomright" />
      </button>
      <button
        className={
          buttonCSS +
          (menuPosition.bottom && menuPosition.left
            ? " bg-amber-400 fill-black"
            : " bg-neutral-700 fill-white") +
          " hidden lg:block"
        }
        onClick={() =>
          menuChange({
            position: {
              left: true,
              top: false,
              right: false,
              bottom: true,
            },
          })
        }
      >
        <Icons className={iconCSS} icon="positionbottomleft" />
      </button>
    </div>
  );
}
