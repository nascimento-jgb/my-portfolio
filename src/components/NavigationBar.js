import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
	setIsMenuOpen(!isMenuOpen);
  };

  return (
	<div className="bg-transparent p-4 md:p-12">
	  <div className="p-4 md:p-12 flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-white"
		   style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
		<Link
		  to="/"
		  className="text-2xl md:text-3xl font-medium font-sans-serif tracking-tighter font-GraphikSemiBold text-black hover:text-gray-500 pl-4"
		>
		  João Nascimento
		</Link>
		<div className="md:hidden">
		  <button
			onClick={toggleMenu}
			className="text-black p-2 focus:outline-none"
			style={{ fontSize: '24px' }}
		  >
			☰
		  </button>
		</div>
		<div className={`md:flex gap-5 font-GraphikSemiBold font-medium text-base pr-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
		  <Link
			to="/about"
			className="text-black p-2 md:p-0 block md:inline-block hover:text-gray-500"
		  >
			About
		  </Link>
		  <a
			href="https://github.com/nascimento-jgb"
			target="_blank"
			rel="noopener noreferrer"
			className="text-black p-2 md:p-0 block md:inline-block hover:text-gray-500"
		  >
			Work
		  </a>
		  <Link
			to="/contact"
			className="text-black p-2 md:p-0 block md:inline-block hover:text-gray-500"
		  >
			Contact
		  </Link>
		</div>
	  </div>
	</div>
  );
}

export default NavigationBar;
