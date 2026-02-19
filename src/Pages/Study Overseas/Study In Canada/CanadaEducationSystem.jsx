import React from 'react';
import heroBg from '../../../assets/education.png';

const CanadaEducationSystem = () => {
    return (
        <div className="pt-20 font-sans">
            {/* Hero Section */}
            <section className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Education in Canada"
                        className="w-full h-full object-cover top-0"
                    />
                    <div className="absolute inset-0 bg-red-900/60 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-500/20 text-red-100 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-red-500/30 uppercase backdrop-blur-sm">
                        Academic Excellence
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Education System in Canada
                    </h1>
                    <p className="text-lg md:text-xl text-red-100 max-w-2xl mx-auto leading-relaxed">
                        An internationally respected framework delivering rigorous standards, comprehensive offerings, and career-ready preparation.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">

                    {/* Intro Section */}
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Regional Governance Structure</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Canada operates without a centralized education ministry. Each province and territory administers its own academic framework, guaranteeing <span className="text-red-700 font-semibold">consistent quality</span> across government-funded and independent institutions nationwide.
                        </p>
                    </div>

                    {/* Education Levels Grid */}
                    <div className="max-w-6xl mx-auto mb-20 animate-fade-in-up">
                        <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Academic Progression</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Primary */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-red-500 hover:-translate-y-1 transition-transform">
                                <div className="text-red-100 mb-4">
                                    <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Elementary Level</h4>
                                <p className="text-gray-600 text-sm">Commences at age 5 with kindergarten, continuing 7-8 years to establish fundamental learning.</p>
                            </div>

                            {/* Secondary */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-blue-900 hover:-translate-y-1 transition-transform">
                                <div className="text-blue-100 mb-4">
                                    <svg className="w-12 h-12 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Middle & High School</h4>
                                <p className="text-gray-600 text-sm">Beginning ages 12-13 for 3-4 years, followed by senior secondary spanning 2 additional years.</p>
                            </div>

                            {/* Tertiary */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-red-500 hover:-translate-y-1 transition-transform">
                                <div className="text-red-100 mb-4">
                                    <svg className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Post-Secondary</h4>
                                <p className="text-gray-600 text-sm">Encompasses degree-granting institutions, polytechnics, and professional training programs.</p>
                            </div>
                        </div>
                    </div>

                    {/* Study Options Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-20">
                        {/* VET Info */}
                        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="bg-blue-900 text-white w-8 h-8 rounded flex items-center justify-center text-sm">V</span>
                                Professional Training (VET)
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Designed for new graduates or individuals transitioning careers, these programs emphasize hands-on competencies and industry-specific expertise. They provide direct routes to workforce entry.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-blue-500">●</span> Adaptable learning schedules
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-blue-500">●</span> Strengthen current abilities
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-blue-500">●</span> Wide array of disciplines
                                </li>
                            </ul>
                        </div>

                        {/* Foundation Info */}
                        <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="bg-red-600 text-white w-8 h-8 rounded flex items-center justify-center text-sm">F</span>
                                Preparatory Programs
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Students requiring prerequisite preparation before degree enrollment benefit from these one-year bridging programs, which build essential skills for tertiary-level achievement.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-red-500">●</span> Boost academic readiness
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-red-500">●</span> Conditional admission routes available
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                    <span className="text-red-500">●</span> Combined academic and language development
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Credentials Table */}
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 mb-20">
                        <div className="bg-gray-900 text-white p-6">
                            <h4 className="text-xl font-bold">Available Qualifications</h4>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {[
                                { credential: "Certificate", duration: "1 Year", desc: "Basic competencies or targeted vocational instruction." },
                                { credential: "Diploma", duration: "1-2 Years", desc: "Focused technical or conceptual understanding." },
                                { credential: "Advanced Diploma", duration: "2-3 Years", desc: "Extended professional concentration." },
                                { credential: "Bachelor's Degree", duration: "4 Years", desc: "First-level university qualification." },
                                { credential: "Post-Graduate Diploma", duration: "1-2 Years", desc: "Advanced focus following degree completion." },
                                { credential: "Master's Degree", duration: "1-2 Years", desc: "Graduate-level scholarly or applied programs." },
                                { credential: "Doctorate / PhD", duration: "4-7 Years", desc: "Terminal research qualification." }
                            ].map((item, index) => (
                                <div key={index} className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 hover:bg-gray-50 transition-colors">
                                    <div className="font-bold text-red-700">{item.credential}</div>
                                    <div className="text-sm font-semibold text-gray-600 md:text-center bg-gray-100 md:bg-transparent rounded px-2 w-fit md:w-auto">{item.duration}</div>
                                    <div className="text-sm text-gray-500">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-gradient-to-r from-blue-900 to-gray-900 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full blur-3xl translate-x-12 -translate-y-12"></div>
                        <h3 className="text-3xl font-bold text-white mb-6 relative z-10">Discover Your Ideal Path</h3>
                        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                            Selecting appropriate programs and schools requires expertise. Our education advisors provide personalized guidance through these decisions.
                        </p>
                        <button className="px-8 py-4 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition-all hover:-translate-y-1 relative z-10">
                            View Programs
                        </button>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default CanadaEducationSystem;