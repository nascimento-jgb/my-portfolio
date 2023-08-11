import React from 'react';
import HeroAboutMe from './HeroAboutMe';
//h-screen
const Hero = () => {
	return (
		<div className="relative bg-transparent overflow-hidden h-full pt-64">
			<div className="relative z-10 flex flex-col justify-center items-center min-h-full  text-black">
				<h1 className="text-8xl font-sans-serif font-regular font-GilroyLight mb-6 text-center max-w-6xl mx-auto tracking-tighter mt-150px">
						Developer and designer specialized in mobile</h1>
				<p className="text-xl font-sans-serif font-regular font-GilroyLight mt-4 pb-32">
					Powered by
					{'     '}
					<img src="/42-logo-again.png" alt="42" className="inline h-9 w-auto ml-2" />
				</p>
			</div>
			<div className='mt-2'>
				<HeroAboutMe />
			</div>
		</div>
	);
};

export default Hero;

