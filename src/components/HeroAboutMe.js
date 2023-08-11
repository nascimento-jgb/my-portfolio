import React from "react";

const HeroAboutMe = () => {
	return (
		<div className="mt-20 mb-20 px-10">
			<a
				href="/about"
				className="z-1 h-700 max-w-screen-xl bg-gray-200 bg-no-repeat bg-cover flex flex-col justify-between items-start mx-auto p-20 space-y-4 text-black relative overflow-hidden"
				data-ix="work-teaser-hover"
				style={{ transition: "all 0.2s, transform 200ms", transform: "scaleX(1) scaleY(1)" }}
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
					style={{ transformStyle: "preserve-3d", transform: "translateX(0px) translateY(0px) translateZ(0px)" }}
				>
					About me
				</h3>
			</a>
		</div>
	);
};

export default HeroAboutMe;
