"use client";
import { useState } from "react";

import ButtonWrapper from "@/components/Buttons";
import ButtonMenu from "@/components/Buttons/Menu";
import ControlsAccessories from "@/components/Controls/ControlsAccessories";
import ControlsRotate from "@/components/Controls/ControlsRotate";
import VanDetails from "@/components/Screens/VanDetails";
import { Icons } from "@/images/Icons";
import ButtonZoom from "../Buttons/Zoom";

export default function ControlsIndex({
  menu,
  views,
  currVan,
  viewChange,
  menuChange,
  setVanSelect,
  changeZoom,
  zoomLevel,
  setControlOptions,
  accessories,
  checkboxChange,
}) {
  const [zoom, setZoom] = useState(false);
  const handleZoomChange = () => {
    setZoom(!zoom);
  };

  const [showVanDetails, setShowVanDetails] = useState(false);
  const handleShowVanDetails = () => {
    setShowVanDetails(!showVanDetails);
  };
  return (
    <>
      <div className="grid auto-cols-max grid-flow-col items-end justify-end gap-3 bg-neutral-100/60 p-3 shadow-inner lg:bg-transparent lg:shadow-none">
        <div
          className={`absolute left-0 top-0 w-full bg-neutral-100/60  shadow-inner backdrop-blur-sm lg:relative lg:left-0 lg:top-0 lg:p-4 ${
            showVanDetails ? "" : "hidden lg:block"
          }`}
        >
          <VanDetails
            className="rounded bg-neutral-100/60 p-2 shadow-inner shadow-neutral-600/20 backdrop-blur-sm lg:p-4"
            currVan={currVan}
            setVanSelect={setVanSelect}
            showVanDetails={showVanDetails}
          />
        </div>

        <div className="max-w-fit lg:hidden">
          <ButtonWrapper
            className={`bg-neutral-700  ${
              showVanDetails ? "bg-sky-500 shadow-inner" : ""
            }`}
            onClick={handleShowVanDetails}
          >
            <Icons
              icon={showVanDetails ? "close" : "van"}
              className={`h-12 w-12 rounded-xl fill-neutral-100 p-2 ${
                showVanDetails ? "fill-black " : ""
              }`}
            />
          </ButtonWrapper>
        </div>

        {/* <div className="max-w-fit">
          <ButtonWrapper
            className="bg-neutral-700 "
            onClick={handleVanChange}
          >
            <Icons icon="van" />
          </ButtonWrapper>
        </div> */}

        <div className="max-w-fit">
          <ButtonZoom
            zoom={zoom}
            handleZoomChange={handleZoomChange}
            changeZoom={changeZoom}
            zoomLevel={zoomLevel}
          />
        </div>

        <div className="max-w-fit">
          <ControlsRotate views={views} {...{ viewChange }} zoom={zoom} />
        </div>

        {/* <div className="hidden max-w-fit sm:block">
        <ControlsPosition
          menuChange={menuChange}
          menuPosition={menu.position}
        />
      </div> */}

        <div className="relative z-10 max-w-fit lg:hidden">
          <ButtonMenu
            menuChange={menuChange}
            menu={menu}
            className={menu.open ? "bg-sky-700" : "bg-amber-500"}
          />
        </div>
      </div>

      <div
        className={`absolute right-0 top-0 h-full w-full overflow-y-auto bg-neutral-200/75 pb-4 shadow-inner backdrop-blur-sm lg:relative ${
          menu.open ? "" : " hidden lg:block "
        }`}
      >
        <ControlsAccessories
          setControlOptions={setControlOptions}
          accessories={accessories}
          menuChange={menuChange}
          checkboxChange={checkboxChange}
        />
      </div>
    </>
  );
}
