export default function InputSelect({
  options,
  className,
  ariaLabel,
  activeVan,
}) {
  return (
    <select
      onChange={options.onChange}
      className={className}
      aria-label={ariaLabel}
      style={{
        backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' %3E%3Cpath d='M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z' /%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center right",
        backgroundSize: "2em",
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
