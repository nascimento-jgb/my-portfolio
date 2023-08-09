import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
	const [hoveredButton, setHoveredButton] = useState(null);

	const handleButtonHover = (buttonName) => {
	  setHoveredButton(buttonName);
	};

	return (
		<div className="bg-transparent p-12">
			<div className="p-10 flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-white">
				<Link
				 to="/"
				 className="text-3xl font-medium font-sans-serif tracking-tighter font-GraphikSemiBold text-black">
					João Nascimento
				</Link>
				<div className="flex gap-5 font-GraphikSemiBold font-medium text-base">
					<button
						className={`${
							hoveredButton && hoveredButton !== 'about' ? 'text-gray-500' : 'text-black'
						} p-2`}
						onMouseEnter={() => handleButtonHover('about')}
						onMouseLeave={() => setHoveredButton(null)}
					>
						About
					</button>
					<button
						className={`${
							hoveredButton && hoveredButton !== 'work' ? 'text-gray-500' : 'text-black'
						} p-2`}
						onMouseEnter={() => handleButtonHover('work')}
						onMouseLeave={() => setHoveredButton(null)}
					>
						Work
					</button>
					<Link
						to="/contact"
						className={`${
							hoveredButton && hoveredButton !== 'contact' ? 'text-gray-500' : 'text-black'
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

export default NavigationBar;

