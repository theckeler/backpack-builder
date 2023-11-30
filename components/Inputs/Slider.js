export default function InputSlider({ min, max, step, value, onChange }) {
  return (
    <input
      className="w-full lg:max-w-xl"
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
    />
  );
}
