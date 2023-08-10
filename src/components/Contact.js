import React from 'react';

const ContactForm = () => {
	return (
		<div className='pt-28'>
			<h1 className="text-8xl font-sans-serif font-regular font-GilroyLight mb-4 text-center max-w-6xl mx-auto tracking-tighter mt-44px mb-150px">
				Let's get in touch
			</h1>
			<div className="flex flex-col items-center justify-center mt-16 min-w-full">
				<div className="w-96 mx-4 mb-4 mt-16 min-w-full pr-96 pl-96">
					<label className="text-lg font-semibold font-GilroyLight font-sans-serif" htmlFor="name">
						What's your name?
					</label>
					<input
						id="name"
						type="text"
						className="border rounded p-4 mt-2 w-full font-GilroyLight font-sans-serif"
						placeholder="Your Name"
					/>
				</div>
				<div className="w-96 mx-4 mb-4 mt-8 min-w-full pr-96 pl-96">
					<label className="text-lg font-semibold font-GilroyLight font-sans-serif" htmlFor="email">
						What's your email address?
					</label>
					<input
						id="email"
						type="email"
						className="border rounded p-4 mt-2 w-full font-GilroyLight font-sans-serif"
						placeholder="Your Email"
					/>
				</div>
				<div className="w-96 mx-4 mb-4 mt-8 min-w-full pr-96 pl-96">
					<label className="text-lg font-semibold font-GilroyLight font-sans-serif" htmlFor="message">
						Your message:
					</label>
					<textarea
						id="message"
						className="border rounded p-4 mt-2 w-full resize-y font-sans-serif font-GilroyLight"
						placeholder="How can I help you?"
						rows="4"
					/>
				</div>
				<div className='w-96 mx-auto mr-44'>
					<button className="bg-black text-white py-4 px-8 font-semibold font-GilroyLight font-sans-serif hover:bg-gray-500 transition mt-8 mb-24">
						Send Message
					</button>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;

