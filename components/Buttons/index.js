"use client";

export default function ButtonWrapper({
  className,
  children,
  onClick,
  name,
  value,
}) {
  return (
    <button
      className={`flex w-full max-w-[48px] justify-center rounded shadow-base ${className}`}
      onClick={onClick}
      name={name}
      value={value}
    >
      {children}
    </button>
  );
}
