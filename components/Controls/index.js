"use client";

import ButtonWrapper from "@/components/ButtonWrapper";
import { Icons } from "@/images/Icons";

export default function ControlsIndex({ menu, views, viewChange, menuChange }) {
  const { nextView, previousView } = views;

  return (
    <>
      <div className="max-w-fit">
        <ButtonWrapper
          open={menu.vanDetails.open}
          onClick={() => {
            menuChange({ vanDetails: true });
          }}
        >
          <Icons icon={menu.vanDetails.open ? "close" : "van"} />
        </ButtonWrapper>
      </div>

      <div className="max-w-fit">
        <ButtonWrapper
          onClick={() => {
            menuChange({ zoom: true });
          }}
          open={menu.zoom.open}
        >
          <Icons icon={menu.zoom.open ? "close" : "zoom"} />
        </ButtonWrapper>
      </div>

      <div className="max-w-fit">
        <div className="grid grid-cols-2 gap-1">
          <ButtonWrapper onClick={viewChange} name="vanView" value={nextView}>
            <Icons icon="rotateleft" />
          </ButtonWrapper>
          <ButtonWrapper
            onClick={viewChange}
            name="vanView"
            value={previousView}
          >
            <Icons icon="rotateright" />
          </ButtonWrapper>
        </div>
      </div>

      <div className="relative max-w-fit xl:hidden">
        <ButtonWrapper
          open={menu.accessories.open}
          onClick={() => {
            menuChange({ accessories: true });
          }}
        >
          <Icons icon={menu.accessories.open ? "close" : "hamburger"} />
        </ButtonWrapper>
      </div>
    </>
  );
}
