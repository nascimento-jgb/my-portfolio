import React from "react";

const SectionAboutMe = () => {
	return (
		<div className="mt-10 md:mt-20 mb-10 md:mb-20 px-4 md:px-10 py-8 md:py-10 relative">
			<a
				href="/about"
				className="z-1 h-[400px] md:h-[700px] max-w-screen-xl bg-gray-100 bg-no-repeat bg-cover flex flex-col justify-between items-start mx-auto p-6 md:p-20 space-y-4 text-black relative overflow-hidden transform transition-transform hover:scale-95"
				data-ix="work-teaser-hover"
			>
				<h2
					className="mt-0 mb-3 md:mb-6 font-GilroyLight font-semibold text-4xl md:text-7xl leading-7 transform transition duration-200"
					style={{
						transformStyle: "preserve-3d",
						transform: "translateX(0px) translateY(0px) translateZ(0px)",
						letterSpacing: "-1px",
						fontSize: "72px",
						lineHeight: "1.2",
					}}
				>
					Nice to<br />meet you
				</h2>
				<h3
					className="mt-0 mb-4 md:mb-8 font-GilroyLight font-semibold text-xl md:text-3xl leading-5 transform transition duration-200"
					style={{
						transformStyle: "preserve-3d",
						transform: "translateX(0px) translateY(0px) translateZ(0px)",
					}}
				>
					About me
				</h3>
			</a>
			<div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4">
				<img
					src="flipped-profile.png"
					alt="Profile"
					className="h-[400px] md:h-[700px] w-auto opacity-90 hidden md:block"
				/>
			</div>
		</div>
	);
};

export default SectionAboutMe;
