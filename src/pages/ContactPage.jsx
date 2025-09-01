import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'; // Import necessary icons

const ContactPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 antialiased">
           

            <div className="max-w-6xl w-full bg-white shadow-lg rounded-xl overflow-hidden md:flex mt-16 md:mt-0"> {/* Added mt-16 for navbar spacing */}

                {/* Left Section: Contact Form */}
                <div className="md:w-1/2 p-8 md:p-12 lg:p-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Let's Connect and Innovate Together.
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Have a project in mind, a question, or just want to say hello? Fill out the form below, and we'll get back to you promptly.
                    </p>

                    <form action="contact.php" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                id="full-name"
                                name="full-name"
                                autoComplete="name"
                                required
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input
                                id="email-address"
                                name="email-address"
                                type="email"
                                autoComplete="email"
                                required
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
                            <input
                                id="phone-number"
                                name="phone-number"
                                type="tel"
                                autoComplete="tel"
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="+1 (555) 123-4567"
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Project Inquiry, Support, etc."
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Tell us more about your needs..."
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Section: Contact Info & Illustration */}
                <div className="md:w-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-between">
                    <div>
                        <h3 className="text-3xl font-bold mb-4">Our Global Hubs</h3>
                        <p className="text-indigo-100 text-lg mb-8">
                            Find us at our main offices, or reach out digitally from anywhere in the world.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start p-4 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm text-white border-l-4 border-indigo-200 shadow-md">
                                <FaMapMarkerAlt className="h-8 w-8 text-indigo-200 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-xl mb-1">Headquarters</h4>
                                    <p className="text-indigo-100">MacTech Global Ventures</p>
                                    <p className="text-indigo-100">Sheffield, UK</p>
                                </div>
                            </div>
                            <div className="flex items-start p-4 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm text-white border-l-4 border-indigo-200 shadow-md">
                                <FaEnvelope className="h-8 w-8 text-indigo-200 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-xl mb-1">Email Us</h4>
                                    <p className="text-indigo-100">info@mactechglobal.co.uk</p>
                                    <p className="text-indigo-100">support@mactechglobal.co.uk</p>
                                </div>
                            </div>
                            {/* <div className="flex items-start p-4 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm text-white border-l-4 border-indigo-200 shadow-md">
                                <FaPhoneAlt className="h-8 w-8 text-indigo-200 mr-4 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-xl mb-1">Call Us</h4>
                                    <p className="text-indigo-100">+1 (555) 012-3456 (Sales)</p>
                                    <p className="text-indigo-100">+1 (555) 987-6543 (Support)</p>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* Footer Social Links (Optional) */}
                    <div className="mt-10 text-center">
                        <p className="text-indigo-200 mb-4">Connect with us on social media!</p>
                        <div className="flex justify-center space-x-6">
                            <a href="#" className="text-indigo-200 hover:text-white transition duration-300">
                                <FaFacebook className="h-7 w-7" />
                            </a>
                            <a href="#" className="text-indigo-200 hover:text-white transition duration-300">
                                <FaTwitter className="h-7 w-7" />
                            </a>
                            <a href="#" className="text-indigo-200 hover:text-white transition duration-300">
                                <FaGithub className="h-7 w-7" /> {/* Changed to GitHub as an example, adjust as needed */}
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactPage;