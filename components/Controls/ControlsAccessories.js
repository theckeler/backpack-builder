"use client";

import ControlInputs from "./Inputs";
import ControlLabel from "./Label";

export default function ControlsAccessories({ checkboxChange, accessories }) {
  const accessoriesTemp = [...Array(100)].map(() => ({ ...accessories[0] }));
  console.log(accessoriesTemp);

  return (
    <ul className="grid items-end gap-2 px-3 py-6">
      {accessoriesTemp.map(function ({ name, value, id, active }, i) {
        return (
          <li key={i}>
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
