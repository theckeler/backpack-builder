"use client";

export default function ControlLabel({ children, htmlFor }) {
  return (
    <label
      className="block cursor-pointer rounded bg-neutral-100 px-4 py-3 text-sm font-bold shadow-base shadow-yellow-900/40 peer-checked:cursor-default peer-checked:bg-yellow-400 lg:px-4 lg:py-1"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
