"use client";

export default function ControlInputs({
	id,
	value,
	type = "checkbox",
	onChange,
	name = undefined,
	checked = false,
}) {
	return (
		<input
			type={type}
			id={id}
			value={value}
			checked={checked}
			name={type === "radio" ? name : undefined}
			onChange={(e) => onChange(e)}
			className="peer hidden"
		/>
	);
}
