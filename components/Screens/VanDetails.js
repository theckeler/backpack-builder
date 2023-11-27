"use client";
import ButtonWrapper from "@/components/Buttons";
import { priceFormatter } from "@/components/Helpers/priceFormatter";
import { Icons } from "@/images/Icons";

export default function VanDetails({ currVan, setVanSelect, showVanDetails }) {
  const handleVanChange = () => {
    setVanSelect(true);
  };

  return (
    <ul className="grid grid-cols-[minmax(140px,_240px)_1fr] gap-3 p-3">
      <li>
        <h2 className="mb-1 flex w-full items-center border-b pb-1 text-sm font-bold lg:text-lg">
          {currVan.base.name}
        </h2>
        <ul className="grid w-full  grid-cols-2 gap-2 text-xs lg:text-base">
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
      </li>
      <li className="">
        <ButtonWrapper
          className={showVanDetails ? "bg-neutral-700 " : "bg-neutral-700 "}
          onClick={handleVanChange}
        >
          <Icons icon="settings" />
        </ButtonWrapper>
      </li>
    </ul>
  );
}
