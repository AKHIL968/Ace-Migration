import React from 'react';
import heroBg from '../../../assets/world_map.png';

const CanadaBasics = () => {
    return (
        <div className="pt-20 font-sans">
            {/* Hero Section */}
            <section className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Canada Map"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-red-900/60 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-500/20 text-red-200 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-red-500/30 uppercase backdrop-blur-sm">
                        Study Overseas
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Study in Canada
                    </h1>
                    <p className="text-lg md:text-xl text-red-100 max-w-2xl mx-auto leading-relaxed">
                        Excellence in North American Education. High quality of life, affordable education, and welcoming multicultural cities.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">

                    {/* Intro Section */}
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Canada?</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Home to world-class cities like <span className="text-red-600 font-semibold">Montreal, Toronto, Vancouver</span>, and <span className="text-red-600 font-semibold">Ottawa</span>, Canada offers degrees recognized globally. With lower tuition fees than the US/UK and a commitment to innovation, it is a top choice for over 200,000 international students annually.
                        </p>
                    </div>

                    {/* Key Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20 animate-fade-in-up">
                        {/* Quality Education */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-red-600 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-6 text-red-600">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Top-Notch Universities</h3>
                            <p className="text-gray-600">
                                Degrees equivalent to US/European standards. Focus on innovation in IT, Engineering, and Telecommunications.
                            </p>
                        </div>

                        {/* Affordability */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-red-500 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-6 text-red-600">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Economical Choice</h3>
                            <p className="text-gray-600">
                                Lower tuition fees and cost of living compared to other major study destinations. Good value for money.
                            </p>
                        </div>

                        {/* Employment */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-red-400 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-6 text-red-600">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Post-Study Work</h3>
                            <p className="text-gray-600">
                                Excellent opportunities for employment after graduation. High employment rate for graduates.
                            </p>
                        </div>

                        {/* Safety */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-red-600 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-6 text-red-600">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Safe & Multicultural</h3>
                            <p className="text-gray-600">
                                A welcoming environment that respects diversity. High safety standards and inclusive communities.
                            </p>
                        </div>

                        {/* Landscapes */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-red-500 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-6 text-red-600">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Natural Beauty</h3>
                            <p className="text-gray-600">
                                From Niagara Falls to the Rocky Mountains. Explore diverse landscapes and outdoor activities.
                            </p>
                        </div>

                        {/* Scholarships */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-red-400 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-6 text-red-600">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Scholarships</h3>
                            <p className="text-gray-600">
                                Abundant opportunities for financial support through various scholarship programs.
                            </p>
                        </div>
                    </div>

                    {/* Process Section */}
                    <div className="bg-gradient-to-r from-red-800 to-red-900 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('/assets/pattern_bg.png')] opacity-10"></div>
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-3xl font-bold mb-6">Plan Your Journey</h3>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 bg-white text-red-700 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-lg">Admission</h4>
                                            <p className="text-red-100 text-sm">Submit academic documents and English proficiency certificate.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 bg-white text-red-700 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-lg">Financial Planning</h4>
                                            <p className="text-red-100 text-sm">Offer Letter, GIC (Guaranteed Investment Certificate) for living expenses.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 bg-white text-red-700 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-lg">Permits & PR</h4>
                                            <p className="text-red-100 text-sm">Study permit, Work permit, and guidance on pathways to Permanent Residency.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col justify-center items-center text-center">
                                <h4 className="text-2xl font-bold mb-4">Ready to Apply?</h4>
                                <p className="text-red-100 mb-8 max-w-sm">
                                    Our experts can guide you through the entire process, from university selection to visa application.
                                </p>
                                <button className="px-8 py-3 bg-white text-red-900 font-bold rounded-lg hover:bg-red-50 transition-colors shadow-lg">
                                    Start Free Consultation
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default CanadaBasics;
