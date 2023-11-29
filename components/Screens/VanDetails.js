"use client";
import { priceFormatter } from "@/components/Helpers/priceFormatter";

export default function VanDetails({ currVan, setVanSelect, showVanDetails }) {
  const handleVanChange = () => {
    setVanSelect(true);
  };

  return (
    <div className="p-2 lg:p-4">
      <h2 className="mb-1 flex w-full items-center border-b pb-1 text-sm font-bold xl:text-lg">
        {currVan.base.name}
      </h2>
      <ul className="grid w-full grid-cols-2 gap-2 text-xs xl:text-base">
        <li className="font-bold">Base:</li>
        <li className="pl-1 text-right">
          {priceFormatter.format(currVan.price.base)}
        </li>
        <li className="font-bold">Accessories:</li>
        <li className="text-right">
          +{priceFormatter.format(currVan.price.accessories)}
        </li>
        <li className="font-bold">Total:</li>
        <li className="pl-1 text-right">
          {priceFormatter.format(currVan.price.total)}
        </li>
      </ul>

      <ul className="mt-2 grid gap-2">
        <li>
          <button
            className="shadow-button drop-shadow-button w-full cursor-pointer rounded bg-sky-200  px-4 py-3 text-center text-sm font-bold text-sky-900 active:bg-amber-100 active:fill-amber-900 peer-checked:cursor-default peer-checked:bg-yellow-400"
            onClick={handleVanChange}
          >
            Change Van
          </button>
        </li>
      </ul>
    </div>
  );
}
