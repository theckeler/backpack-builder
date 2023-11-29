"use client";

export default function ControlLabel({ children, htmlFor }) {
  return (
    <label
      className="shadow-button drop-shadow-button flex w-full cursor-pointer rounded  bg-sky-200 px-4 py-3 text-sm font-bold text-sky-900 active:bg-amber-100 active:fill-amber-900 peer-checked:cursor-default peer-checked:bg-yellow-400"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
