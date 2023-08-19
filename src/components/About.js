import React from "react";
import AboutAnimation from "./AboutAnimation";
import Grid from "./Grid";
import Map from "./Map";
import Experience from "./Experience";
import TechStack from "./TechStack";

const About = () => {
	return (
	  <div className="bg-black">
			<AboutAnimation />
			<Grid />
			<Map />
			<Experience />
			<TechStack />
	  </div>
	);
  };

export default About;
