import React from 'react';
import heroBg from '../../../assets/graduate_hero_bg.png';

const TemporaryStudy = () => {
    return (
        <div className="pt-20 font-sans">
            {/* Hero Section */}
            <section className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Graduate Students in Australia"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gray-900/80"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-blue-500/30 uppercase backdrop-blur-sm">
                        Subclass 485
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Temporary Graduate Visa
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Transform your Australian education into career success. Designed for international graduates ready to gain valuable work experience.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">

                    {/* Intro Card */}
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border-t-4 border-orange-500 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-[100px] -z-0"></div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 relative z-10">What You Need to Know</h2>
                        <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                            The Temporary Graduate visa provides international students who have completed their Australian qualifications
                            with an opportunity to gain practical work experience. This visa serves as an important stepping stone,
                            allowing you to apply your newly acquired skills in the Australian workforce.
                        </p>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

                        {/* Key Details */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Visa Highlights</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span>Validity period ranges from 18 months to 5 years</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span>No limit on entry frequency</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span>Option to include family members</li>
                            </ul>
                        </div>

                        {/* Eligibility */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group">
                            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Who Can Apply</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span>Age requirement: Below 50 years</li>
                                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span>Hold a qualification from the skilled list</li>
                                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span>Demonstrate relevant competencies</li>
                                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span>Pass health and character checks</li>
                            </ul>
                        </div>

                        {/* Cost */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group">
                            <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-6 text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Investment Required</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2"><span className="font-semibold text-gray-900">Main Applicant:</span> AUD 1,650</li>
                                <li className="flex items-start gap-2"><span className="text-gray-400 text-sm">Family member fees vary. Rates are subject to government updates.</span></li>
                            </ul>
                        </div>

                        {/* Duration & Travel */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group">
                            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-6 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Stay & Movement</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">Standard grant period: 18 months</li>
                                <li className="flex items-start gap-2">Freedom to travel without restrictions</li>
                                <li className="flex items-start gap-2">Re-entry permitted anytime during validity</li>
                            </ul>
                        </div>

                        {/* Family & Conditions */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group">
                            <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center mb-6 text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Bringing Your Family</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">Dependents can accompany you</li>
                                <li className="flex items-start gap-2">Spouse and dependent children eligible</li>
                                <li className="flex items-start gap-2 text-sm text-gray-500">Health coverage is compulsory under visa condition 8501.</li>
                            </ul>
                        </div>

                        {/* Application Process */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group">
                            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Lodgement Details</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">Submit application onshore</li>
                                <li className="flex items-start gap-2">Expected processing: 5-6 months</li>
                                <li className="flex items-start gap-2 text-sm text-gray-500">Complete documentation helps expedite the process.</li>
                            </ul>
                        </div>

                    </div>

                    {/* CTA Section */}
                    <div className="mt-20 text-center">
                        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl max-w-5xl mx-auto">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-12 translate-x-12"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl translate-y-12 -translate-x-12"></div>

                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Ready to Take the Next Step?</h3>
                            <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                                Let our experienced migration team help you navigate your Subclass 485 application with confidence and ease.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                                <button className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:shadow-orange-500/50 hover:-translate-y-1 transition-all duration-300">
                                    Begin Application
                                </button>
                                <button className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300">
                                    Schedule Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TemporaryStudy;