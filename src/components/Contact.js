import React, { useState, useEffect, useRef } from 'react';

const ContactForm = () => {
	const [showButton, setShowButton] = useState(true);
	const contactContentRef = useRef(null);

	const handleSendMessage = () => {
		const name = encodeURIComponent(document.getElementById('name').value);
		const email = encodeURIComponent(document.getElementById('email').value);
		const message = encodeURIComponent(document.getElementById('message').value);

		const subject = encodeURIComponent('Contact Form Submission');
		const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message.replace(/\n/g, '%0D%0A')}`;

		const mailtoLink = `mailto:your.email@example.com?subject=${subject}&body=${body}`;

		window.location.href = mailtoLink;
	}

	  const handleScroll = () => {
		if (!contactContentRef.current) return;

		const contentHeight = contactContentRef.current.clientHeight;
		const scrollPosition = window.scrollY || window.pageYOffset;

		const threshold = 15; // Pixels from the bottom

		setShowButton(scrollPosition < contentHeight - threshold);
	  };

	  useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
		  window.removeEventListener('scroll', handleScroll);
		};
	  }, []);

	  return (
		<div className='pt-28'>
		  <h1 className="text-4xl md:text-8xl font-sans-serif font-regular font-GilroyLight mb-4 text-center max-w-6xl mx-auto tracking-tighter mt-10 md:mt-44px md:mb-16">
			Let's get in touch
		  </h1>
		  <div ref={contactContentRef} className="flex flex-col items-center justify-center mt-8 md:mt-16 min-w-full">
			<div className="w-full md:w-1/2 mx-4 mb-4 mt-8 md:mt-16 pr-2 pl-2 md:pr-4 md:pl-4">
			  <label className="text-lg font-semibold font-GilroyLight font-sans-serif" htmlFor="name">
				What's your name?
			  </label>
			  <input
				id="name"
				type="text"
				className="border rounded p-2 md:p-5 mt-2 w-full font-GilroyLight font-sans-serif"
				placeholder="Your Name"
			  />
			</div>
			<div className="w-full md:w-1/2 mx-4 mb-4 mt-8 pr-2 pl-2 md:pr-4 md:pl-4">
			  <label className="text-lg font-semibold font-GilroyLight font-sans-serif" htmlFor="email">
				What's your email address?
			  </label>
			  <input
				id="email"
				type="email"
				className="border rounded p-2 md:p-5 mt-2 w-full font-GilroyLight font-sans-serif"
				placeholder="Your Email"
			  />
			</div>
			<div className="w-full md:w-1/2 mx-4 mb-4 mt-8 pr-2 pl-2 md:pr-4 md:pl-4">
			  <label className="text-lg font-semibold font-GilroyLight font-sans-serif" htmlFor="message">
				Your message:
			  </label>
			  <textarea
				id="message"
				className="border rounded p-2 md:p-5 mt-2 w-full resize-y font-sans-serif font-GilroyLight"
				placeholder="How can I help you?"
				rows="4"
			  />
			</div>
			<div className='flex justify-center mt-4 md:mt-8 mb-8 md:mb-16'>
				{showButton && (
				<button
					className="bg-black text-white py-2 md:py-3 px-4 md:px-6 font-semibold font-GilroyLight font-sans-serif hover:bg-gray-500 transition"
					onClick={handleSendMessage}
		 		 >
				Send Message
			  </button>
			  )}
			</div>
		  </div>
		</div>
	  );
	}
	export default ContactForm;
