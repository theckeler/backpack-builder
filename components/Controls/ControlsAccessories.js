"use client";

import ControlInputs from "./Inputs";
import ControlLabel from "./Label";

export default function ControlsAccessories({
  checkboxChange,
  accessories,
  css,
}) {
  const { liClassName } = css;

  return (
    <ul className="grid h-screen gap-1 p-3 lg:h-auto lg:min-h-fit">
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
  );
}
