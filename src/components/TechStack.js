import React from "react";

const TechStack = () => {
	return (
		<div className="bg-black relative overflow-hidden">
			<h1
				className="font-sans-serif font-bold font-GilroyBold text-white"
				style={{ fontSize: "220px", zIndex: 10, position: "relative", left: "-5%", opacity: "0.1" }}
			>
				Tech Stack
			</h1>
			<div className="pr-10 pl-10 z-20 relative pb-[32vh]">
				<img
					src="icons-white.png"
					alt="Icons"
					className="max-h-[70vh] max-w-[80vw] absolute opacity-90 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
				/>
			</div>
			<div className="pb-64"></div>
		</div>
	);
};

export default TechStack;
