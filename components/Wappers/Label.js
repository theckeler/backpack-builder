export default function WrapperLabel({
  className = "drop-shadow-button flex w-full cursor-pointer rounded  bg-sky-200 px-8 py-4 text-xs font-bold text-sky-900 shadow-button active:bg-amber-100 active:fill-amber-900 peer-checked:cursor-default peer-checked:bg-yellow-400 md:px-4 md:py-2 lg:text-base",
  children,
  htmlFor,
}) {
  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
}
