import React from 'react';
import { ThemeProvider, DefaultTheme, StyleReset, Div, Button, Text, Icon } from 'react-atomize';
import Header from './components/Header';

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		brand800: '#671de1',
	},
	rounded: {
		...DefaultTheme.rounded,
		brandRadius: '20px',
	},
	typography: {
		textSize: {
			heading: '24px',
			subheader: '18px',
		},
	},
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<StyleReset />
			<Header theme={theme} />
			<Div>
				<Button>Click Me</Button>
				<Text textColor="brand800">Hello, Atomize!</Text>
				<Icon name="User" size="20px" />
			</Div>
		</ThemeProvider>
	);
}

export default App;
