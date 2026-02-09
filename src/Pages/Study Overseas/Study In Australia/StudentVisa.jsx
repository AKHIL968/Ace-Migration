import React from 'react';
import heroBg from '../../../assets/graduate_hero_bg.png';

const StudentVisa = () => {
    return (
        <div className="pt-20 font-sans">
            {/* Hero Section */}
            <section className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Student Visa Australia"
                        className="w-full h-full object-cover top-0"
                    />
                    <div className="absolute inset-0 bg-teal-900/70 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-cyan-400/20 text-cyan-300 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-cyan-400/30 uppercase backdrop-blur-sm">
                        Subclass 500
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Student Visa & Admission
                    </h1>
                    <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto leading-relaxed">
                        Navigate enrollment and visa authorization for Australian studies with complete clarity and support.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">

                    {/* Step-by-Step Selection */}
                    <div className="max-w-6xl mx-auto mb-20">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Your Pathway to Enrollment</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                            {/* Connector Line (Desktop) */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-200 to-cyan-200 -translate-x-1/2 rounded-full"></div>

                            {/* Step 1 */}
                            <div className="relative group md:text-right md:pr-12">
                                <div className="md:absolute top-8 right-0 translate-x-1/2 w-6 h-6 bg-teal-500 rounded-full border-4 border-white shadow-lg z-10 hidden md:block group-hover:scale-125 transition-transform"></div>
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-teal-50 hover:shadow-xl transition-all duration-300 hover:border-teal-200">
                                    <h3 className="text-xl font-bold text-teal-700 mb-2">1. Program Selection</h3>
                                    <p className="text-gray-600">Identify a program matching your educational and professional objectives.</p>
                                </div>
                            </div>
                            {/* Spacer for Step 1 Left */}
                            <div className="hidden md:block"></div>

                            {/* Step 2 */}
                            <div className="hidden md:block"></div>
                            <div className="relative group md:pl-12">
                                <div className="md:absolute top-8 left-0 -translate-x-1/2 w-6 h-6 bg-cyan-500 rounded-full border-4 border-white shadow-lg z-10 hidden md:block group-hover:scale-125 transition-transform"></div>
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-cyan-50 hover:shadow-xl transition-all duration-300 hover:border-cyan-200">
                                    <h3 className="text-xl font-bold text-cyan-700 mb-2">2. Application Submission</h3>
                                    <p className="text-gray-600">Complete and submit required materials to your chosen institution.</p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative group md:text-right md:pr-12">
                                <div className="md:absolute top-8 right-0 translate-x-1/2 w-6 h-6 bg-teal-500 rounded-full border-4 border-white shadow-lg z-10 hidden md:block group-hover:scale-125 transition-transform"></div>
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-teal-50 hover:shadow-xl transition-all duration-300 hover:border-teal-200">
                                    <h3 className="text-xl font-bold text-teal-700 mb-2">3. Admission Decision</h3>
                                    <p className="text-gray-600">Obtain provisional or full acceptance based on qualification assessment.</p>
                                </div>
                            </div>
                            <div className="hidden md:block"></div>

                            {/* Step 4 */}
                            <div className="hidden md:block"></div>
                            <div className="relative group md:pl-12">
                                <div className="md:absolute top-8 left-0 -translate-x-1/2 w-6 h-6 bg-cyan-500 rounded-full border-4 border-white shadow-lg z-10 hidden md:block group-hover:scale-125 transition-transform"></div>
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-cyan-50 hover:shadow-xl transition-all duration-300 hover:border-cyan-200">
                                    <h3 className="text-xl font-bold text-cyan-700 mb-2">4. Enrollment Confirmation</h3>
                                    <p className="text-gray-600">Secure your electronic enrollment certificate - essential for visa processing.</p>
                                </div>
                            </div>

                            {/* Step 5 */}
                            <div className="relative group md:text-right md:pr-12">
                                <div className="md:absolute top-8 right-0 translate-x-1/2 w-6 h-6 bg-teal-500 rounded-full border-4 border-white shadow-lg z-10 hidden md:block group-hover:scale-125 transition-transform"></div>
                                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-8 rounded-2xl shadow-lg text-white">
                                    <h3 className="text-xl font-bold mb-2">5. Visa Processing</h3>
                                    <p className="text-teal-100">Submit Student Visa (Subclass 500) application with professional assistance.</p>
                                </div>
                            </div>
                            <div className="hidden md:block"></div>
                        </div>
                    </div>

                    {/* Requirements Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 animate-fade-in-up">
                        {/* Documents */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-cyan-500">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="bg-cyan-100 p-2 rounded-lg text-cyan-700">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                </span>
                                Documentation Checklist
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    "Valid Passport", "Secondary Transcripts (10th, 12th)",
                                    "Tertiary Credentials", "Language Proficiency Results",
                                    "Professional Background (when applicable)", "Professional Profile",
                                    "Personal Statement", "Academic References"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                                        <span className="text-cyan-500">✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Finance */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-teal-500">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="bg-teal-100 p-2 rounded-lg text-teal-700">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </span>
                                Financial Proof Standards
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Permitted Evidence:</h4>
                                    <p className="text-sm text-gray-600">Student loans, Bank account statements, Term deposits, Government savings schemes.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-red-600 mb-2">Excluded Sources:</h4>
                                    <p className="text-sm text-gray-600">Precious metals, Real estate valuations, Investment securities (unless converted to cash), Commercial enterprise accounts.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Eligibility & English */}
                    <div className="bg-cyan-50 rounded-2xl p-8 md:p-12 mb-20 border border-cyan-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Language Proficiency Standards</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { level: "Diploma", ielts: "5.5", pte: "45" },
                                { level: "Bachelor", ielts: "6.0", pte: "50" },
                                { level: "Grad Diploma", ielts: "6.5", pte: "58" },
                                { level: "Master", ielts: "6.5", pte: "58" },
                            ].map((req, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-cyan-800 mb-2">{req.level}</h4>
                                    <div className="space-y-1 text-sm text-gray-600">
                                        <div className="flex justify-between"><span>IELTS:</span> <span className="font-semibold text-gray-900">{req.ielts}</span></div>
                                        <div className="flex justify-between"><span>PTE:</span> <span className="font-semibold text-gray-900">{req.pte}</span></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-gradient-to-r from-teal-900 to-cyan-900 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-12 -translate-x-12"></div>
                        <h3 className="text-3xl font-bold text-white mb-6 relative z-10">Begin Your Journey Now</h3>
                        <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                            Our specialized advisors provide comprehensive support throughout your enrollment and authorization procedures.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                            <button className="px-8 py-4 bg-cyan-500 text-white font-bold rounded-lg shadow-lg hover:bg-cyan-600 transition-all hover:-translate-y-1">
                                Schedule Meeting
                            </button>
                            <button className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                                Verify Requirements
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default StudentVisa;