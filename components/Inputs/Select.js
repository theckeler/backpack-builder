export default function InputSelect({
  options,
  className,
  ariaLabel,
  activeVan,
}) {
  const svg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve'  viewBox='0 0 44.02 42.03'%3E%3Cpath d='m24.11 24.72-6-6 1.4-1.4 4.6 4.6 4.6-4.6 1.4 1.4-6 6z'/%3E%3ClinearGradient id='a' x1='0' x2='11.1' y1='21.015' y2='21.015' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23c5981b' stop-opacity='.3'/%3E%3Cstop offset='1' stop-color='%23fbbf24' stop-opacity='0'/%3E%3C/linearGradient%3E%3Cpath fill='url(%23a)' d='M0 0h11.1v42.03H0z'/%3E%3C/svg%3E")`;

  return (
    <select
      onChange={options.onChange}
      className={className}
      aria-label={ariaLabel}
      style={{
        backgroundImage: svg,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center right",
        backgroundSize: "48px 100%",
      }}
    >
      <option>{activeVan}</option>
      {options.blocks.map(function ({ title, value }, i) {
        return (
          activeVan !== title && (
            <option value={value} onClick={options.onClick} key={i}>
              {title}
            </option>
          )
        );
      })}
    </select>
  );
}