import React from 'react';
import NavigationBar from './NavigationBar';

const ContactForm = () => {
	return (
		<div>
			<NavigationBar />
			<h1 className="text-8xl font-sans-serif font-regular font-GilroyLight mb-6 text-center max-w-6xl mx-auto tracking-tighter mt-150px">
				Let's get in touch
			</h1>
			<div className="flex flex-col items-center justify-center mt-10">
				<div className="w-80 p-4 mb-4">
					<label className="text-lg font-semibold font-sans-serif" htmlFor="name">
						What's your name?
					</label>
					<input
						id="name"
						type="text"
						className="w-full border rounded p-2 mt-1"
						placeholder="Your Name"
					/>
				</div>
				<div className="w-80 p-4 mb-4">
					<label className="text-lg font-semibold font-sans-serif" htmlFor="email">
						What's your email address?
					</label>
					<input
						id="email"
						type="email"
						className="w-full border rounded p-2 mt-1"
						placeholder="Your Email"
					/>
				</div>
				<div className="w-80 p-4 mb-4">
					<label className="text-lg font-semibold font-sans-serif" htmlFor="message">
						Your message
					</label>
					<textarea
						id="message"
						className="w-full border rounded p-2 mt-1"
						placeholder="Your Message"
						rows="4"
					/>
				</div>
				<button className="bg-gray-600 text-white py-2 px-4 rounded-full text-base font-medium font-sans-serif hover:bg-gray-700 transition">
					Send Message
				</button>
			</div>
		</div>
	);
};

export default ContactForm;
