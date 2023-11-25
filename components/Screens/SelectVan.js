"use client";

import Logo from "@/images/logo";
import ImagesVan from "@/images/van";

export default function SelectVan({ vanChange }) {
  const buttons = {
    className:
      "px-10 py-4 bg-amber-500 font-bold shadow-base rounded hover:group-hover:blur-none hover:bg-amber-100 hover:text-amber-900 hover:drop-shadow-4xl hover:shadow-amber-500/100 transition-all hover:fill-amber-600",
    onClick: (e) => {
      vanChange(e);
    },
    blocks: [
      {
        title: "Sprinter 144",
        value: "sprinterVan",
      },
      {
        title: "Transit 130",
        value: "transitVan",
      },
    ],
  };

  return (
    <ul className="group grid justify-items-center gap-3 md:grid-cols-2">
      <li className="col-span-full">
        <Logo className="mx-auto h-full max-h-36 fill-sky-400" />

        <div className="mt-4 text-4xl font-extralight text-amber-100">
          Select your van:
        </div>
      </li>

      {buttons.blocks.map(function ({ title, value }, i) {
        return (
          <li key={i}>
            <button
              value={value}
              className={buttons.className}
              onClick={buttons.onClick}
            >
              <div className="h-10">
                <ImagesVan className="h-full w-full " />
              </div>
              {title}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
