import WrapperLinkExternal from "@/components/Wrappers/LinkExternal";
import { Icons } from "@/images/Icons";

export default function AccessoryDetail({ accessory, showAccessory }) {
  return (
    <ul className="mx-8 grid w-full max-w-3xl grid-cols-[1fr_48px] items-center rounded-lg bg-white p-4 shadow-base shadow-black/50">
      <li className="text-xl font-bold">
        {accessory.href ? (
          <WrapperLinkExternal href={accessory.href}>
            {accessory.title}
          </WrapperLinkExternal>
        ) : (
          accessory.title
        )}
      </li>
      <li className="mb-0 ml-auto">
        <button
          onClick={showAccessory}
          aria-label="Close accessories window"
          className="rounded border bg-amber-300"
        >
          <Icons icon="close" />
        </button>
      </li>

      <li className="col-span-full mt-2 text-sm">{accessory.copy}</li>
    </ul>
  );
}
