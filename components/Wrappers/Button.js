export default function WrapperButton({
  className = null,
  children,
  onClick,
  name,
  value,
  open,
  ariaLabel,
}) {
  return (
    <button
      className={`drop-shadow-button flex w-full max-w-[48px] justify-center rounded shadow-button active:bg-amber-100 active:fill-amber-900 ${
        open ? " bg-amber-400" : " bg-sky-100 fill-sky-900"
      } ${className}`}
      onClick={onClick}
      name={name}
      value={value}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
