import React from 'react';
import heroBg from '../../../assets/graduate_hero_bg.png';

const UKStudentVisa = () => {
    return (
        <div className="pt-20 font-sans">
            {/* Hero Section */}
            <section className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="UK Student Visa"
                        className="w-full h-full object-cover top-0"
                    />
                    <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-600/20 text-red-200 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-red-500/30 uppercase backdrop-blur-sm">
                        Tier 4 Visa
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Student Visa for UK
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        A complete guide to the admission and visa process for international students planning to study in the United Kingdom.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">

                    {/* Process Overview */}
                    <div className="max-w-6xl mx-auto mb-20 animate-fade-in-up">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Admission & Visa Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { step: "01", title: "Select Course", desc: "Choose an academic program and check entry criteria." },
                                { step: "02", title: "Application", desc: "Submit application forms with required documents to the university." },
                                { step: "03", title: "Offer of Place", desc: "Receive an unconditional Offer of Place & Tax Invoice." },
                                { step: "04", title: "CAS Issuance", desc: "University issues Confirmation of Acceptance for Studies (CAS)." },
                                { step: "05", title: "Visa Application", desc: "Apply for Student Visa with UK Visas and Immigration (UKVI)." },
                                { step: "06", title: "Interview", desc: "Attend a telephonic or face-to-face credibility interview." }
                            ].map((item, index) => (
                                <div key={index} className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                                    <div className="text-4xl font-bold text-blue-200 mb-4">{item.step}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Financial Requirements */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-20">
                        {/* Funds Information */}
                        <div className="bg-blue-900 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-3xl translate-x-12 -translate-y-12 opacity-40"></div>

                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
                                <span className="p-2 bg-white/10 rounded-lg text-blue-300">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </span>
                                Financial Requirements
                            </h3>

                            <div className="space-y-6 relative z-10">
                                <p className="text-blue-100">
                                    You must prove you have enough money to pay for your course and support yourself.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-white/10 p-4 rounded-xl">
                                        <h4 className="font-bold text-white text-sm mb-1">Course Fees</h4>
                                        <p className="text-xs text-blue-200">1st Year Tuition</p>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-xl">
                                        <h4 className="font-bold text-white text-sm mb-1">~£12,000 - £15,000</h4>
                                        <p className="text-xs text-blue-200">Living Costs (Yearly)</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h4 className="font-bold text-white mb-2">Acceptable Funds:</h4>
                                    <ul className="space-y-2 text-sm text-blue-100">
                                        <li className="flex gap-2"><span>•</span> <span>Education Loan</span></li>
                                        <li className="flex gap-2"><span>•</span> <span>Bank Statements (held for 28 days)</span></li>
                                        <li className="flex gap-2"><span>•</span> <span>Fixed Deposits</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Documents Checklist */}
                        <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Documents Checklist</h3>
                            <ul className="space-y-3">
                                {[
                                    "Completed Visa Application Form",
                                    "Valid Passport & Photographs",
                                    "Confirmation of Acceptance for Studies (CAS)",
                                    "Educational Certificates & Transcripts",
                                    "IELTS / English Proficiency Test",
                                    "Tuberculosis (TB) Test Certificate",
                                    "Proof of Funds (Tuition + Living)",
                                    "Gap Explanation (if applicable)",
                                    "Experience Documents (if applicable)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs font-bold">✓</div>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-gradient-to-r from-blue-900 to-gray-900 rounded-2xl p-12 text-center text-white shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Need Help with your Visa Application?</h3>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                            Our experienced migration agents can guide you through the CAS process and visa filing to ensure a successful outcome.
                        </p>
                        <button className="px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg shadow-md transition-all hover:-translate-y-1">
                            Contact Visa Experts
                        </button>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default UKStudentVisa;
