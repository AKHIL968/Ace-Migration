import React from 'react';
import heroBg from '../../../assets/education.png';

const NZEducationSystem = () => {
    return (
        <div className="pt-20 font-sans">
            {/* Hero Section */}
            <section className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Education in New Zealand"
                        className="w-full h-full object-cover top-0"
                    />
                    <div className="absolute inset-0 bg-teal-900/60 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-teal-500/20 text-teal-100 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-teal-500/30 uppercase backdrop-blur-sm">
                        British-Based Model
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Education System in NZ
                    </h1>
                    <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed">
                        A world-class education system that combines theoretical knowledge with practical skills, recognized globally for its excellence.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">

                    {/* Intro Section */}
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">The New Zealand Advantage</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Steeped in British traditions, New Zealand's education system integrates <span className="text-teal-700 font-semibold">theoretical and practical learning</span> seamlessly. The New Zealand Qualifications Authority (NZQA) ensures that all institutions maintain rigorous academic and research standards.
                        </p>
                    </div>

                    {/* Institutions Grid */}
                    <div className="max-w-6xl mx-auto mb-20 animate-fade-in-up">
                        <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Types of Institutions</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Universities */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-teal-600 hover:-translate-y-1 transition-transform">
                                <div className="text-teal-600 mb-4">
                                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">8 Universities</h4>
                                <p className="text-gray-600 text-sm">State-funded, research-led universities offering globally respected degrees.</p>
                            </div>

                            {/* Polytechnics (ITPs) */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-indigo-600 hover:-translate-y-1 transition-transform">
                                <div className="text-indigo-600 mb-4">
                                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">16 ITPs</h4>
                                <p className="text-gray-600 text-sm">Institutes of Technology & Polytechnics providing vocational education.</p>
                            </div>

                            {/* Private Providers (PTEs) */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-teal-600 hover:-translate-y-1 transition-transform">
                                <div className="text-teal-600 mb-4">
                                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">550+ PTEs</h4>
                                <p className="text-gray-600 text-sm">Private Training Establishments offering specialized certificate/diploma courses.</p>
                            </div>
                        </div>
                    </div>

                    {/* NZQF Levels */}
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 mb-20">
                        <div className="bg-teal-900 text-white p-8">
                            <h4 className="text-2xl font-bold">New Zealand Qualifications Framework (NZQF)</h4>
                            <p className="text-teal-200 mt-2">Understanding qualification levels is key to your study path.</p>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {[
                                { level: "Level 1-4", title: "Certificates", desc: "Foundation skills and introductory vocational training." },
                                { level: "Level 5-6", title: "Diplomas", desc: "Advanced technical and theoretical knowledge in specific fields." },
                                { level: "Level 7", title: "Bachelor's Degree", desc: "Standard 3-year undergraduate degree." },
                                { level: "Level 7", title: "Graduate Diploma", desc: "1-year specialized course for degree holders." },
                                { level: "Level 8", title: "PG Diploma / Honours", desc: "Advanced specialization after a Bachelor's degree." },
                                { level: "Level 9", title: "Master's Degree", desc: "Advanced research and study in a specific discipline." },
                                { level: "Level 10", title: "Doctoral Degree", desc: "PhD - The highest academic qualification." }
                            ].map((item, index) => (
                                <div key={index} className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center hover:bg-gray-50 transition-colors">
                                    <div className="font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded w-fit">{item.level}</div>
                                    <div className="font-bold text-gray-900 md:col-span-1">{item.title}</div>
                                    <div className="text-gray-600 md:col-span-2">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Educational Hubs & CTA */}
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Hubs */}
                        <div className="lg:col-span-2 bg-indigo-50 rounded-2xl p-10 border border-indigo-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Preferred Educational Hubs</h3>
                            <p className="text-gray-700 mb-6">
                                The majority of international students flock to these vibrant cities, home to top universities and bustling student communities:
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {["Auckland", "Wellington", "Christchurch", "Hamilton", "Napier-Hastings"].map((city, i) => (
                                    <span key={i} className="px-4 py-2 bg-white rounded-full text-indigo-700 font-semibold shadow-sm border border-indigo-100">
                                        📍 {city}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-teal-600 rounded-2xl p-10 text-white flex flex-col justify-center text-center shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">Start Your Application</h3>
                            <p className="text-teal-100 mb-8 text-sm">
                                Not sure which level or institution suits you? Get expert advice from our counselors.
                            </p>
                            <button className="w-full py-3 bg-white text-teal-700 font-bold rounded-lg hover:bg-teal-50 transition-colors shadow-md">
                                Contact Us
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default NZEducationSystem;
