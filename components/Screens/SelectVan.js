
import Logo from "@/images/logo";
import ImagesVan from "@/images/van";

export default function ScreenSelectVan({ vanChange }) {
  const buttons = {
    className:
      "w-full text-center px-10 py-4 bg-amber-500 font-bold shadow-base rounded",
    onClick: (e) => {
      vanChange(e);
    },
    blocks: [
      {
        title: "Sprinter 144",
        value: "sprinterVan",
      },
      // {
      //   title: "Transit 130",
      //   value: "transitVan",
      // },
    ],
  };

  return (
    <div className="col-span-full">
      <Logo className="h-full max-h-36 w-full fill-sky-400" />

      <div className="mt-4 text-center text-4xl font-extralight text-amber-100">
        Select your van:
      </div>

      <ul className="mt-3 grid w-full max-w-xl auto-cols-max grid-flow-col items-stretch justify-center gap-3">
        {buttons.blocks.map(function ({ title, value }, i) {
          return (
            <li key={i}>
              <button
                value={value}
                className={buttons.className}
                onClick={buttons.onClick}
              >
                <ImagesVan className="mx-auto h-10 w-auto" />
                {title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
