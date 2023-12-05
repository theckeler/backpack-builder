import { priceFormatter } from "@/components/Helpers/priceFormatter";
import WrapperButton from "@/components/Wrappers/Button";
import WrapperLinkExternal from "@/components/Wrappers/LinkExternal";
import { Icons } from "@/images/Icons";

export default function AccessoryDetail({ accessory, showAccessory }) {
  return (
    <ul className="grid w-full max-w-3xl grid-cols-[1fr_48px] items-center bg-white p-4 shadow-lg">
      <li className="col-span-full mb-4 ml-auto">
        <WrapperButton onClick={showAccessory}>
          <Icons icon="close" />
        </WrapperButton>
      </li>
      <li className="text-xl font-bold">
        {accessory.href ? (
          <WrapperLinkExternal href={accessory.href}>
            {accessory.title}
          </WrapperLinkExternal>
        ) : (
          accessory.title
        )}
      </li>
      <li className="ml-auto text-xl">
        {priceFormatter.format(accessory.price)}
      </li>
      <li className="col-span-full">{accessory.copy}</li>
    </ul>
  );
}
