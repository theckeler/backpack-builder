"use client";

export default function WrapperLabel({ children, htmlFor }) {
  return (
    <label
      className="drop-shadow-button mb-1 flex w-full cursor-pointer rounded  bg-sky-200 px-8 py-3 text-sm font-bold text-sky-900 shadow-button active:bg-amber-100 active:fill-amber-900 peer-checked:cursor-default peer-checked:bg-yellow-400"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
