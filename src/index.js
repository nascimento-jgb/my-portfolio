import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header"
import Hero from "./components/Hero"
import {
	ThemeProvider,
	DefaultTheme,
	StyleReset,
	Div,
	Button,
	Text,
	Icon
} from "react-atomize";
import "./index.css"

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		brand800: "#671de1"
	},
	rounded: {
		...DefaultTheme.rounded,
		brandRadius: "20px"
	},
	fontFamily: {
		primary: "'Gilroy-ExtraBold', serif",
		secondary: "'GraphikSemiBold', serif",
		ternary: "'GraphikBold', serif",
		quarternary: "'GraphikRegular, serif'",

	},
	shadows: {
		"new-shadow": "0 16px 24px -2px rgba(0, 0, 0, 0.08)"
	}
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<StyleReset/>
				<Div d="flex" flexDir="column">
					<Header />
					<Hero />
				</Div>
		</ThemeProvider>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
