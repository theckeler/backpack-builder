"use client";

import ButtonWrapper from "@/components/Buttons";
import { Icons } from "@/images/Icons";

export default function ControlsPosition({ menuChange, menuPosition }) {
  const buttons = [
    {
      className:
        menuPosition.top && menuPosition.right
          ? " bg-amber-400 fill-black"
          : " bg-neutral-700 fill-white",
      onClick: () =>
        menuChange({
          position: {
            left: false,
            top: true,
            right: true,
            bottom: false,
          },
        }),
      icon: "positiontopright",
    },
    {
      className:
        menuPosition.bottom && menuPosition.right
          ? " bg-amber-400 fill-black"
          : " bg-neutral-700 fill-white",
      onClick: () =>
        menuChange({
          position: {
            left: false,
            top: false,
            right: true,
            bottom: true,
          },
        }),
      icon: "positionbottomright",
    },
    {
      className:
        (menuPosition.bottom && menuPosition.left
          ? " bg-amber-400 fill-black"
          : " bg-neutral-700 fill-white") + " hidden lg:block",
      onClick: () =>
        menuChange({
          position: {
            left: true,
            top: false,
            right: false,
            bottom: true,
          },
        }),
      icon: "positionbottomleft",
    },
  ];

  return (
    <div className="grid auto-cols-max grid-flow-col gap-1">
      {buttons.map((button, index) => (
        <ButtonWrapper
          key={index}
          className={button.className}
          onClick={button.onClick}
        >
          <Icons icon={button.icon} />
        </ButtonWrapper>
      ))}
    </div>
  );
}
