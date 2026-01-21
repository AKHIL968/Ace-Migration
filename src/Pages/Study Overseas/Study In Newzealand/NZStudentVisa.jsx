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
                        Study Permit
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        New Zealand Student Visa
                    </h1>
                    <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed">
                        A complete guide to obtaining your student visa, managing finances via FTS, and starting your journey in Aotearoa.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">

                    {/* Intro */}
                    <div className="max-w-4xl mx-auto mb-20 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Fee Paying Student Visa</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            If you are planning to study full-time for more than 3 months, you will need a student visa. This requires an offer of place from an NZQA-approved education provider and proof of funds to support your stay.
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="max-w-6xl mx-auto mb-20 animate-fade-in-up">
                        <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Admission & Visa Process</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { step: "01", title: "Apply for Course", desc: "Choose a program, apply, and receive an Offer of Place & Tax Invoice." },
                                { step: "02", title: "Medical & PCC", desc: "Complete medical examinations and obtain Police Clearance Certificates." },
                                { step: "03", title: "Visa Lodgement", desc: "Submit visa application (AIP). Undergo telephonic interview if required." },
                                { step: "04", title: "Funds & Approval", desc: "Pay tuition fees and transfer living expenses (FTS) after AIP approval." }
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
                                Funds Transfer Scheme (FTS)
                            </h3>

                            <div className="space-y-6 relative z-10">
                                <p className="text-teal-100">
                                    The FTS is the safest way to transfer living funds to New Zealand. It is mandatory for students from certain countries or those with funds aged less than 6 months.
                                </p>

                                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                                    <h4 className="font-bold text-white mb-1">Required Amount</h4>
                                    <p className="text-sm text-teal-200 mb-3">Living expenses for one year</p>
                                    <div className="text-3xl font-bold text-teal-400">NZD $15,000</div>
                                </div>

                                <ul className="space-y-3 text-sm text-teal-100">
                                    <li className="flex gap-3">
                                        <span className="text-teal-400">✓</span> Funds are locked in an ANZ Bank account in NZ.
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-teal-400">✓</span> Released monthly to your account for living costs.
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-teal-400">✓</span> Full refund if visa is declined.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Checklist */}
                        <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Visa Checklist</h3>
                            <ul className="space-y-3">
                                {[
                                    "Valid Passport & Photographs",
                                    "Offer of Place from Institution",
                                    "Tuition Fee Payment Receipt",
                                    "Financial Documents (FTS / Loan / Savings)",
                                    "Affidavits of Support (if applicable)",
                                    "Income Tax Returns (Parents/Sponsors)",
                                    "Academic Transcripts & Certificates",
                                    "IELTS / PTE Score Card",
                                    "Medical & X-Ray Certificates",
                                    "Police Clearance Certificate (PCC)",
                                    "Statement of Purpose (SOP)"
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
                        <h3 className="text-2xl font-bold mb-4">Need Help with FTS or Visa Filing?</h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Our experts can guide you through the Funds Transfer Scheme and ensure your visa application is error-free.
                        </p>
                        <button className="px-8 py-3 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-lg shadow-md transition-all hover:-translate-y-1">
                            Get Expert Guidance
                        </button>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default NZStudentVisa;
