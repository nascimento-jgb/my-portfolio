import React from "react";

const Map = () => {
	return (
		<div className="pt-36 bg-black relative pr-16 l-16">
			<div className="flex justify-between items-center">
				<div className="ml-20 mr-15 text-center pt-4">
					<p className="text-white text-2xl font-sans-serif font-GilroyBold leading-relaxed tracking-wide z-20"
						>
						<div className="mb-2">
						  I was born in Rio de Janeiro - Brazil.
						</div>
						<div className="mb-2">A hectic and culturally rich capital</div>
						<div className="mb-2">that provided me unique and</div>
						<div className="mb-2">valuable life lessons</div>
						<div className="mb-2">before moving to Europe.</div>
					</p>
				</div>
				<div className="mr-21 z-10 relative">
					<img
						src="map.png"
						alt="Map"
						className="w-full max-h-full max-w-none opacity-50"
					/>
				</div>
			</div>
			<div className="absolute bottom-[50%] left-[75%] transform -translate-x-[-120px] translate-y-[255px]">
				<div className="animate-pulse">
					<svg
						className="h-16 w-16 text-white opacity-90 fill-current"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<circle cx="12" cy="12" r="10" strokeWidth="2" />
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Map;


