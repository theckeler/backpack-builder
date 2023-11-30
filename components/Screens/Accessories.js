"use client";

import ControlInputs from "../Controls/Inputs";
import WrapperLabel from "../Wappers/Label";

export default function ControlsAccessories({ checkboxChange, accessories }) {
  return (
    <ul className="grid items-end gap-2 px-3 py-6">
      {accessories.map(function ({ name, value, id, active, group }, i) {
        return (
          <li key={i}>
            <ControlInputs
              value={value}
              id={id}
              onChange={(e) => checkboxChange(e)}
              checked={active}
              dataType="main"
            />
            <WrapperLabel htmlFor={id}>{name}</WrapperLabel>
            {active && group && group.length > 0 && (
              <ul className="mt-3 grid items-end gap-2 pl-3">
                {group.map((groupAccessory, j) => {
                  if (groupAccessory) {
                    return (
                      <li key={j}>
                        <ControlInputs
                          value={groupAccessory.value}
                          id={groupAccessory.id}
                          onChange={(e) => checkboxChange(e)}
                          checked={groupAccessory.active}
                          dataType="group"
                        />
                        <WrapperLabel htmlFor={groupAccessory.id}>
                          {groupAccessory.name}
                        </WrapperLabel>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}
