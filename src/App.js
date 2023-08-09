import React from 'react'
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Contact from './components/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './index.css';


function App() {
	return (
	<Router>
		<div>
			<NavigationBar />
			<ScrollToTop />
				<Routes>
					<Route path="/contact" element={<Contact />} />
					<Route path="/" element={<Hero />} />
					{/* Other routes go here */}
				</Routes>
			{/* <Hero /> */}
			<Footer />
		</div>
	</Router>
	);
}

export default App;
