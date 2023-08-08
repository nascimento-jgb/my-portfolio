import React from 'react';
import { Div, Text, Button } from 'react-atomize';

const Header = ({ theme }) => {
	return (
		<Div p="2rem" bg={theme.colors.brand800} d="flex" justify="space-between" align="center">
			<Text textSize={theme.typography.textSize.heading} textColor="white" textWeight="800">
				Your Name
			</Text>
			<Div d="flex" gap="1rem">
				<Button textSize={theme.typography.textSize.subheader} textColor="white">
					Home
				</Button>
				<Button textSize={theme.typography.textSize.subheader} textColor="white">
					About
				</Button>
				<Button textSize={theme.typography.textSize.subheader} textColor="white">
					Portfolio
				</Button>
				<Button textSize={theme.typography.textSize.subheader} textColor="white">
					Contact
				</Button>
			</Div>
		</Div>
	);
};

export default Header;
