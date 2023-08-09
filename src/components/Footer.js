// import React, {useState} from 'react';

// const Footer = () => {

// 	const [hoveredButton, setHoveredButton] = useState(null);

// 	const handleButtonHover = (buttonName) => {
// 		setHoveredButton(buttonName);
// 	};

// 	return (
// 	<footer className="bg-transparent text-black py-10 border-t" style={{ height: 'calc(100vh - 80px)', overflowY: 'auto' }}>
// 	<div className="container mx-auto">
// 		<div className="flex flex-col lg:flex-row justify-between items-center">
// 			<div className="text-center lg:text-left mb-6 lg:mb-0">
// 				<h2 className="text-8xl max-w-3xl font-medium font-sans-serif font-GraphikSemiBold mt-10">Let's connect digitally</h2>
// 				<p className='mt-16 text-xl font-semibold font-sans-serif font-GraphikSemiBold' >&copy; 2023 João Nascimento</p>
// 			</div>
// 			<div className='flex flex-col space-y-4 mt-14'>
// 				<button
// 					className={`${
// 					hoveredButton && hoveredButton !== 'email' ? 'text-gray-500' : 'text-black'
// 					} text-3xl font-bold font-sans-serif font-GraphikSemiBold transition pl-4 w-full text-left`}
// 					onMouseEnter={() => handleButtonHover('email')}
// 					onMouseLeave={() => setHoveredButton(null)}
// 					>
// 						Email
// 				</button>
// 				<button
// 					className={`${
// 					hoveredButton && hoveredButton !== 'twitter' ? 'text-gray-500' : 'text-black'
// 					} text-3xl font-bold font-sans-serif font-GraphikSemiBold transition pl-4 w-full text-left`}
// 					onMouseEnter={() => handleButtonHover('twitter')}
// 					onMouseLeave={() => setHoveredButton(null)}
// 					>
// 						Twitter
// 				</button>
// 				<button
// 					className={`${
// 					hoveredButton && hoveredButton !== 'github' ? 'text-gray-500' : 'text-black'
// 					} text-3xl font-bold font-sans-serif font-GraphikSemiBold transition pl-4 w-full text-left`}
// 					onMouseEnter={() => handleButtonHover('github')}
// 					onMouseLeave={() => setHoveredButton(null)}
// 					>
// 						Github
// 				</button>
// 				<button
// 					className={`${
// 					hoveredButton && hoveredButton !== 'linkedin' ? 'text-gray-500' : 'text-black'
// 					} text-3xl font-bold font-sans-serif font-GraphikSemiBold transition pl-4 w-full text-left`}
// 					onMouseEnter={() => handleButtonHover('linkedin')}
// 					onMouseLeave={() => setHoveredButton(null)}
// 					>
// 						LinkedIn
// 				</button>
// 				<button
// 					className={`${
// 					hoveredButton && hoveredButton !== 'instagram' ? 'text-gray-500' : 'text-black'
// 					} text-3xl font-bold font-sans-serif font-GraphikSemiBold transition pl-4 w-full text-left`}
// 					onMouseEnter={() => handleButtonHover('instagram')}
// 					onMouseLeave={() => setHoveredButton(null)}
// 					>
// 						Instagram
// 				</button>
// 			</div>
// 		</div>
// 	</div>
// </footer>
// 	);
// };

// export default Footer;

import React, { useState } from 'react';

const Footer = () => {
	const [hoveredButton, setHoveredButton] = useState(null);

	const handleButtonHover = (buttonName) => {
		setHoveredButton(buttonName);
	};

	return (
		<footer className="bg-transparent text-black py-10 border-t" style={{ height: 'calc(100vh - 80px)', overflowY: 'auto' }}>
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row justify-center items-center"> {/* Change justify-between to justify-center */}
					<div className="text-center lg:text-left mb-6 lg:mb-0">
						<h2 className="text-8xl max-w-3xl font-medium font-sans-serif font-GraphikSemiBold mt-10">Let's connect digitally</h2>
						<p className='mt-16 text-xl font-semibold font-sans-serif font-GraphikSemiBold' >&copy; 2023 João Nascimento</p>
					</div>
					<div className='flex flex-col space-y-4 mt-14'>
						<button
							className={`${
								hoveredButton && hoveredButton !== 'email' ? 'text-gray-500' : 'text-black'
							} text-3xl font-bold font-sans-serif font-GraphikSemiBold transition pl-4 w-full text-left`}
							onMouseEnter={() => handleButtonHover('email')}
							onMouseLeave={() => setHoveredButton(null)}
						>
							Email
						</button>
						<button
							className={`${
								hoveredButton && hoveredButton !== 'twitter' ? 'text-gray-500' : 'text-black'
							} text-3xl font-bold font-sans-serif font-GraphikSemiBold transition pl-4 w-full text-left`}
							onMouseEnter={() => handleButtonHover('twitter')}
							onMouseLeave={() => setHoveredButton(null)}
						>
							Twitter
						</button>
						<button
							className={`${
								hoveredButton && hoveredButton !== 'github' ? 'text-gray-500' : 'text-black'
							} text-3xl font-bold font-sans-serif font-GraphikSemiBold transition pl-4 w-full text-left`}
							onMouseEnter={() => handleButtonHover('github')}
							onMouseLeave={() => setHoveredButton(null)}
						>
							Github
						</button>
						<button
							className={`${
								hoveredButton && hoveredButton !== 'linkedin' ? 'text-gray-500' : 'text-black'
							} text-3xl font-bold font-sans-serif font-GraphikSemiBold transition pl-4 w-full text-left`}
							onMouseEnter={() => handleButtonHover('linkedin')}
							onMouseLeave={() => setHoveredButton(null)}
						>
							LinkedIn
						</button>
						<button
							className={`${
								hoveredButton && hoveredButton !== 'instagram' ? 'text-gray-500' : 'text-black'
							} text-3xl font-bold font-sans-serif font-GraphikSemiBold transition pl-4 w-full text-left`}
							onMouseEnter={() => handleButtonHover('instagram')}
							onMouseLeave={() => setHoveredButton(null)}
						>
							Instagram
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

