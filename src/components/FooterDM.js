import React, { useState } from 'react';

const SocialMediaButton = ({ label, url, buttonName, hoveredButton, setHoveredButton }) => (
	<button
		className={`${
		hoveredButton && hoveredButton !== buttonName ? 'text-gray-500' : 'text-white'
		} text-base md:text-3xl font-bold font-sans-serif font-GraphikSemiBold transition w-full text-left`}
		onMouseEnter={() => setHoveredButton(buttonName)}
		onMouseLeave={() => setHoveredButton(null)}
		onClick={() => {
		window.open(url, '_blank', 'noopener,noreferrer');
		}}
	>
		{label}
	</button>
	);

const Footer = () => {
	const [hoveredButton, setHoveredButton] = useState(null);

	return (
		<footer className="bg-black text-white py-6 border-t" style={{ overflowY: 'auto' }}>
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row justify-between items-center mt-12">
					<div className="text-center lg:text-left mb-6 lg:mb-0">
						<h2 className="text-4xl md:text-8xl max-w-3xl font-medium font-sans-serif font-GraphikSemiBold mt-14 ml-4 md:ml-16 md:mb-20">
							Let's connect digitally
						</h2>
						<p className="mt-6 md:mt-16 text-base md:text-xl font-semibold font-sans-serif font-GraphikSemiBold ml-4 md:ml-16 md:mb-20">
							&copy; 2023 João Nascimento
						</p>
					</div>
					<div className="mt-6 md:mt-16 flex flex-col space-y-4 md:space-y-6">
						<SocialMediaButton
							label="Email"
							url="mailto:nasc.joaogb@icloud.com"
							buttonName="email"
							hoveredButton={hoveredButton}
				setHoveredButton={setHoveredButton}
						/>
						<SocialMediaButton
							label="Twitter"
							url="https://twitter.com/JoaoGBNasc"
							buttonName="twitter"
							hoveredButton={hoveredButton}
				setHoveredButton={setHoveredButton}
						/>
						<SocialMediaButton
							label="Github"
							url="https://github.com/nascimento-jgb"
							buttonName="github"
							hoveredButton={hoveredButton}
				setHoveredButton={setHoveredButton}
						/>
						<SocialMediaButton
							label="LinkedIn"
							url="https://www.linkedin.com/in/joaog-nascimento/"
							buttonName="linkedin"
							hoveredButton={hoveredButton}
				setHoveredButton={setHoveredButton}
						/>
						<SocialMediaButton
							label="Instagram"
							url="https://www.instagram.com/joaog.nascimento/"
							buttonName="instagram"
							hoveredButton={hoveredButton}
				setHoveredButton={setHoveredButton}
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
