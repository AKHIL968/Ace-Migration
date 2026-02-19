import React from 'react';
import heroBg from '../../../assets/graduate_hero_bg.png';

const NZStudentVisa = () => {
    return (
        <div className="pt-20 font-sans">
            {/* Hero Section */}
            <section className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="New Zealand Student Visa"
                        className="w-full h-full object-cover top-0"
                    />
                    <div className="absolute inset-0 bg-teal-900/60 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-teal-500/20 text-teal-100 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-teal-500/30 uppercase backdrop-blur-sm">
                        Study Authorization
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        New Zealand Student Visa
                    </h1>
                    <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed">
                        Your comprehensive resource for securing student authorization, handling financial transfers through FTS, and beginning your Aotearoa experience.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">

                    {/* Intro */}
                    <div className="max-w-4xl mx-auto mb-20 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">International Student Permit</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Full-time study programs exceeding 3 months duration require student authorization. This necessitates enrollment confirmation from an NZQA-registered institution plus demonstration of adequate financial resources for your residence.
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="max-w-6xl mx-auto mb-20 animate-fade-in-up">
                        <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Enrollment & Authorization Pathway</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { step: "01", title: "Program Registration", desc: "Select your program, submit application, and secure Admission Offer with fee schedule." },
                                { step: "02", title: "Health & Background", desc: "Fulfill medical assessment requirements and acquire police verification documents." },
                                { step: "03", title: "Authorization Filing", desc: "Lodge permit request (AIP). Participate in phone verification if requested." },
                                { step: "04", title: "Financial Settlement", desc: "Remit program fees and arrange living cost transfer (FTS) post-AIP confirmation." }
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-teal-600 hover:-translate-y-1 transition-transform">
                                    <div className="text-4xl font-bold text-teal-100 mb-4">{item.step}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Financials & FTS */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-20">
                        {/* Funds Transfer Scheme */}
                        <div className="bg-teal-900 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl translate-x-12 -translate-y-12"></div>

                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
                                <span className="p-2 bg-white/10 rounded-lg text-teal-300">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </span>
                                Financial Transfer Program (FTS)
                            </h3>

                            <div className="space-y-6 relative z-10">
                                <p className="text-teal-100">
                                    FTS represents the most secure method for transmitting subsistence funds to New Zealand. This system is compulsory for applicants from designated nations or those presenting recently accumulated financial resources.
                                </p>

                                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                                    <h4 className="font-bold text-white mb-1">Mandatory Deposit</h4>
                                    <p className="text-sm text-teal-200 mb-3">Annual living cost provision</p>
                                    <div className="text-3xl font-bold text-teal-400">NZD $15,000</div>
                                </div>

                                <ul className="space-y-3 text-sm text-teal-100">
                                    <li className="flex gap-3">
                                        <span className="text-teal-400">✓</span> Resources secured in ANZ Bank account within New Zealand.
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-teal-400">✓</span> Distributed monthly to your account for subsistence needs.
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-teal-400">✓</span> Complete reimbursement upon authorization denial.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Checklist */}
                        <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Authorization Requirements</h3>
                            <ul className="space-y-3">
                                {[
                                    "Current Passport & Identity Photos",
                                    "Institutional Admission Confirmation",
                                    "Fee Payment Documentation",
                                    "Financial Evidence (FTS / Loan / Deposits)",
                                    "Sponsorship Declarations (when applicable)",
                                    "Sponsor Tax Documentation",
                                    "Educational Records & Diplomas",
                                    "Language Test Results",
                                    "Health Assessment & Radiography",
                                    "Criminal Background Certificate",
                                    "Personal Motivation Statement"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                        <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-xs font-bold">✓</div>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-gradient-to-r from-gray-900 to-teal-900 rounded-2xl p-12 text-center text-white shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Require FTS or Permit Application Support?</h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Our specialists provide comprehensive assistance with Financial Transfer arrangements and guarantee accurate permit submissions.
                        </p>
                        <button className="px-8 py-3 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-lg shadow-md transition-all hover:-translate-y-1">
                            Access Professional Help
                        </button>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default NZStudentVisa;