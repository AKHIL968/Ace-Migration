import React from 'react';
import heroBg from '../../../assets/graduate_hero_bg.png';

const CanadaStudentVisa = () => {
    return (
        <div className="pt-20 font-sans">
            {/* Hero Section */}
            <section className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Canada Student Visa"
                        className="w-full h-full object-cover top-0"
                    />
                    <div className="absolute inset-0 bg-red-900/60 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-500/20 text-red-100 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-red-500/30 uppercase backdrop-blur-sm">
                        Study Permit
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Canada Student Visa
                    </h1>
                    <p className="text-lg md:text-xl text-red-100 max-w-2xl mx-auto leading-relaxed">
                        Your complete guide to obtaining a study permit and starting your educational journey in Canada.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">

                    {/* Process Overview */}
                    <div className="max-w-6xl mx-auto mb-20">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Visa Application Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-600 hover:-translate-y-1 transition-transform">
                                <div className="text-4xl font-bold text-red-100 mb-4">01</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Apply for Admission</h3>
                                <p className="text-gray-600 text-sm">Secure an Official Letter of Acceptance from a Designated Learning Institution (DLI).</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-gray-800 hover:-translate-y-1 transition-transform">
                                <div className="text-4xl font-bold text-gray-200 mb-4">02</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Gather Documents</h3>
                                <p className="text-gray-600 text-sm">Prepare valid passport, medical reports, police clearance, and academic proofs.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-600 hover:-translate-y-1 transition-transform">
                                <div className="text-4xl font-bold text-red-100 mb-4">03</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Funding</h3>
                                <p className="text-gray-600 text-sm">Purchase a GIC (Guaranteed Investment Certificate) to prove financial stability.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-gray-800 hover:-translate-y-1 transition-transform">
                                <div className="text-4xl font-bold text-gray-200 mb-4">04</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Submit Application</h3>
                                <p className="text-gray-600 text-sm">Apply for the Student Authorization and Visa. Allow ~2 months for processing.</p>
                            </div>
                        </div>
                    </div>

                    {/* Requirements & Funding Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-20">
                        {/* Required Documents */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="p-2 bg-red-50 rounded-lg text-red-600">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                </span>
                                Checklist of Documents
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Valid Passport",
                                    "Official Letter of Acceptance (LOA)",
                                    "Proof of Funds (Tuition + Living)",
                                    "Medical Reports",
                                    "Police Clearance Certificate",
                                    "Academic Certificates & Transcripts",
                                    "IELTS/PTE Score Card",
                                    "Statement of Purpose (SOP)",
                                    "GIC Payment Receipt"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <span className="text-red-500 mt-1">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Funding & GIC */}
                        <div className="bg-gray-900 rounded-2xl shadow-lg p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/20 rounded-full blur-3xl translate-x-12 -translate-y-12"></div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
                                <span className="p-2 bg-white/10 rounded-lg text-red-400">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </span>
                                Funding & GIC (SPP)
                            </h3>

                            <div className="space-y-6 relative z-10">
                                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                    <h4 className="font-bold text-red-300 mb-1">Guaranteed Investment Certificate (GIC)</h4>
                                    <p className="text-sm text-gray-300 mb-2">Proof of living expenses for one year.</p>
                                    <div className="text-2xl font-bold">CAD $10,200</div>
                                </div>

                                <div className="space-y-3 text-sm text-gray-300">
                                    <p><strong className="text-white">Process:</strong> Open account with Scotia Bank (or other approved banks).</p>
                                    <p><strong className="text-white">Wire Transfer:</strong> Send $10,200 ($10k deposit + $200 fees).</p>
                                    <p><strong className="text-white">Arrival:</strong> Open local account to access funds monthly.</p>
                                </div>

                                <div className="pt-4 border-t border-white/10">
                                    <p className="text-xs text-gray-400">
                                        * The GIC amount ensures you have funds for living expenses upon arrival.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-white border-2 border-red-100 rounded-3xl p-10 md:p-16 text-center shadow-xl">
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">Need Help with Your Application?</h3>
                        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                            Our experienced migration agents can guide you through the SPP program, GIC process, and visa application to maximize your success rate.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition-all hover:-translate-y-1">
                                Book Free Consultation
                            </button>
                            <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors">
                                Check Eligibility
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default CanadaStudentVisa;
