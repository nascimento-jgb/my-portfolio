import React, { useState } from 'react';
import { Div, Text, Button} from 'react-atomize';

const Header = () => {

	const [hoveredButton, setHoveredButton] = useState(null);

  	const handleButtonHover = (buttonName) => {
    	setHoveredButton(buttonName);
  };

	return (
		<Div p="4rem 2rem" bg="transparent" d="flex" justify="space-between" align="center">
			<Text textSize="title" textColor="black" textWeight="700" fontFamily="ternary" fontSize="45px">
				João Nascimento
			</Text>
			<Div d="flex" gap="5rem" >
				<Button
					bg="transparent"
					textSize="body"
					textColor={hoveredButton && hoveredButton !== 'about' ? 'gray500' : 'black'}
					p="1rem"
					onMouseEnter={() => handleButtonHover('about')}
					onMouseLeave={() => setHoveredButton(null)}
					transition>
				About
				</Button>
				<Button
					bg="transparent"
					textSize="body"
					textColor={hoveredButton && hoveredButton !== 'work' ? 'gray500' : 'black'}
					p="1rem"
					onMouseEnter={() => handleButtonHover('work')}
					onMouseLeave={() => setHoveredButton(null)}
					transition>
				Work
				</Button>
				<Button
					bg="transparent"
					textSize="body"
					textColor={hoveredButton && hoveredButton !== 'contact' ? 'gray500' : 'black'}
					p="1rem"
					onMouseEnter={() => handleButtonHover('contact')}
					onMouseLeave={() => setHoveredButton(null)}
					transition>
				Contact
				</Button>
		</Div>
		</Div>
	);
};

export default Header;
