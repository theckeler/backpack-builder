"use client";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import Controls from "@/components/Controls";

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
	const [loading, setLoading] = useState(false);
	// const [matchMedia, setMatchMedia] = useState("light");

	// useEffect(() => {
	// 	const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
	// 	console.log(matchMedia.matches);
	// 	document.querySelector("html").classList.remove("light", "dark");
	// 	if (matchMedia.matches) {
	// 		document.querySelector("html").classList.add("dark");
	// 	}
	// });

	useEffect(() => {
		// console.log("vanBuild", vanBuild);
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

	const images = {
		sprinterRearDriver:
			"https://cdn.shopify.com/s/files/1/0616/3405/2352/files/sprinter-r-d.png?v=1700163309",
	};

	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between relative select-none`}>
			{loading && (
				<div className="fixed top-0 left-0 w-screen min-h-screen bg-white/80 z-50">
					loading
				</div>
			)}

			<div
				className="fixed z-30 left-0 top-0 w-screen min-h-screen"
				id="controls">
				<Controls {...{ vanBuild, setVanBuild, radioChange }} />
			</div>

			{vanBuild.vanView.RearDriver && (
				<div>
					<NextImage
						className="z-0 object-cover"
						src={images["sprinterRearDriver"] + "&width=2000"}
						alt=""
						fill
					/>

					{vanBuild.AccessoryRack && (
						<NextImage
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
					<NextImage
						className="z-0 object-cover"
						src="https://cdn.shopify.com/s/files/1/0616/3405/2352/files/sprinter-r-p.png?v=1700163309&width=2000"
						alt=""
						fill
					/>
					{vanBuild.AccessoryRack && (
						<NextImage
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
					<NextImage
						className="z-0 object-cover"
						src="https://cdn.shopify.com/s/files/1/0616/3405/2352/files/sprinter-r.png?v=1700163309&width=2000"
						alt=""
						fill
					/>
					{vanBuild.AccessoryRack && (
						<NextImage
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
