import { Icons } from "@/images/Icons";
import InputCheckbox from "../Inputs/Checkbox";
import WrapperLabel from "../Wrappers/Label";

export default function ScreensAccessories({
  checkboxChange,
  accessories,
  showAccessory,
}) {
  const accessoriesCSS =
    "block cursor-pointer rounded bg-neutral-200/60 p-4 text-xs font-extrabold md:font-bold text-black active:bg-amber-100/60 active:fill-amber-900/60 peer-checked:cursor-default peer-checked:bg-yellow-400/90 peer-checked:shadow-inner md:px-6 md:py-2 md:text-base flex items-center backdrop-blur-3xl w-full truncate";

  return (
    <ul className="grid gap-1 px-3 pb-8 pt-3">
      {accessories.map(function (accessory, i) {
        return (
          <li key={i} className="mb-1 grid grid-cols-[1fr_48px] gap-1">
            <InputCheckbox
              value={accessory.value}
              id={accessory.id}
              onChange={(e) => checkboxChange(e)}
              checked={accessory.active}
              dataType="main"
            />
            <WrapperLabel htmlFor={accessory.id} className={accessoriesCSS}>
              {accessory.name}
            </WrapperLabel>
            <div className="ml-auto rounded bg-neutral-100 fill-neutral-400">
              <button
                aria-label="View accessories for this van."
                href={accessory.href}
                className="shadow-none"
                onClick={() => {
                  showAccessory(accessory);
                }}
              >
                <Icons icon="description" />
              </button>
            </div>
            {accessory.active &&
              accessory.group &&
              accessory.group.length > 0 && (
                <ul className="mt-2 grid gap-1 pl-3">
                  {accessory.group.map((groupAccessory, j) => {
                    if (groupAccessory) {
                      return (
                        <li key={j}>
                          <InputCheckbox
                            value={groupAccessory.value}
                            id={groupAccessory.id}
                            onChange={(e) => checkboxChange(e)}
                            checked={groupAccessory.active}
                          />
                          <WrapperLabel
                            htmlFor={groupAccessory.id}
                            className={accessoriesCSS}
                          >
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
