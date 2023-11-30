export default function InputCheckbox({
  id,
  value,
  onChange,
  checked = false,
}) {
  return (
    <input
      type="checkbox"
      id={id}
      value={value}
      checked={checked}
      onChange={onChange}
      className="peer hidden"
    />
  );
}
