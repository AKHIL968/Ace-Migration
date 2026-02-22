import React from 'react';
import heroBg from '../../assets/slider1.jpg';
import { Link } from 'react-router-dom';

const WorkAndHolidayVisa = () => {
    return (
        <div className="pt-20 font-sans">
            {/* Hero Section */}
            <section className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Australia Work and Holiday Visa"
                        className="w-full h-full object-cover top-0 opacity-60"
                    />
                    <div className="absolute inset-0 bg-orange-900/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-200 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-orange-500/30 uppercase backdrop-blur-sm">
                        Working Holiday Program
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Work & Holiday Visa (Subclass 462 & 417)
                    </h1>
                    <p className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto leading-relaxed">
                        Experience Australia while gaining valuable international work exposure under the official Working Holiday visa program.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">

                    {/* Intro */}
                    <div className="max-w-4xl mx-auto mb-20 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Travel, Work & Explore Australia
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            The Working Holiday visa program allows young adults from eligible countries
                            to travel across Australia while undertaking short-term employment to support their stay.
                            It offers cultural exchange, professional exposure, and flexibility.
                        </p>
                    </div>

                    {/* Subclass 462 Section */}
                    <div className="mb-20">
                        <div className="flex items-center gap-4 mb-8 border-b-2 border-orange-100 pb-4">
                            <span className="text-5xl font-extrabold text-orange-200">462</span>
                            <h3 className="text-3xl font-bold text-gray-900">
                                Work and Holiday Visa (Subclass 462)
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
                                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 text-sm">✓</span>
                                    Eligibility Requirements
                                </h4>
                                <ul className="space-y-4">
                                    {[
                                        { label: "Age", val: "18 – 30 years (inclusive)" },
                                        { label: "Citizenship", val: "Passport from an eligible country" },
                                        { label: "Dependents", val: "No dependent children permitted" },
                                        { label: "Education", val: "Meet minimum qualification criteria" },
                                        { label: "Funds", val: "Approx. AUD 5,000 + onward travel evidence" },
                                        { label: "Location", val: "Must apply from outside Australia" }
                                    ].map((item, i) => (
                                        <li key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                                            <span className="font-bold text-orange-800 min-w-[110px]">{item.label}:</span>
                                            <span className="text-gray-700 text-sm">{item.val}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-8">
                                <div className="bg-teal-900 text-white rounded-2xl p-8 relative overflow-hidden shadow-lg">
                                    <h4 className="text-xl font-bold mb-4 relative z-10">
                                        Key Visa Conditions
                                    </h4>
                                    <ul className="space-y-2 text-sm text-teal-100 relative z-10">
                                        <li>• Maintain adequate health insurance.</li>
                                        <li>• Work with one employer for a maximum of 6 months.</li>
                                        <li>• Study or training allowed for up to 4 months.</li>
                                        <li>• Comply with Australian laws and visa conditions.</li>
                                    </ul>
                                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-500 rounded-full blur-3xl opacity-30"></div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-orange-500">
                                        <div className="text-gray-500 text-xs uppercase font-bold mb-1">
                                            Processing Time
                                        </div>
                                        <div className="text-2xl font-bold text-gray-900">
                                            1–2 <span className="text-sm font-normal text-gray-500">Months*</span>
                                        </div>
                                    </div>
                                    <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-teal-500">
                                        <div className="text-gray-500 text-xs uppercase font-bold mb-1">
                                            Visa Fee
                                        </div>
                                        <div className="text-2xl font-bold text-gray-900">
                                            AUD 485
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Subclass 417 Section */}
                    <div className="mb-20">
                        <div className="flex items-center gap-4 mb-8 border-b-2 border-teal-100 pb-4">
                            <span className="text-5xl font-extrabold text-teal-200">417</span>
                            <h3 className="text-3xl font-bold text-gray-900">
                                Working Holiday Visa (Subclass 417)
                            </h3>
                        </div>

                        <div className="bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 md:p-12 border border-teal-100 shadow-sm">
                            <h4 className="text-2xl font-bold text-gray-900 mb-6">
                                Overview & Benefits
                            </h4>

                            <p className="text-gray-600 mb-8 max-w-3xl">
                                Subclass 417 is available to eligible young travelers (18–30 years,
                                or up to 35 years for certain nationalities).
                                It provides an opportunity to stay in Australia for up to 12 months
                                while undertaking short-term employment and travel.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold mb-4">
                                        1
                                    </div>
                                    <h5 className="font-bold text-gray-900 mb-2">
                                        12-Month Stay
                                    </h5>
                                    <p className="text-sm text-gray-600">
                                        Remain in Australia for up to one year with multiple entries.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold mb-4">
                                        2
                                    </div>
                                    <h5 className="font-bold text-gray-900 mb-2">
                                        Employment Rights
                                    </h5>
                                    <p className="text-sm text-gray-600">
                                        Work up to 6 months per employer during your stay.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold mb-4">
                                        3
                                    </div>
                                    <h5 className="font-bold text-gray-900 mb-2">
                                        Study Opportunity
                                    </h5>
                                    <p className="text-sm text-gray-600">
                                        Enroll in study or vocational training for up to 4 months.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact CTA */}
                    <div className="bg-gray-900 rounded-2xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h3 className="text-3xl font-bold mb-6">
                                Ready to Apply for a Working Holiday Visa?
                            </h3>
                            <p className="text-gray-300 mb-8 text-lg">
                                Our migration advisors can assess your eligibility and guide you
                                through the application process step-by-step.
                            </p>
                            <a href="/#contact" className="inline-block px-10 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:-translate-y-1">
                                Get Expert Assistance
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default WorkAndHolidayVisa;