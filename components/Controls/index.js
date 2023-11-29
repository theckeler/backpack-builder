"use client";

import WrapperButton from "@/components/Wappers/Button";
import { Icons } from "@/images/Icons";

export default function ControlsIndex({ menu, views, viewChange, menuChange }) {
  const { nextView, previousView } = views;

  return (
    <>
      <div className="max-w-fit">
        <WrapperButton
          open={menu.vanDetails.open}
          onClick={() => {
            menuChange({ vanDetails: true });
          }}
        >
          <Icons icon={menu.vanDetails.open ? "close" : "van"} />
        </WrapperButton>
      </div>

      <div className="max-w-fit">
        <WrapperButton
          onClick={() => {
            menuChange({ zoom: true });
          }}
          open={menu.zoom.open}
        >
          <Icons icon={menu.zoom.open ? "close" : "zoom"} />
        </WrapperButton>
      </div>

      <div className="max-w-fit">
        <div className="grid grid-cols-2 gap-1">
          <WrapperButton onClick={viewChange} name="vanView" value={nextView}>
            <Icons icon="rotateleft" />
          </WrapperButton>
          <WrapperButton
            onClick={viewChange}
            name="vanView"
            value={previousView}
          >
            <Icons icon="rotateright" />
          </WrapperButton>
        </div>
      </div>

      <div className="relative max-w-fit xl:hidden">
        <WrapperButton
          open={menu.accessories.open}
          onClick={() => {
            menuChange({ accessories: true });
          }}
        >
          <Icons icon={menu.accessories.open ? "close" : "hamburger"} />
        </WrapperButton>
      </div>
    </>
  );
}
