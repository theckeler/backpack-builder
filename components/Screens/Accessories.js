
import ControlInputs from "../Controls/Input";
import WrapperLabel from "../Wappers/Label";

export default function ControlsAccessories({ checkboxChange, accessories }) {
  return (
    <ul className="grid gap-2 px-3 pb-8 pt-3">
      {accessories.map(function ({ name, value, id, active, group }, i) {
        return (
          <li key={i} className="mb-1">
            <ControlInputs
              value={value}
              id={id}
              onChange={(e) => checkboxChange(e)}
              checked={active}
              dataType="main"
            />
            <WrapperLabel htmlFor={id}>{name}</WrapperLabel>
            {active && group && group.length > 0 && (
              <ul className="mt-2 grid gap-1 pl-3">
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
