import React from 'react';
import heroBg from '../../../assets/slider2.jpg';

const NZBasics = () => {
    return (
        <div className="pt-20 font-sans">
            {/* Hero Section */}
            <section className="relative bg-black py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="New Zealand Landscape"
                        className="w-full h-full object-cover top-0 opacity-60"
                    />
                    <div className="absolute inset-0 bg-teal-900/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-teal-500/20 text-teal-300 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-teal-500/30 uppercase backdrop-blur-sm">
                        Study Overseas
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Study in New Zealand
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Unleash your future potential in a country renowned for world-class education, innovation, and breathtaking landscapes.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">

                    {/* Intro Section */}
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">A Land of Opportunity</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            New Zealand is a melting pot of cultures, offering a safe and welcoming environment for international students. Beyond its picturesque setting, it fosters cultural exchange and provides top-notch education that is recognized globally.
                        </p>
                    </div>

                    {/* Educational Landscape Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20 animate-fade-in-up">
                        {/* Universities */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                            <div className="h-2 bg-teal-600"></div>
                            <div className="p-8">
                                <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-6 text-teal-600">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">8 State-Funded Universities</h3>
                                <p className="text-gray-600">
                                    All ranked in the QS World University Rankings, offering research-led teaching and globally recognized degrees.
                                </p>
                            </div>
                        </div>

                        {/* ITPs */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                            <div className="h-2 bg-gray-800"></div>
                            <div className="p-8">
                                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-800">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">16 Institutes of Technology</h3>
                                <p className="text-gray-600">
                                    Provide vocational and professional education with a focus on practical skills and industry experience.
                                </p>
                            </div>
                        </div>

                        {/* PTEs */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                            <div className="h-2 bg-teal-600"></div>
                            <div className="p-8">
                                <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-6 text-teal-600">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">550+ Private Training Establishments</h3>
                                <p className="text-gray-600">
                                    Offer specialized courses in specific fields like aviation, design, tourism, and hospitality.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Key Highlights Section */}
                    <div className="bg-teal-900 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('/assets/pattern_bg.png')] opacity-10 mix-blend-overlay"></div>
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold mb-6">Why New Zealand?</h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <span className="text-teal-400 font-bold text-xl">✓</span>
                                        <div>
                                            <h4 className="font-bold text-lg">Inclusivity & Safety</h4>
                                            <p className="text-teal-100 text-sm">ranked as one of the safest and most peaceful countries in the world.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-teal-400 font-bold text-xl">✓</span>
                                        <div>
                                            <h4 className="font-bold text-lg">Post-Study Work</h4>
                                            <p className="text-teal-100 text-sm">Up to 3 years of post-study work rights depending on your qualification.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-teal-400 font-bold text-xl">✓</span>
                                        <div>
                                            <h4 className="font-bold text-lg">Work While You Study</h4>
                                            <p className="text-teal-100 text-sm">Work part-time (20 hours/week) during semesters and full-time during breaks.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                                <h4 className="text-2xl font-bold mb-4">Start Your Journey</h4>
                                <p className="text-gray-200 mb-8">
                                    Immigration New Zealand assesses students based on academic history, English proficiency (IELTS), and financial capacity. We help you build the perfect profile.
                                </p>
                                <div className="flex flex-col gap-3">
                                    <button className="w-full py-3 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-lg transition-colors">
                                        Free Assessment
                                    </button>
                                    <button className="w-full py-3 bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold rounded-lg transition-colors">
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default NZBasics;
