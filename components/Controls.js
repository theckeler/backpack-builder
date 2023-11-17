"use client";

import ControlInputs from "./ControlInputs";
import ControlLabel from "./ControlLabel";

export default function Controls({
	vanBuild,
	setVanBuild,
	radioChange,
	className = "absolute bg-neutral-800 shadow p-2",
	liClassName = "gap-1 items-center group",
}) {
	return (
		<>
			<div className={className + " left-4 top-4"}>
				<ul className="grid gap-2">
					{Object.keys(vanBuild.vanView).map(function (objectKey, i) {
						return (
							<li className={liClassName} key={i}>
								<ControlInputs
									onChange={radioChange}
									value={objectKey}
									id={objectKey}
									type="radio"
									name="vanView"
									checked={vanBuild.vanView[objectKey]}
								/>
								<ControlLabel htmlFor={objectKey}>{objectKey}</ControlLabel>
							</li>
						);
					})}
				</ul>
			</div>

			<div className={className + " right-4 top-4"}>
				<ul className="">
					<li className={liClassName}>
						<ControlInputs
							value="AccessoryRack"
							id="AccessoryRack"
							onChange={(e) => {
								setVanBuild({
									...vanBuild,
									AccessoryRack: e.currentTarget.checked,
								});
							}}
							checked={vanBuild.AccessoryRack}
						/>
						<ControlLabel htmlFor="AccessoryRack">Accessory Rack</ControlLabel>
					</li>
				</ul>
			</div>

			<div className={className + " left-4 bottom-4"}>
				<ul className="grid gap-2">
					<li className={liClassName}>
						{/* <input
							className="appearance-none w-full h-full rounded bg-white checked:bg-red-500"
							id="dark"
							type="radio"
							value="dark"
							name="windowMode"
							checked={vanBuild.windowMode.dark}
							onChange={(e) => radioChange(e)}
						/> */}
						<ControlInputs
							id="dark"
							type="radio"
							value="dark"
							name="windowMode"
							checked={vanBuild.windowMode.dark}
							onChange={(e) => radioChange(e)}
						/>
						<ControlLabel htmlFor="dark">Dark Mode</ControlLabel>
					</li>
					<li className={liClassName}>
						<ControlInputs
							id="light"
							type="radio"
							value="light"
							name="windowMode"
							checked={vanBuild.windowMode.light}
							onChange={(e) => radioChange(e)}
						/>
						<ControlLabel htmlFor="light">Light Mode</ControlLabel>
					</li>
				</ul>
			</div>
		</>
	);
}
