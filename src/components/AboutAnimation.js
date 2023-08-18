import React, { useState, useEffect } from "react";

const AboutAnimation = () => {
	const [animationStep, setAnimationStep] = useState(0);

	useEffect(() => {
		const stepTimer = setInterval(() => {
			setAnimationStep((prevStep) => prevStep + 1);
		}, 500);

		return () => clearInterval(stepTimer);
	}, []);

	return (
		<div className="bg-black relative flex flex-col font-sans-serif font-GilroyBold justify-center min-h-screen text-white pt-60 md:pt-60 lg:pt-64">
		<h1
			className={`text-4xl md:text-6xl lg:text-8xl font-semibold mb-6 md:mb-6 lg:mb-8 opacity-0 ${
			  animationStep >= 1 ? "animate-step1" : ""
			}`} style={{ fontSize: "160px" , zIndex: 20 }}
		>
			<div className="text-left md:text-left lg:text-left ml-20 md:ml-60 lg:ml-80 pl-[-4] pb-4 leading-relaxed">
				Hello
			</div>
		</h1>
		<div className="text-justify whitespace-pre-wrap break-words pl-20 pr-20 md:pl-60 md:pr-60 lg:pr-80 lg:pl-80 font-sans-serif font-GilroyLight leading-relaxed tracking-wide"
			style={{ fontSize: "100px" , zIndex: 20}}>
		<p
			className={`text-2xl font-regular mb-8 opacity-0 p-2 ${
			  animationStep >= 2 ? "animate-step2" : ""
			}`}
		  >
			My name is João, and I'm a developer-designer from Finland. I am
			currently looking for an opportunity to apply my coding expertise,
			passion for mobile and minimal design.
		</p>
		<p
			className={`text-2xl font-regular mb-8 opacity-0 p-2 ${
			  animationStep >= 2 ? "animate-step2" : ""
			}`}
		>
			Over the last year, I've transitioned from being a product spacialist
			to software developer. By designing user-friendly features and
			intuitive interfaces, I can help companies to improve their customers' experiences.
		</p>
		<p
			className={`text-2xl font-regular mb-8 opacity-0 p-2 ${
			  animationStep >= 2 ? "animate-step2" : ""
			}`}
		>
			In my spare time, I keep an intense schudle of training for triathlon. Besides that, I enjoy
			some deep and phylosophical books, good music, design and some quality time with my friends.
		</p>
		</div>
		  {animationStep >= 3 && (
			<img
			className="max-w-full opacity-90 absolute top-0 right-0 z-10 animate-step3 mt-4 pr-44"
			src="flipped-profile.png"
			alt="Description"
		  />
		)}
		</div>
	);
}

export default AboutAnimation;


