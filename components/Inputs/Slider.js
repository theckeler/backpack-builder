export default function InputSlider({ min, max, step, value, onChange }) {
  return (
    <input
      className="w-full lg:max-w-4xl mx-auto"
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
    />
  );
}
