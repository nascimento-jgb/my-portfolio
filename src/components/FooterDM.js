import React, { useState } from 'react';

const FooterDM = () => {
	const [hoveredButton, setHoveredButton] = useState(null);

	const handleButtonHover = (buttonName) => {
		setHoveredButton(buttonName);
	};

	return (
		<footer className="bg-black text-white py-10 border-t" style={{ height: 'calc(100vh - 80px)', overflowY: 'auto' }}>
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row justify-between items-center mt-12">
					<div className="text-center lg:text-left mb-6 lg:mb-0">
						<h2 className="text-8xl max-w-3xl font-medium font-sans-serif font-GraphikSemiBold mt-14 ml-16">
							Let's connect digitally
						</h2>
						<p className="mt-16 text-xl font-semibold font-sans-serif font-GraphikSemiBold ml-16">
							&copy; 2023 João Nascimento
						</p>
					</div>
					<div className="mt-16 flex flex-col space-y-4 mr-28">
						<button
							className={`${
								hoveredButton && hoveredButton !== 'email' ? 'text-gray-500' : 'text-white'
							} text-3xl font-bold font-sans-serif font-GraphikSemiBold transition pl-4 w-full text-left`}
							onMouseEnter={() => handleButtonHover('email')}
							onMouseLeave={() => setHoveredButton(null)}
						>
							Email
						</button>
						<button
							className={`${
								hoveredButton && hoveredButton !== 'twitter' ? 'text-gray-500' : 'text-white'
							} text-3xl font-bold font-sans-serif font-GraphikSemiBold transition pl-4 w-full text-left`}
							onMouseEnter={() => handleButtonHover('twitter')}
							onMouseLeave={() => setHoveredButton(null)}
						>
							Twitter
						</button>
						<button
							className={`${
								hoveredButton && hoveredButton !== 'github' ? 'text-gray-500' : 'text-white'
							} text-3xl font-bold font-sans-serif font-GraphikSemiBold transition pl-4 w-full text-left`}
							onMouseEnter={() => handleButtonHover('github')}
							onMouseLeave={() => setHoveredButton(null)}
						>
							Github
						</button>
						<button
							className={`${
								hoveredButton && hoveredButton !== 'linkedin' ? 'text-gray-500' : 'text-white'
							} text-3xl font-bold font-sans-serif font-GraphikSemiBold transition pl-4 w-full text-left`}
							onMouseEnter={() => handleButtonHover('linkedin')}
							onMouseLeave={() => setHoveredButton(null)}
						>
							LinkedIn
						</button>
						<button
							className={`${
								hoveredButton && hoveredButton !== 'instagram' ? 'text-gray-500' : 'text-white'
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

export default FooterDM;
