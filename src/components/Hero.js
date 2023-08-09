import React from 'react';
import { Div, Text, Image, Icon } from 'react-atomize';

const Hero = () => {
	return (
		<Div d="flex" flexDir="column" justify="center" align="center" h="80vh" bg="gray200">
			<Div d="flex" justify="center" align="center" w="960px" h="300px" bg="gray300" p="1rem">
				<Text textSize="display3" textAlign="center" textWeight="700" fontFamily="primary" fontSize="250px" letter-spacing="-2px">
					Developer and designer specialized in mobile
				</Text>
			</Div>
			<Div d="flex" justify="center" align="center" w="300px" h="51px" bg="gray400" p="1rem" m={{ t: "2rem" }}>

				<Icon name="add" color="black" size="20px" />
				<Text textSize="subtitle" textWeight="500" fontFamily="secondary">
					Powered by
				</Text>
				{/* <Img src="/public/hive.png" h="2rem" w="2rem" m={{ l: "0.5rem" }} /> */}

			</Div>
		</Div>
	);
};

export default Hero;
