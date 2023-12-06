import Logo from "@/images/logo";

export default function ScreenSelectVan({ vanChange }) {
  const buttons = {
    onChange: (e) => {
      vanChange(e);
    },
    blocks: [
      {
        title: "Sprinter",
        value: "sprinterVan",
      },
      {
        title: "Transit",
        value: "transitVan",
      },
      {
        title: "Promaster",
        value: "promasterVan",
      },
    ],
  };

  return (
    <div className="col-span-full">
      <Logo className="h-full max-h-36 w-full fill-sky-400" />

      <div className="mt-4 text-center text-4xl font-extralight text-amber-100">
        Select your van:
      </div>

      <select
        onChange={buttons.onChange}
        className="mt-2 w-full appearance-none rounded bg-amber-500 p-2 text-center font-bold shadow-base"
        aria-label="Select your van."
      >
        <option>Select</option>
        {buttons.blocks.map(function ({ title, value }, i) {
          return (
            <option value={value} onClick={buttons.onClick} key={i}>
              {title}
            </option>
          );
        })}
      </select>
    </div>
  );
}
