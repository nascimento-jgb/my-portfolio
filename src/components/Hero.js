// import React from 'react';
// import SectionAboutMe from './SectionAboutMe';
// import SectionText from './SectionText';
// import SectionWork1 from './SectionWork1';
// import SectionWork2 from './SectionWork2';

// const Hero = () => {
// 	return (
// 		<div className="relative bg-transparent overflow-hidden h-full pt-60">
// 			<div className="relative z-10 flex flex-col justify-center items-center min-h-full	text-black">
// 				<h1 className="text-8xl font-sans-serif font-regular font-GilroyLight mb-6 text-center max-w-6xl mx-auto tracking-tighter mt-150px">
// 						Developer and designer specialized in mobile</h1>
// 				<p className="text-xl font-sans-serif font-regular font-GilroyLight mt-4 pb-32">
// 					Powered by
// 					{'		 '}
// 					<img src="/42-logo-again.png" alt="42" className="inline h-9 w-auto ml-2" />
// 				</p>
// 			</div>
// 			<div className='mt-2'>
// 				<SectionAboutMe />
// 				<SectionText />
// 				<SectionWork1 />
// 				<SectionWork2 />
// 			</div>
// 		</div>
// 	);
// };

// export default Hero;

import React from 'react';
import SectionAboutMe from './SectionAboutMe';
import SectionText from './SectionText';
import SectionWork1 from './SectionWork1';
import SectionWork2 from './SectionWork2';
import SectionWork0 from './SectionWork0';

const Hero = () => {
	return (
		<div className="relative bg-transparent overflow-hidden pt-8 md:pt-16 lg:pt-24">
			<div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-black">
				<h1 className="text-4xl md:text-6xl lg:text-8xl font-sans-serif font-regular font-GilroyLight mb-4 md:mb-6 text-center max-w-screen-sm md:max-w-screen-lg mx-auto tracking-tighter mt-2 md:mt-8">
  					Developer and designer specialized in mobile
				</h1>
				<p className="text-base md:text-xl font-sans-serif font-regular font-GilroyLight mt-2 md:mt-4 pb-8 md:pb-12">
					Powered by{'		 '}
					<img src="/42-logo-again.png" alt="42" className="inline h-6 md:h-9 w-auto ml-1 md:ml-2" />
				</p>
			</div>
			<div className="mt-2">
				<SectionAboutMe />
				<SectionText />
				<SectionWork0 />
				<SectionWork1 />
				<SectionWork2 />
			</div>
		</div>
	);
};

export default Hero;

