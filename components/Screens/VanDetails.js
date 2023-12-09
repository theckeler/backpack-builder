import { priceFormatter } from "@/components/Helpers/priceFormatter";
import Select from "@/components/Inputs/Select";

export default function ScreenVanDetails({ currVan, options, activeVan }) {
  return (
    <div className="p-2 lg:p-4">
      <Select
        onChange={options.onChange}
        className="mb-2 w-full appearance-none rounded bg-amber-400 p-3 font-bold shadow-inner"
        aria-label="Change your van."
        options={options}
        activeVan={activeVan}
      />

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
    </div>
  );
}
