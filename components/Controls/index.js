"use client";

import ImagesVan from "@/images/van";
import ControlInputs from "./Inputs";
import ControlLabel from "./Label";
import { Icons } from "@/images/Icons";
// import getWhichView from "@/components/Helpers/getWhichView";
import getActiveViewIndex from "@/components/Helpers/getActiveViewIndex";

export default function Controls({
  vanBuild,
  checkboxChange,
  viewChange,
  className = "absolute",
  liClassName = "gap-3 items-center group",
  accessories,
  priceFormatter,
  setVanSelect,
  setControlOptions,
  menu,
  setMenu,
}) {
  const iconCSS =
    "w-12 h-12 fill-neutral-100 group-hover:fill-neutral-800 p-2 rounded-xl";
  const buttonCSS =
    "flex w-full justify-center rounded bg-neutral-700 hover:bg-amber-500 group";

  const whichViewID = getActiveViewIndex(vanBuild.vanView);
  const previousView =
    whichViewID == 0 ? vanBuild.vanView.length - 1 : whichViewID - 1;
  const mextView =
    whichViewID == vanBuild.vanView.length - 1 ? 0 : whichViewID + 1;

  const menuOpen = menu.open ? "translate-x-[15rem] " : "translate-x-0 ";

  return (
    <div
      className={
        className +
        menuOpen +
        " grid translate-x-[15rem] auto-cols-max grid-flow-col items-start gap-1 text-white lg:translate-x-0"
      }
    >
      <div className="lg:hidden">
        <button
          className="h-12 w-12 bg-neutral-900 p-2"
          onClick={() => {
            setMenu({ open: !menu.open });
          }}
        >
          <Icons icon="hamburger" className="h-full w-full fill-white" />
        </button>
      </div>
      <ul className="grid gap-2">
        <li className="rounded bg-neutral-900 p-3 shadow-base shadow-neutral-950/100">
          <ul className="grid gap-2">
            {accessories.map(function ({ name, value, id, active }, i) {
              return (
                <li className={liClassName} key={i}>
                  <ControlInputs
                    value={value}
                    id={id}
                    onChange={(e) => checkboxChange(e)}
                    checked={active}
                  />
                  <ControlLabel htmlFor={id}>{name}</ControlLabel>
                </li>
              );
            })}
          </ul>
        </li>

        <li className="rounded bg-neutral-900 p-3 shadow-base shadow-neutral-950/100">
          <div className="grid grid-cols-2 gap-1">
            <button
              className={buttonCSS}
              onClick={viewChange}
              name="vanView"
              value={mextView}
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
        </li>

        <li className="rounded bg-neutral-900 p-3 shadow-base shadow-neutral-950/100">
          <div className="grid grid-cols-3 gap-1">
            <button
              className={buttonCSS}
              onClick={(e) =>
                setControlOptions((prevControls) => ({
                  ...prevControls,
                  position: {
                    left: false,
                    top: true,
                    right: true,
                    bottom: false,
                  },
                }))
              }
              name="vanView"
              value={mextView}
            >
              <Icons className={iconCSS} icon="positiontopright" />
            </button>
            <button
              className={buttonCSS}
              onClick={(e) =>
                setControlOptions((prevControls) => ({
                  ...prevControls,
                  position: {
                    left: false,
                    top: false,
                    right: true,
                    bottom: true,
                  },
                }))
              }
              name="vanView"
              value={mextView}
            >
              <Icons className={iconCSS} icon="positionbottomright" />
            </button>
            <button
              className={buttonCSS}
              onClick={(e) =>
                setControlOptions((prevControls) => ({
                  ...prevControls,
                  position: {
                    left: true,
                    top: false,
                    right: false,
                    bottom: true,
                  },
                }))
              }
              name="vanView"
              value={mextView}
            >
              <Icons className={iconCSS} icon="positionbottomleft" />
            </button>
          </div>
        </li>

        <li className="rounded bg-neutral-900 p-3 shadow-base shadow-neutral-950/100">
          <h2 className="mb-1 flex w-full items-center border-b pb-1">
            {vanBuild[vanBuild.currVan].base.name}
            <button
              className="ml-auto h-[48px] w-[48px] rounded bg-neutral-700 p-2  text-xs hover:bg-amber-500 lg:h-auto"
              onClick={(e) => {
                setVanSelect(true);
              }}
            >
              <ImagesVan />
            </button>
          </h2>
          <ul className="grid w-full grid-cols-2 gap-2">
            <li>Base:</li>
            <li className="text-left">
              {priceFormatter.format(vanBuild[vanBuild.currVan].price.base)}
            </li>
            <li>Accessories:</li>
            <li className="text-left">
              {priceFormatter.format(
                vanBuild[vanBuild.currVan].price.accessories,
              )}
            </li>
            <li>Total:</li>
            <li className="text-left">
              {priceFormatter.format(vanBuild[vanBuild.currVan].price.total)}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
