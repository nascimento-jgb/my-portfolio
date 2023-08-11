import React from "react";

const SectionAboutMe = () => {
	return (
		<div className="mt-20 mb-20 px-10 py-10 relative">
			<a
				href="/about"
				className="z-1 h-[700px] max-w-screen-xl bg-gray-100 bg-no-repeat bg-cover flex flex-col justify-between items-start mx-auto p-20 space-y-4 text-black relative overflow-hidden transform transition-transform hover:scale-95"
				data-ix="work-teaser-hover"
			>
				<h2
					className="mt-0 mb-6 font-GilroyLight font-semibold tracking-tighter text-7xl leading-7 transform transition duration-200"
					style={{
						transformStyle: "preserve-3d",
						transform: "translateX(0px) translateY(0px) translateZ(0px)",
						letterSpacing: "-1px",
						fontSize: "70px",
						lineHeight: "70px",
					}}
				>
					Nice to<br />meet you
				</h2>
				<h3
					className="mt-0 mb-8 font-GilroyLight font-semibold text-3xl leading-5 transform transition duration-200"
					style={{
						transformStyle: "preserve-3d",
						transform: "translateX(0px) translateY(0px) translateZ(0px)"
					}}
				>
					About me
				</h3>
			</a>
			<div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4">
				<img
					src="flipped-profile.png"
					alt="Profile"
					className="h-[700px] opacity-90"
				/>
			</div>
		</div>
	);
};

export default SectionAboutMe;


