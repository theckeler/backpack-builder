"use client";
import { useState } from "react";

// import ControlsAccessories from "@/components/Controls/ControlsAccessories";
import ButtonWrapper from "@/components/Buttons";
import ButtonMenu from "@/components/Buttons/Menu";
import ControlsPosition from "@/components/Controls/ControlsPosition";
import ControlsRotate from "@/components/Controls/ControlsRotate";
import { Icons } from "@/images/Icons";
import ImagesVan from "@/images/van";

export default function ControlsIndex({
  menu,
  views,
  currVan,
  viewChange,
  menuChange,
  setVanSelect,
  changeZoom,
  zoomLevel,
}) {
  const [zoom, setZoom] = useState(false);
  const handleZoomChange = () => {
    setZoom(!zoom);
  };

  const handleVanChange = () => {
    setVanSelect(true);
  };

  return (
    <>
      <div className="max-w-fit">
        <ButtonWrapper
          className="bg-neutral-700 hover:bg-amber-500"
          onClick={handleVanChange}
        >
          <ImagesVan />
        </ButtonWrapper>
      </div>

      <div className="max-w-fit">
        {zoom && (
          <div className="fixed bottom-0 left-0 z-50 w-full bg-neutral-200/50 p-2 pb-20 shadow-inner backdrop-blur-sm">
            <span className="text-sm font-bold">Zoom:</span>
            <input
              className="w-full"
              type="range"
              id="zoom"
              name="zoom"
              min={0}
              max={100}
              step={5}
              value={zoomLevel}
              onChange={(e) => {
                changeZoom(e.currentTarget.value);
              }}
            />
          </div>
        )}
        <ButtonWrapper
          className={
            zoom
              ? "relative z-50 bg-amber-500 shadow-inner"
              : "bg-neutral-700 hover:bg-amber-500"
          }
          onClick={handleZoomChange}
        >
          <Icons icon="zoom" />
        </ButtonWrapper>
      </div>

      <div className="max-w-fit">
        <ControlsRotate views={views} {...{ viewChange }} zoom={zoom} />
      </div>

      <div className="hidden max-w-fit sm:block">
        <ControlsPosition
          menuChange={menuChange}
          menuPosition={menu.position}
        />
      </div>

      <ButtonMenu
        menuChange={menuChange}
        menu={menu}
        className={`relative z-10 lg:hidden ${
          menu.open ? "bg-amber-500" : "bg-neutral-800"
        }`}
      />
    </>
  );
}
