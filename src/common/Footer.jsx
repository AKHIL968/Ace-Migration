import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white relative overflow-hidden font-sans">
            {/* Decorative Top Border */}
            <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Column 1: Brand & About */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tighter">
                            ACE<span className="text-orange-500">.</span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Your trusted partner in migration and education services. We turn your global dreams into reality with expert guidance and personalized support.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {/* Social Icons */}
                            {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                                <a href="#" key={social} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 group">
                                    <span className="sr-only capitalize">{social}</span>
                                    {/* Icon placeholder - simple circles for now or use svg if desired */}
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Services', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to="/" className="text-gray-400 hover:text-orange-500 hover:translate-x-1 inline-flex transition-all duration-300 items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white">Our Services</h3>
                        <ul className="space-y-3">
                            {['Migration Visa', 'Education Counseling', 'Visitor Visa', 'Citizenship'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2">
                                        <svg className="w-3 h-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                        </svg>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white">Get In Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 text-gray-400">
                                <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center flex-shrink-0 text-orange-500">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="block text-white font-medium mb-1">Address</span>
                                    Level 1, 123 Business Hub, Sydney NSW 2000, Australia
                                </div>
                            </li>
                            <li className="flex items-start gap-4 text-gray-400">
                                <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center flex-shrink-0 text-orange-500">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="block text-white font-medium mb-1">Phone</span>
                                    +61 123 456 789
                                </div>
                            </li>
                            <li className="flex items-start gap-4 text-gray-400">
                                <div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center flex-shrink-0 text-orange-500">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="block text-white font-medium mb-1">Email</span>
                                    info@aceconsultancy.com
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 bg-gray-950/50">
                <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} <span className="text-white">ACE</span>. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-orange-500 transition-colors">Terms & Conditions</a>
                        <a href="#" className="hover:text-orange-500 transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>
        </footer>
    );
};

export default Footer;
