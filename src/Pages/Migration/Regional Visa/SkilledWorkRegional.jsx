import React from 'react';
import heroBg from '../../../assets/Map-1024x614.png';

const SkilledWorkRegional = () => {
    return (
        <div className="pt-20 font-sans">
            {/* Hero Section */}
            <section className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Regional Australia Map"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gray-900/80"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/20 text-cyan-300 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-cyan-500/30 uppercase backdrop-blur-sm">
                        Subclass 491
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Skilled Work Regional (Provisional)
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Build Your Future in Regional Australia. A 5-year pathway combining professional opportunity with state backing or family support.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">

                    {/* Intro Card */}
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border-t-4 border-cyan-600 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50 rounded-bl-[100px] -z-0"></div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 relative z-10">Program Overview</h2>
                        <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                            This provisional visa enables qualified professionals and their households to establish themselves in Australia's designated regional zones for up to five years.
                            Upon meeting specific criteria during this period, holders become eligible to transition to permanent residence through the Subclass 191 route.
                        </p>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

                        {/* Key Benefits */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Primary Benefits</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">•</span>5-year validity period</li>
                                <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">•</span>Regional settlement and employment</li>
                                <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">•</span>Gateway to permanent status (191)</li>
                            </ul>
                        </div>

                        {/* Eligibility Criteria */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group">
                            <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-6 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Entry Requirements</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1">✓</span>State/territory or relative sponsorship</li>
                                <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1">✓</span>Minimum 65-point score</li>
                                <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1">✓</span>Favorable skills evaluation</li>
                                <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1">✓</span>English language competency</li>
                            </ul>
                        </div>

                        {/* Cost & Processing */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group">
                            <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-6 text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Fees & Timeframe</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2"><span className="font-semibold text-gray-900">Application Fee:</span> From AUD 4,045</li>
                                <li className="flex items-start gap-2"><span className="font-semibold text-gray-900">Processing:</span> Varies by application</li>
                                <li className="flex items-start gap-2 text-sm text-gray-500">Timeline influenced by documentation quality.</li>
                            </ul>
                        </div>

                        {/* Conditions */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group">
                            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Mandatory Obligations</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2"><span className="text-red-500 font-semibold">8579:</span> Regional area residence/work</li>
                                <li className="flex items-start gap-2"><span className="text-red-500 font-semibold">8578:</span> Update personal information</li>
                                <li className="flex items-start gap-2 text-sm text-gray-500">Regional living requirements strictly enforced.</li>
                            </ul>
                        </div>

                        {/* Family Inclusion */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group">
                            <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center mb-6 text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Accompanying Family</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">Dependents may be included</li>
                                <li className="flex items-start gap-2">Health and character verification needed</li>
                                <li className="flex items-start gap-2 text-sm text-gray-500">Dependents bound by same regional requirements.</li>
                            </ul>
                        </div>

                        {/* Where to Apply */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group">
                            <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Submission Options</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2"><span className="font-semibold">Available:</span> Domestic or international</li>
                                <li className="flex items-start gap-2"><span className="font-semibold">Prerequisite:</span> Invitation required</li>
                                <li className="flex items-start gap-2 text-sm text-gray-500">Bridging visas A/B/C for onshore applicants.</li>
                            </ul>
                        </div>

                    </div>

                    {/* CTA Section */}
                    <div className="mt-20 text-center">
                        <div className="bg-gradient-to-r from-cyan-900 to-blue-900 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl max-w-5xl mx-auto">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-12 translate-x-12"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl translate-y-12 -translate-x-12"></div>

                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Unlock Regional Australia Opportunities</h3>
                            <p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                                Maximize your points with territorial endorsement or family backing. Discover how regional migration can accelerate your Australian dream.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                                <button className="px-8 py-4 bg-cyan-600 text-white font-bold rounded-lg shadow-lg shadow-cyan-600/30 hover:bg-cyan-700 hover:shadow-cyan-600/50 hover:-translate-y-1 transition-all duration-300">
                                    Evaluate Your Score
                                </button>
                                <button className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300">
                                    Speak with Expert
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SkilledWorkRegional;