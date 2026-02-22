import React from 'react';
import heroBg from '../../assets/team.png';

const FamilySponsoredVisa = () => {
    return (
        <div className="pt-20 font-sans">
            {/* Hero Section */}
            <section className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Sponsored Family Visitor Visa Australia"
                        className="w-full h-full object-cover top-0 opacity-40"
                    />
                    <div className="absolute inset-0 bg-amber-900/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-200 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-amber-500/30 uppercase backdrop-blur-sm">
                        Australia Visitor Visa
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Sponsored Family Stream Visa
                    </h1>
                    <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
                        Visit your relatives in Australia through a formally sponsored pathway designed for temporary family reunions and extended stays.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-[#fffbf0]">
                <div className="container mx-auto px-4">

                    {/* Intro */}
                    <div className="max-w-4xl mx-auto mb-20 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Spend Quality Time with Family in Australia
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            The Sponsored Family Visitor stream allows eligible relatives of Australian citizens
                            or permanent residents to travel temporarily and stay for family visits, celebrations,
                            or special occasions. This visa focuses on genuine temporary entry with an approved sponsor.
                        </p>
                    </div>

                    {/* Eligibility & Conditions Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">

                        {/* Eligibility */}
                        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl border border-amber-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                                    ✓
                                </div>
                                Key Eligibility Requirements
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    "Genuine intention for temporary stay",
                                    "Meet health and character standards",
                                    "Demonstrate sufficient financial support",
                                    "Sponsored by an eligible Australian relative",
                                    "Comply with child welfare rules (if under 18)"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <span className="text-amber-500 font-bold">•</span>
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visa Conditions */}
                        <div className="bg-amber-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 rounded-full blur-3xl translate-x-8 -translate-y-8 opacity-40"></div>

                            <h3 className="text-xl font-bold mb-4 relative z-10">
                                Common Visa Conditions
                            </h3>

                            <ul className="space-y-3 relative z-10 text-sm opacity-90">
                                <li className="flex gap-2"><span className="text-amber-400 font-bold">8101</span><span>No employment permitted</span></li>
                                <li className="flex gap-2"><span className="text-amber-400 font-bold">8201</span><span>Study limited to 3 months</span></li>
                                <li className="flex gap-2"><span className="text-amber-400 font-bold">8503</span><span>No further stay condition</span></li>
                                <li className="flex gap-2"><span className="text-amber-400 font-bold">8531</span><span>Departure required before visa expiry</span></li>
                                <li className="flex gap-2"><span className="text-amber-400 font-bold">8558</span><span>Maximum 12 months stay within 18 months</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* Process Steps */}
                    <div className="max-w-5xl mx-auto mb-20">
                        <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
                            How to Apply
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { step: "1", title: "Prepare Documentation", desc: "Collect passport, sponsor details, financial evidence and identity documents." },
                                { step: "2", title: "Lodge Application", desc: "Submit the online application through ImmiAccount and pay the visa charge." },
                                { step: "3", title: "Health & Assessment", desc: "Complete medical checks and biometrics if requested, then await decision." }
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-8 rounded-2xl shadow-md border-t-8 border-amber-400 text-center hover:shadow-lg transition-all">
                                    <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center text-2xl font-bold text-amber-600 mx-auto mb-4 border-4 border-white shadow-sm ring-1 ring-amber-100">
                                        {item.step}
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Processing & Fees */}
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-teal-800 to-teal-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">

                            {/* Processing Times */}
                            <div>
                                <h3 className="text-2xl font-bold mb-6">
                                    Estimated Processing Time
                                </h3>

                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-1 text-teal-200">
                                            <span>75% of applications</span>
                                            <span>Approx. 4 Months</span>
                                        </div>
                                        <div className="w-full bg-teal-900/50 rounded-full h-2">
                                            <div className="bg-teal-400 h-2 rounded-full w-3/4"></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between text-sm mb-1 text-teal-200">
                                            <span>90% of applications</span>
                                            <span>Approx. 5 Months</span>
                                        </div>
                                        <div className="w-full bg-teal-900/50 rounded-full h-2">
                                            <div className="bg-teal-400 h-2 rounded-full w-[90%]"></div>
                                        </div>
                                    </div>

                                    <div className="mt-4 p-3 bg-teal-700/30 rounded-lg border border-teal-500/30">
                                        <span className="text-yellow-400 font-bold">Priority Option:</span>
                                        Faster assessment available (additional government fee applies).
                                    </div>
                                </div>
                            </div>

                            {/* Visa Fees */}
                            <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-teal-700/50 md:pl-12 pt-8 md:pt-0">
                                <h3 className="text-2xl font-bold mb-4">
                                    Visa Application Charge
                                </h3>

                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-4xl font-extrabold text-white">
                                        AUD 145
                                    </span>
                                    <span className="text-teal-300">
                                        per applicant
                                    </span>
                                </div>

                                <p className="text-sm text-teal-200 mb-6">
                                    Government visa charge. Additional costs may apply
                                    for medical examinations, biometrics, or document certification.
                                </p>

                                <button className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg shadow-lg transition-colors">
                                    Assess My Eligibility
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default FamilySponsoredVisa;