"use client";

import ButtonWrapper from "@/components/Buttons";
import { Icons } from "@/images/Icons";

export default function ControlsRotate({
  viewChange,
  views,
  className = "bg-neutral-700  ",
  zoom,
}) {
  const { nextView, previousView } = views;

  return (
    <div className={`grid grid-cols-2 gap-1 ${zoom ? "relative z-50" : ""}`}>
      <ButtonWrapper
        className={className}
        onClick={viewChange}
        name="vanView"
        value={nextView}
      >
        <Icons icon="rotateleft" />
      </ButtonWrapper>
      <ButtonWrapper
        className={className}
        onClick={viewChange}
        name="vanView"
        value={previousView}
      >
        <Icons icon="rotateright" />
      </ButtonWrapper>
    </div>
  );
}
