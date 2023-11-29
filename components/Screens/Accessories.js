"use client";

import ControlInputs from "../Controls/Inputs";
import ControlLabel from "../Controls/Label";

export default function ControlsAccessories({ checkboxChange, accessories }) {
  return (
    <ul className="grid items-end gap-2 px-3 py-6">
      {accessories.map(function ({ name, value, id, active }, i) {
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
