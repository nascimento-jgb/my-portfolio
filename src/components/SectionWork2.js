import React from "react";

const SectionWork2 = () => {
	return (
		<div className="mt-20 mb-20 px-10 relative">
			<a
				href="https://github.com/nascimento-jgb/Pokedex-Simulator"
				target="_blank"
				rel="noreferrer"
				className="z-1 h-[700px] max-w-screen-xl bg-[#fdf0f2] bg-no-repeat bg-cover flex flex-col justify-between items-start mx-auto p-20 space-y-4 text-[#770012] relative overflow-hidden transform transition-transform hover:scale-95"
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
					Gotta Catch<br />'Em All!
				</h2>
				<h3
					className="mt-0 mb-8 font-GilroyLight font-semibold text-3xl leading-5 transform transition duration-200"
					style={{
						transformStyle: "preserve-3d",
						transform: "translateX(0px) translateY(0px) translateZ(0px)"
					}}
				>
					GitHub
				</h3>
			</a>
			<div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4">
					<img
						src="Pokemon-mockup.png"
						alt="Profile"
						className="h-[700px] opacity-90 hidden md:block"
					/>
				</div>
		</div>
	);
};

export default SectionWork2;
