"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
	const [vanBuild, setVanBuild] = useState({
		windowMode: { dark: false, light: true },
		AccessoryRack: false,
		vanView: {
			Rear: false,
			RearPassenger: true,
			RearDriver: false,
		},
	});

	useEffect(() => {
		console.log("vanBuild:", vanBuild);
		//localStorage.setItem("theme", vanBuild.windowMode.dark ? "dark" : "light");
		document.querySelector("html").classList.remove("light", "dark");
		document
			.querySelector("html")
			.classList.add(vanBuild.windowMode.dark ? "dark" : "light");
	}, [vanBuild]);

	const radioChange = (e) => {
		// console.log(e.currentTarget.name);
		const eName = e.currentTarget.name;

		const currentRadio = e.currentTarget; // Create a copy of the vanView object
		const updatedVanView = {}; // Set the selected radio button to true and others to false
		Object.keys(vanBuild[eName]).forEach((key) => {
			updatedVanView[key] = key === currentRadio.value;
		});
		// Update the state with the modified vanView
		setVanBuild((prevVanBuild) => ({
			...prevVanBuild,
			[eName]: updatedVanView,
		}));
	};

	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between relative select-none`}>
			<div className="fixed z-50 left-4 top-4 bg-neutral-800 shadow p-2">
				<ul className="grid gap-2">
					{Object.keys(vanBuild.vanView).map(function (key, i) {
						return (
							<li
								className="grid grid-cols-[1fr_20px] gap-1 items-center group/Rear"
								key={i}>
								<label
									className="bg-yellow-500 px-4 py-2 uppercase font-bold rounded"
									htmlFor={key}>
									{key}
								</label>
								<input
									className="appearance-none w-full h-full rounded bg-white checked:bg-red-500"
									type="radio"
									id={key}
									value={key}
									name="vanView"
									checked={vanBuild.vanView[key]}
									onChange={(e) => radioChange(e)}
								/>
							</li>
						);
					})}
				</ul>
			</div>

			<div className="fixed z-50 right-4 top-4 bg-neutral-800 shadow p-2">
				<ul className="">
					<li className="grid grid-cols-[20px_1fr] gap-1 items-center group/AccessoryRack">
						<input
							className="appearance-none w-full h-full rounded bg-white checked:bg-red-500"
							type="checkbox"
							id="AccessoryRack"
							checked={vanBuild.AccessoryRack}
							onChange={(e) => {
								setVanBuild({
									...vanBuild,
									AccessoryRack: e.currentTarget.checked,
								});
							}}
						/>
						<label
							className="bg-yellow-500 px-4 py-2 uppercase font-bold rounded"
							htmlFor="AccessoryRack">
							Accessory Rack
						</label>
					</li>
				</ul>
			</div>

			<div className="fixed z-50 right-4 bottom-4 bg-neutral-800 shadow p-2">
				<ul className="grid gap-2">
					<li className="grid grid-cols-[20px_1fr] gap-1 items-center group/windowMode">
						<input
							className="appearance-none w-full h-full rounded bg-white checked:bg-red-500"
							id="dark"
							type="radio"
							value="dark"
							name="windowMode"
							checked={vanBuild.windowMode.dark}
							onChange={(e) => radioChange(e)}
						/>
						<label
							className="bg-yellow-500 px-4 py-2 uppercase font-bold rounded"
							htmlFor="dark">
							Dark Mode
						</label>
					</li>
					<li className="grid grid-cols-[20px_1fr] gap-1 items-center group/windowMode">
						<input
							className="appearance-none w-full h-full rounded bg-white checked:bg-red-500"
							id="light"
							type="radio"
							value="light"
							name="windowMode"
							checked={vanBuild.windowMode.light}
							onChange={(e) => radioChange(e)}
						/>
						<label
							className="bg-yellow-500 px-4 py-2 uppercase font-bold rounded"
							htmlFor="light">
							Light Mode
						</label>
					</li>
				</ul>
			</div>

			{vanBuild.vanView.RearDriver && (
				<div>
					<Image
						className="z-0 object-cover"
						src="https://cdn.shopify.com/s/files/1/0616/3405/2352/files/sprinter-r-d.png?v=1700163309&width=2000"
						alt=""
						fill
					/>
					{vanBuild.AccessoryRack && (
						<Image
							className="z-10 object-cover"
							src="https://cdn.shopify.com/s/files/1/0616/3405/2352/files/sprinter-r-d-AccessoryRack.png?v=1700164067&width=2000"
							alt=""
							fill
						/>
					)}
				</div>
			)}

			{vanBuild.vanView.RearPassenger && (
				<div>
					<Image
						className="z-0 object-cover"
						src="https://cdn.shopify.com/s/files/1/0616/3405/2352/files/sprinter-r-p.png?v=1700163309&width=2000"
						alt=""
						fill
					/>
					{vanBuild.AccessoryRack && (
						<Image
							className="z-10 object-cover"
							src="https://cdn.shopify.com/s/files/1/0616/3405/2352/files/sprinter-r-p-AccessoryRack.png?v=1700164067&width=2000"
							alt=""
							fill
						/>
					)}
				</div>
			)}

			{vanBuild.vanView.Rear && (
				<div>
					<Image
						className="z-0 object-cover"
						src="https://cdn.shopify.com/s/files/1/0616/3405/2352/files/sprinter-r.png?v=1700163309&width=2000"
						alt=""
						fill
					/>
					{vanBuild.AccessoryRack && (
						<Image
							className="z-10 object-cover"
							src="https://cdn.shopify.com/s/files/1/0616/3405/2352/files/sprinter-r-AccessoryRack.png?v=1700164067&width=2000"
							alt=""
							fill
						/>
					)}
				</div>
			)}
		</main>
	);
}
