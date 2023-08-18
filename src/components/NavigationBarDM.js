import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavigationBarDM() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [hoveredButton, setHoveredButton] = useState(null);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleButtonHover = (buttonName) => {
		setHoveredButton(buttonName);
	};

	return (
		<div className="bg-black p-4 md:p-12">
			<div
				className="p-4 md:p-12 flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-black"
				style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
			>
				<Link
					to="/"
					className="text-2xl md:text-3xl font-medium font-sans-serif tracking-tighter font-GraphikSemiBold text-white hover:text-gray-400 pl-4"
				>
					João Nascimento
				</Link>
				<div className="md:hidden">
					<button
						onClick={toggleMenu}
						className="burger-button text-white p-2 focus:outline-none"
						style={{ fontSize: '24px' }}
					>
						☰
					</button>
				</div>
				<div
					className={`md:flex gap-5 font-GraphikSemiBold font-medium text-base pr-6 ${
						isMenuOpen ? 'block' : 'hidden'
					}`}
				>
					<Link
						to="/about"
						className={`${
							hoveredButton && hoveredButton !== 'about' ? 'text-gray-400' : 'text-white'
						} p-2 md:p-0 block md:inline-block hover:text-gray-400`}
						onMouseEnter={() => handleButtonHover('about')}
						onMouseLeave={() => setHoveredButton(null)}
					>
						About
					</Link>
					<a
						href="https://github.com/nascimento-jgb"
						target="_blank"
						rel="noopener noreferrer"
						className={`${
							hoveredButton && hoveredButton !== 'work' ? 'text-gray-400' : 'text-white'
						} p-2 md:p-0 block md:inline-block hover:text-gray-400`}
						onMouseEnter={() => handleButtonHover('work')}
						onMouseLeave={() => setHoveredButton(null)}
					>
						Work
					</a>
					<Link
						to="/contact"
						className={`${
							hoveredButton && hoveredButton !== 'contact' ? 'text-gray-400' : 'text-white'
						} p-2 md:p-0 block md:inline-block hover:text-gray-400`}
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
