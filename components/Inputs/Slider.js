export default function InputSlider({
  min,
  max,
  step,
  value,
  onChange,
  onMouseDown,
  onMouseUp,
}) {
  return (
    <input
      className="mx-auto w-full lg:max-w-4xl"
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    />
  );
}
