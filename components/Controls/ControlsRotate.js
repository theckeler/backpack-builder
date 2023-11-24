"use client";

import { Icons } from "@/images/Icons";

export default function ControlsRotate({ viewChange, css, views }) {
  const { iconCSS, buttonCSS } = css;
  const { nextView, previousView } = views;

  return (
    <div className="grid grid-cols-2 gap-1">
      <button
        className={buttonCSS}
        onClick={viewChange}
        name="vanView"
        value={nextView}
      >
        <Icons className={iconCSS} icon="rotateleft" />
      </button>
      <button
        className={buttonCSS}
        onClick={viewChange}
        name="vanView"
        value={previousView}
      >
        <Icons className={iconCSS} icon="rotateright" />
      </button>
    </div>
  );
}
