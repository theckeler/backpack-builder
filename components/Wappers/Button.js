"use client";

export default function WrapperButton({
  className = null,
  children,
  onClick,
  name,
  value,
  open,
}) {
  return (
    <button
      className={`shadow-button drop-shadow-button flex w-full max-w-[48px] justify-center rounded active:bg-amber-100 active:fill-amber-900 ${
        open ? " bg-amber-400" : " bg-sky-200 fill-sky-900"
      } ${className}`}
      onClick={onClick}
      name={name}
      value={value}
    >
      {children}
    </button>
  );
}
