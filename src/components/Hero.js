// import React from 'react';

// const Hero = () => {
// 	return (
// 	//	 <div className="flex flex-col justify-center items-center h-80vh bg-gray-200">
// 	// 	<div className="flex justify-center items-center w-96 h-200 bg-gray-300 p-4">
// 	 <div className="h-800px w-text-center flex flex-col justify-center items-center pt-100px bg-gray-200">
// 		<div className="mx-auto px-100px bg-gray-300">
// 			{/* <h1 className="text-8xl font-sans-serif font-GilroyRegular text-center leading-tight tracking-tighter p-36"> */}
// 			<h1 className="mx-auto max-w-960px text-6xl leading-6 tracking-tight text-center">
// 				Developer and designer specialized in mobile
// 			</h1>
// 		</div>
// 		<div className="flex justify-center items-center w-72 h-12 bg-gray-400 p-2 mt-6">
// 			{/* <Icon name="add" color="black" size="20px" /> */}
// 			<h2 className="text-lg font-semibold font-secondary">
// 			Powered by
// 			</h2>
// 			{/* <Img src="/public/hive.png" h="2rem" w="2rem" m={{ l: "0.5rem" }} /> */}
// 		</div>
// 		</div>
// 	);
// };


// export default Hero;

import React from 'react';

const Hero = () => {
	return (
		<div className="relative h-screen bg-transparent overflow-hidden">
			{/* <div className="absolute inset-0 bg-gray-900"> */}
				{/* Background video or image goes here */}
			{/* </div> */}
			{/* <div className="absolute inset-0 bg-transparent opacity-40"></div> */}
			<div className="relative z-10 flex flex-col justify-center items-center h-full text-black">
				<h1 className="text-8xl font-sans-serif font-regular font-GilroyLight mb-6 text-center max-w-6xl mx-auto tracking-tighter mt-[-100px]">
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

