import React from 'react';
import heroBg from '../../../assets/world_map.png';

const UKBasics = () => {
    return (
        <div className="pt-20 font-sans">
            {/* Hero Section */}
            <section className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="United Kingdom Map"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-600/20 text-red-300 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-red-500/30 uppercase backdrop-blur-sm">
                        Study Overseas
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Study in the UK
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Unlock your future in a world-renowned educational destination. Home to prestigious universities and a multicultural student community.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">

                    {/* Intro Section */}
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">A Pinnacle of Academic Excellence</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            The United Kingdom attracts the best minds globally, offering exceptional programs in science, engineering, business, and law. With over <span className="text-blue-700 font-bold">600,000 international students</span>, the UK provides a vibrant, multicultural environment for academic growth.
                        </p>
                    </div>

                    {/* Why Choose UK Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20 animate-fade-in-up">
                        {/* Quality Education */}
                        <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border-t-4 border-blue-600">
                            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">World-Class Education</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Home to Oxford and Cambridge, UK institutions are renowned for their outstanding faculty, modern learning methods, and globally recognized degrees.
                            </p>
                        </div>

                        {/* Shorter Duration */}
                        <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border-t-4 border-red-600">
                            <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6 text-red-600">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Shorter Courses</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Complete your degree faster with 3-year Bachelor's and 1-year Master's programs, saving both time and tuition costs compared to other countries.
                            </p>
                        </div>

                        {/* Post Study Work */}
                        <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border-t-4 border-blue-600">
                            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Work Opportunities</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Benefit from the 2-year Graduate Route visa (PSW) to work in the UK after completing your degree and kickstart your international career.
                            </p>
                        </div>
                    </div>

                    {/* Additional Benefits Section */}
                    <div className="bg-blue-900 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('/assets/pattern_bg.png')] opacity-10 mix-blend-overlay"></div>
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold mb-6">Why Students Choose UK?</h3>
                                <ul className="space-y-6">
                                    <li className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shrink-0 font-bold">1</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Earn While You Learn</h4>
                                            <p className="text-blue-200 text-sm">Work part-time up to 20 hours per week during term time and full-time during holidays.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shrink-0 font-bold">2</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Health & Support</h4>
                                            <p className="text-blue-200 text-sm">Access to the National Health Service (NHS) and extensive student support services.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shrink-0 font-bold">3</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Flexible Entry</h4>
                                            <p className="text-blue-200 text-sm">Opportunities to apply without IELTS if you meet specific academic criteria (e.g., Year 12 English scores).</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                                <h4 className="text-2xl font-bold mb-4">Start Your Journey</h4>
                                <p className="text-gray-200 mb-8">
                                    From university selection to visa filing, our team of experts provides end-to-end guidance for your UK education aspirations.
                                </p>
                                <div className="flex flex-col gap-3">
                                    <button className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg transition-colors shadow-lg">
                                        Check Eligibility
                                    </button>
                                    <button className="w-full py-3 bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold rounded-lg transition-colors">
                                        Contact Counselors
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

export default UKBasics;
