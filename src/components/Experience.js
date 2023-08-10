import React from "react";
import { Link } from "react-router-dom";

const Experience = () => {
	const courses = [
		"Imperative Programming in C",
		"Object-Oriented Programming in C++",
		"Data Structures & Algorithms",
		"Concurrent Programming",
		"Network Programming",
		"Networks and Systems Administration",
		"Graphics Programming",
		"Full-Stack and Web Development",
	];

	return (
		<div className="bg-black relative overflow-hidden pt-10">
			<h1
				className="mt-10 font-sans-serif font-bold font-GilroyBold text-white"
				style={{ fontSize: "260px", zIndex: 10, position: "absolute", left: "15%", opacity: "0.1" }}
			>
				Experience
			</h1>
			<div className="p-32 tracking-wide">
				<div
					className="text-white font-sans-serif font-bold font-GilroyBold pt-56"
					style={{ fontSize: "35px", zIndex: 20, paddingLeft: "15%", paddingRight: "5%" }}
				>
					Hive Helsinki - {" "}
					<span className="text-gray-400">Software Development</span>
				</div>
				<div className="text-gray-400 font-sans-serif font-semibold font-GilroyBold p-4"
					style={{ fontSize: "25px", zIndex: 20, paddingLeft: "15%", paddingRight: "5%" }}>
					2022 - present
				</div>
				<div className="flex flex-col md:flex-row w-full text-white font-regular font-sans-serif font-GilroyLight leading-relaxed tracking-wide p-4"
					style={{ fontSize: "20px", zIndex: 20, paddingLeft: "15%", paddingRight: "5%" }}
					>
					<div className="w-full md:w-1/2 tracking-wide">
						{courses.slice(0, Math.ceil(courses.length / 2)).map((course, index) => (
							<div key={index} className="mb-4">
								{course}
							</div>
						))}
					</div>
					<div className="w-full md:w-1/2 tracking-wide">
						{courses.slice(Math.ceil(courses.length / 2)).map((course, index) => (
							<div key={index} className="mb-4">
								{course}
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='w-96 mx-auto mr-20 pt-[-10] pb-16'>
					<Link
					 to="https://www.linkedin.com/in/joaog-nascimento/"
					 target="_blank"
					 className="bg-gray-500 text-white py-4 px-8 font-semibold font-GilroyBold font-sans-serif hover:bg-gray-600 transition">
						LinkedIn for details
					</Link>
			</div>
		</div>
	);
};

export default Experience;


