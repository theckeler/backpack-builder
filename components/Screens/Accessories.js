import InputCheckbox from "../Inputs/Checkbox";
import WrapperLabel from "../Wappers/Label";

export default function ScreensAccessories({ checkboxChange, accessories }) {
  return (
    <ul className="grid gap-2 px-3 pb-8 pt-3">
      {accessories.map(function ({ name, value, id, active, group }, i) {
        return (
          <li key={i} className="mb-1">
            <InputCheckbox
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
                        <InputCheckbox
                          value={groupAccessory.value}
                          id={groupAccessory.id}
                          onChange={(e) => checkboxChange(e)}
                          checked={groupAccessory.active}
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
