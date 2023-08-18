import React from "react";

const Map = () => {
	return (
		<div className="pt-12 md:pt-24 lg:pt-36 bg-black relative pr-2 md:pr-16">
			<div className="flex flex-col md:flex-row justify-between items-center">
				<div className="ml-6 md:ml-20 mr-6 md:mr-15 text-center md:text-left pt-4">
					<p className="text-white text-base md:text-xl font-sans-serif font-GilroyBold leading-relaxed tracking-wide z-20">
						<div className="mb-1 md:mb-2">
							I was born in Rio de Janeiro - Brazil.
						</div>
						<div className="mb-1 md:mb-2">A hectic and culturally rich capital</div>
						<div className="mb-1 md:mb-2">that provided me unique and</div>
						<div className="mb-1 md:mb-2">valuable life lessons</div>
						<div className="mb-1 md:mb-2">before moving to Europe.</div>
					</p>
				</div>
				<div className="mr-6 md:mr-21 z-10 relative">
					<img
						src="map.png"
						alt="Map"
						className="w-full max-h-full max-w-none opacity-50"
					/>
				</div>
			</div>
			<div className="absolute bottom-1/4 md:bottom-[50%] left-[75%] transform -translate-x-[55%] -translate-y-[-200%] md:-translate-x-[-35%] md:translate-y-[280%] g:translate-x-[310%] lg:translate-y-[385%]">
				<div className="animate-pulse">
					<svg
						className="h-8 md:h-12 lg:w-16 w-8 md:w-12 lg:h-16 text-white opacity-90 fill-current"
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

