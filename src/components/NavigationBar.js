import React, {useState} from 'react';

function NavigationBar() {

	const [hoveredButton, setHoveredButton] = useState(null);

	const handleButtonHover = (buttonName) => {
	  setHoveredButton(buttonName);
	};

	return (
		<div className="bg-transparent p-12 flex justify-between items-center">
		  <h1 className="text-3xl font-medium font-sans-serif tracking-tighter font-GraphikSemiBold text-black ">
			João Nascimento
		  </h1>
		  <div className="flex gap-5 font-GraphikSemiBold font-medium text-base">
			<button
			  className={`  ${
				hoveredButton && hoveredButton !== 'about' ? 'text-gray-500' : 'text-black'
			  } p-2`}
			  onMouseEnter={() => handleButtonHover('about')}
			  onMouseLeave={() => setHoveredButton(null)}
			>
			  About
			</button>
			<button
			  className={` ${
				hoveredButton && hoveredButton !== 'work' ? 'text-gray-500' : 'text-black'
			  } p-2`}
			  onMouseEnter={() => handleButtonHover('work')}
			  onMouseLeave={() => setHoveredButton(null)}
			>
			  Work
			</button>
			<button
			  className={` ${
				hoveredButton && hoveredButton !== 'contact' ? 'text-gray-500' : 'text-black'
			  } p-2`}
			  onMouseEnter={() => handleButtonHover('contact')}
			  onMouseLeave={() => setHoveredButton(null)}
			>
			  Contact
			</button>
		  </div>
		</div>
	  );
};

export default NavigationBar;
