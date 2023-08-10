import React from 'react';

const Hero = () => {
	return (
		<div className="relative h-screen bg-transparent overflow-hidden">
			<div className="relative z-10 flex flex-col justify-center items-center h-full text-black">
				<h1 className="text-8xl font-sans-serif font-regular font-GilroyLight mb-6 text-center max-w-6xl mx-auto tracking-tighter mt-150px">
						Developer and designer specialized in mobile</h1>
				<p className="text-xl font-sans-serif font-regular font-GilroyLight mt-4">
					Powered by
					{'     '}
					<img src="/42-logo-again.png" alt="42" className="inline h-9 w-auto ml-2" />
				</p>
			</div>
		</div>
	);
};

export default Hero;

