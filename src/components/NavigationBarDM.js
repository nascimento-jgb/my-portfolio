import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavigationBarDM() {
	const [hoveredButton, setHoveredButton] = useState(null);

	const handleButtonHover = (buttonName) => {
	  setHoveredButton(buttonName);
	};

	return (
		<div className="bg-black p-12">
			<div className="p-12 flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-black">
				<Link
				 to="/"
				 className="text-3xl font-medium font-sans-serif tracking-tighter font-GraphikSemiBold text-white hover:text-gray-400 pl-4">
					João Nascimento
				</Link>
				<div className="flex gap-5 font-GraphikSemiBold font-medium text-base pr-6">
					<Link
						to="/about"
						className={`${
							hoveredButton && hoveredButton !== 'about' ? 'text-gray-400' : 'text-white'
						} p-2`}
						onMouseEnter={() => handleButtonHover('about')}
						onMouseLeave={() => setHoveredButton(null)}
					>
						About
					</Link>
					<Link
						to="https://github.com/nascimento-jgb"
						target="_blank"
						className={`${
							hoveredButton && hoveredButton !== 'work' ? 'text-gray-400' : 'text-white'
						} p-2`}
						onMouseEnter={() => handleButtonHover('work')}
						onMouseLeave={() => setHoveredButton(null)}
					>
						Work
					</Link>
					<Link
						to="/contact"
						className={`${
							hoveredButton && hoveredButton !== 'contact' ? 'text-gray-400' : 'text-white'
						} p-2`}
						onMouseEnter={() => handleButtonHover('contact')}
						onMouseLeave={() => setHoveredButton(null)}
					>
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
}

export default NavigationBarDM;

