"use client";
import { priceFormatter } from "@/components/Helpers/priceFormatter";

export default function VanDetails({ currVan }) {
  return (
    <>
      <h2 className="mb-1 flex w-full items-center border-b pb-1">
        {currVan.base.name}
       
      </h2>
      <ul className="grid w-full grid-cols-2 gap-2 text-sm">
        <li>Base:</li>
        <li className="text-left">
          {priceFormatter.format(currVan.price.base)}
        </li>
        <li>Accessories:</li>
        <li className="text-left">
          {priceFormatter.format(currVan.price.accessories)}
        </li>
        <li>Total:</li>
        <li className="text-left">
          {priceFormatter.format(currVan.price.total)}
        </li>
      </ul>
    </>
  );
}
