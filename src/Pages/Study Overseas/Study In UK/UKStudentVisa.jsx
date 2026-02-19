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
                        alt="UK Student Route Visa"
                        className="w-full h-full object-cover top-0"
                    />
                    <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-600/20 text-red-200 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-red-500/30 uppercase backdrop-blur-sm">
                        UK Student Route
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        UK Student Visa Guide
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        Step-by-step guidance for international students applying to study in the United Kingdom under the official Student Route visa category.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">

                    {/* Process Overview */}
                    <div className="max-w-6xl mx-auto mb-20">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            University Admission & Visa Process
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { step: "01", title: "Choose Your Program", desc: "Research accredited UK universities and confirm eligibility requirements." },
                                { step: "02", title: "Submit Application", desc: "Apply directly to the university with academic and supporting documents." },
                                { step: "03", title: "Receive Offer Letter", desc: "Obtain a conditional or unconditional admission offer." },
                                { step: "04", title: "CAS Confirmation", desc: "University issues a Confirmation of Acceptance for Studies (CAS)." },
                                { step: "05", title: "Apply for Visa", desc: "Submit your Student Visa application through UKVI online portal." },
                                { step: "06", title: "Biometrics & Interview", desc: "Attend biometric appointment and credibility interview if required." }
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

                            <h3 className="text-2xl font-bold mb-6 relative z-10">
                                Financial Evidence Requirements
                            </h3>

                            <div className="space-y-6 relative z-10">
                                <p className="text-blue-100">
                                    Applicants must demonstrate sufficient funds to cover tuition fees
                                    and living expenses for the duration required under UK immigration rules.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-white/10 p-4 rounded-xl">
                                        <h4 className="font-bold text-white text-sm mb-1">
                                            Tuition Fees
                                        </h4>
                                        <p className="text-xs text-blue-200">
                                            First Year Course Fee (as stated in CAS)
                                        </p>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-xl">
                                        <h4 className="font-bold text-white text-sm mb-1">
                                            £12,000 – £16,000
                                        </h4>
                                        <p className="text-xs text-blue-200">
                                            Estimated Annual Living Costs
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h4 className="font-bold text-white mb-2">
                                        Accepted Financial Proof:
                                    </h4>
                                    <ul className="space-y-2 text-sm text-blue-100">
                                        <li className="flex gap-2"><span>•</span><span>Sanctioned Education Loan</span></li>
                                        <li className="flex gap-2"><span>•</span><span>Personal or Sponsor Bank Statements (28-day rule)</span></li>
                                        <li className="flex gap-2"><span>•</span><span>Fixed Deposits (as per UKVI guidelines)</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Documents Checklist */}
                        <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Required Documents
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Completed Online Visa Application",
                                    "Valid Passport",
                                    "CAS (Confirmation of Acceptance for Studies)",
                                    "Academic Transcripts & Certificates",
                                    "English Language Test (IELTS / Equivalent)",
                                    "Tuberculosis Test Certificate (if applicable)",
                                    "Proof of Financial Funds",
                                    "Statement of Purpose (if required)",
                                    "Work Experience Documents (if applicable)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs font-bold">
                                            ✓
                                        </div>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-gradient-to-r from-blue-900 to-gray-900 rounded-2xl p-12 text-center text-white shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">
                            Ready to Apply for Your UK Student Visa?
                        </h3>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                            Our expert advisors provide end-to-end assistance — from university applications
                            to CAS processing and visa submission — ensuring accuracy and confidence throughout.
                        </p>
                        <button className="px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg shadow-md transition-all hover:-translate-y-1">
                            Book a Consultation
                        </button>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default UKStudentVisa;
