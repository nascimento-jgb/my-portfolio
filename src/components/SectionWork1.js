import React from "react";

const SectionWork1 = () => {
	return (
		<div className="mt-20 mb-20 px-10 relative">
			<a
				href="https://github.com/nascimento-jgb/Little-Lemon-food-ordering-app"
				target="_blank"
				rel="noreferrer"
				className="z-1 h-[700px] max-w-screen-xl bg-[#f8f7ff] bg-no-repeat bg-cover flex flex-col justify-between items-start mx-auto p-20 space-y-4 text-[#271c64] relative overflow-hidden transform transition-transform hover:scale-95"
				data-ix="work-teaser-hover"
			>
				<h2
					className="mt-0 mb-6 font-GraphikBold font-semibold tracking-tighter text-7xl leading-7 transform transition duration-200"
					style={{
						transformStyle: "preserve-3d",
						transform: "translateX(0px) translateY(0px) translateZ(0px)",
						letterSpacing: "-1px",
						fontSize: "70px",
						lineHeight: "70px",
					}}
				>
					Little Lemon<br />Restaurant
				</h2>
				<h3
					className="mt-0 mb-8 font-GraphikBold font-semibold text-3xl leading-5 transform transition duration-200"
					style={{
						transformStyle: "preserve-3d",
						transform: "translateX(0px) translateY(0px) translateZ(0px)"
					}}
				>
					GitHub
				</h3>
			</a>
			<div className="absolute right-0 top-1/2 transform -translate-y-[45%] -translate-x-[50%]">
				<img
					src="Little-Lemon-Banner.png"
					alt="Profile"
					className="h-[600px] w-[350px] opacity-90"
				/>
			</div>
		</div>
	);
};

export default SectionWork1;


