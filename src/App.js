import React from 'react'
import NavigationBar from './components/NavigationBar';
import NavigationBarDM from './components/NavigationBarDM';
import Hero from './components/Hero';
import Footer from './components/Footer';
import FooterDM from './components/FooterDM';
import Contact from './components/Contact'
import About from './components/About';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

function getNavigationBar(routePath) {
	if (routePath === '/about') {
	  return <NavigationBarDM />;
	} else {
	  return <NavigationBar />;
	}
  }

function getFooter(routePath) {
	if (routePath === '/' || routePath === '/contact') {
	  return <Footer />;
	} else if (routePath === '/about') {
	  return <FooterDM />;
	}
}

// function App() {
// 	// const location = useLocation()
// 	return (
// 	<Router>
// 		<div>
// 			{getNavigationBar(useLocation().pathname)}
// 			<ScrollToTop />
// 				<Routes>
// 					<Route path="/" element={<Hero />} />
// 					<Route path="/about" element={<About />} />
// 					<Route path="/contact" element={<Contact />} />
// 					{/* Other routes go here */}
// 				</Routes>
// 			{getFooter(useLocation().pathname)}
// 		</div>
// 	</Router>
// 	);
// }

function MainContent() {
	const location = useLocation();

	return (
	  <div>
		{getNavigationBar(location.pathname)}
		<ScrollToTop />
		<Routes>
		  <Route path="/" element={<Hero />} />
		  <Route path="/about" element={<About />} />
		  <Route path="/contact" element={<Contact />} />
		  {/* Other routes go here */}
		</Routes>
		{getFooter(location.pathname)}
	  </div>
	);
  }

function App() {
	return (
	  <Router>
		<MainContent />
	  </Router>
	);
  }

export default App;
