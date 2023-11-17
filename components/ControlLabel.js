"use client";

export default function ControlLabel({ children, htmlFor, text }) {
	return (
		<label
			className="block  px-4 py-2 uppercase font-bold rounded bg-neutral-400 peer-checked:bg-yellow-500 cursor-pointer"
			htmlFor={htmlFor}>
			{children}
		</label>
	);
}
