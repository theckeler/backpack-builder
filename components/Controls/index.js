"use client";

import ControlsAccessories from "@/components/Controls/ControlsAccessories";
import MenuButton from "@/components/Controls/MenuButton";
import ControlsRotate from "@/components/Controls/ControlsRotate";
import ControlsPosition from "@/components/Controls/ControlsPosition";
import VanDetails from "@/components/Screens/VanDetails";
import ImagesVan from "@/images/van";

export default function ControlsIndex({
  menu,
  css,
  views,
  currVan,
  viewChange,
  menuChange,
  setVanSelect,
  changeZoom,
  zoomLevel,
}) {
  const { iconCSS, buttonCSS } = css;

  return (
    <>
      <div className="max-w-fit">
        <button
          className={buttonCSS}
          onClick={(e) => {
            setVanSelect(true);
          }}
        >
          <ImagesVan className={iconCSS} />
        </button>
      </div>

      <div className="max-w-fit">
        <input
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

      <div className="max-w-fit">
        <ControlsRotate views={views} {...{ viewChange, css }} />
      </div>

      <div className="max-w-fit ">
        <ControlsPosition
          css={css}
          menuChange={menuChange}
          menuPosition={menu.position}
        />
      </div>

      <MenuButton
        menuChange={menuChange}
        menu={menu}
        className={`relative z-10 h-12 w-12 rounded p-2 shadow-base lg:hidden ${
          menu.open ? "bg-amber-500" : "bg-neutral-800"
        }`}
      />

      <div
        className={`${css.controlBoxCSS} hidden max-w-fit text-white lg:block`}
      >
        <VanDetails currVan={currVan} />
      </div>
    </>
  );
}
