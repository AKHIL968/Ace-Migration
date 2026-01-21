import React from 'react';
import heroBg from '../../../assets/world_map.png';

const PermanentResidence = () => {
    return (
        <div className="pt-20 font-sans">
            {/* Hero Section */}
            <section className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="World Map Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gray-900/80"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-teal-500/20 text-teal-300 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-teal-500/30 uppercase backdrop-blur-sm">
                        Subclass 191
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Permanent Residence (Skilled Regional)
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Your Path from Regional to Permanent. A permanent visa for skilled workers who have lived and worked in designated regional areas of Australia.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">

                    {/* Intro Card */}
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border-t-4 border-teal-600 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-[100px] -z-0"></div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 relative z-10">Overview</h2>
                        <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                            The Permanent Residence (Skilled Regional) visa (Subclass 191) is for people who have lived, worked, and studied in a designated regional area Australia on a previous eligible visa.
                            It allows you to live and work in Australia permanently.
                        </p>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

                        {/* Key Benefits */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group">
                            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span>Stay permanently in Australia</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span>Work & study anywhere</li>
                                <li className="flex items-start gap-2"><span className="text-orange-500 mt-1">•</span>Apply for Australian Citizenship</li>
                            </ul>
                        </div>

                        {/* Eligibility Criteria */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group">
                            <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-6 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Eligibility Criteria</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2"><span className="text-teal-500 mt-1">✓</span>Hold 491 or 494 visa</li>
                                <li className="flex items-start gap-2"><span className="text-teal-500 mt-1">✓</span>Lived in regional Aus for 3 years</li>
                                <li className="flex items-start gap-2"><span className="text-teal-500 mt-1">✓</span>Met income threshold (if applicable)</li>
                                <li className="flex items-start gap-2"><span className="text-teal-500 mt-1">✓</span>Complied with visa conditions</li>
                            </ul>
                        </div>

                        {/* Cost & Processing */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group">
                            <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-6 text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Cost & Processing</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2"><span className="font-semibold text-gray-900">Cost:</span> From AUD 475</li>
                                <li className="flex items-start gap-2"><span className="font-semibold text-gray-900">Time:</span> Approx. 12 Months</li>
                                <li className="flex items-start gap-2 text-sm text-gray-500">Case-by-case assessment.</li>
                            </ul>
                        </div>

                        {/* Travel Rights */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Travel Rights</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">Travel to and from Australia</li>
                                <li className="flex items-start gap-2">Valid for 5 years from grant</li>
                                <li className="flex items-start gap-2 text-sm text-gray-500">Resident Return Visa needed after 5 years.</li>
                            </ul>
                        </div>

                        {/* Family Inclusion */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group">
                            <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center mb-6 text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Family Inclusion</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2">Include family members</li>
                                <li className="flex items-start gap-2">Must meet health & character</li>
                                <li className="flex items-start gap-2 text-sm text-gray-500">Can include partners and dependent children.</li>
                            </ul>
                        </div>

                        {/* Application From */}
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group">
                            <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Where to Apply</h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-2"><span className="font-semibold">Location:</span> Inside Australia</li>
                                <li className="flex items-start gap-2"><span className="font-semibold">Status:</span> Regional Resident</li>
                                <li className="flex items-start gap-2 text-sm text-gray-500">You must be onshore to apply for this visa.</li>
                            </ul>
                        </div>

                    </div>

                    {/* CTA Section */}
                    <div className="mt-20 text-center">
                        <div className="bg-gradient-to-r from-teal-900 to-green-900 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl max-w-5xl mx-auto">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-12 translate-x-12"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl translate-y-12 -translate-x-12"></div>

                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Secure Your Permanent Status! 🇦🇺</h3>
                            <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                                If you've been living and working in regional Australia, take the final step to permanent residency with the 191 visa.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                                <button className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:shadow-orange-500/50 hover:-translate-y-1 transition-all duration-300">
                                    Assess Eligibility
                                </button>
                                <button className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PermanentResidence;