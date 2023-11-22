"use client";

import ImagesVan from "@/images/van";
import ControlInputs from "./Inputs";
import ControlLabel from "./Label";
import { Icons } from "@/images/Icons";
import getWhichView from "@/components/Helpers/getWhichView";

export default function Controls({
  vanBuild,
  checkboxChange,
  radioChange,
  className = "absolute bg-neutral-900 shadow-base shadow-neutral-950/100 p-3 rounded",
  liClassName = "gap-3 items-center group",
  accessories,
  priceFormatter,
  setVanSelect,
}) {
  // console.log(vanBuild[vanBuild.currVan]);

  const iconCSS = "w-12 h-12 fill-neutral-100";
  const whichView = getWhichView(vanBuild.vanView);
  console.log(vanBuild.vanView[whichView]);

  return (
    <>
      <div className={className + " left-4 top-4"} draggable="true">
        <ul className="grid gap-2">
          {Object.keys(vanBuild.vanView).map(function (objectKey, i) {
            const { active, title } = vanBuild.vanView[objectKey];

            return (
              <li className={liClassName} key={i}>
                <ControlInputs
                  onChange={radioChange}
                  value={objectKey}
                  id={objectKey}
                  type="radio"
                  name="vanView"
                  // dataLevel={1}
                  checked={active}
                />
                <ControlLabel htmlFor={objectKey}>{title}</ControlLabel>
              </li>
            );
          })}
        </ul>

        <div className="grid grid-cols-2">
          <button>
            <Icons className={iconCSS} icon="rotateright" />
          </button>
          <Icons className={iconCSS} icon="rotateleft" />
        </div>
      </div>

      <div className={className + " right-4 top-4"}>
        <ul className="grid gap-2">
          {accessories.map(function ({ name, value, id, active }, i) {
            // console.log(accessory);
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
      </div>

      <div className={className + " bottom-4 right-4 text-white"}>
        <h2 className="mb-1 flex w-full items-center border-b pb-1">
          {vanBuild[vanBuild.currVan].base.name}{" "}
          <button
            className="ml-auto h-[48px] w-[48px] rounded bg-amber-500 p-2 text-xs"
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
      </div>
    </>
  );
}
