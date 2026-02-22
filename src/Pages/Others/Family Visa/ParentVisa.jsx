import React from 'react';
import heroBg from '../../../assets/team.png';
import { Link } from 'react-router-dom';

const ParentVisa = () => {
    return (
        <div className="pt-20 font-sans">
            {/* Hero Section */}
            <section className="relative bg-slate-900 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Australia Parent Visa"
                        className="w-full h-full object-cover top-0 opacity-40"
                    />
                    <div className="absolute inset-0 bg-amber-900/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-200 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-amber-500/30 uppercase backdrop-blur-sm">
                        Family Migration
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Australia Parent Visa Pathways
                    </h1>
                    <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
                        Explore temporary and permanent visa options that allow parents to reunite with their children in Australia.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">

                    {/* Intro */}
                    <div className="max-w-4xl mx-auto mb-20 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            Specialist Guidance for Parent Migration
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Parent visa applications are among the most complex family migration pathways.
                            They often involve the Balance of Family Test, Assurance of Support, health checks,
                            and long processing queues. Our team assists both onshore and offshore applicants
                            in selecting the most suitable subclass.
                        </p>
                    </div>

                    {/* Sponsored Parent Visa 870 */}
                    <div className="mb-20">
                        <div className="bg-amber-50 rounded-2xl p-8 md:p-12 border border-amber-100 relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="bg-amber-500 text-white font-bold py-1 px-3 rounded text-sm">
                                        Temporary Option
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                                        Sponsored Parent Visa (Subclass 870)
                                    </h3>
                                </div>

                                <p className="text-slate-700 mb-6 max-w-3xl">
                                    A temporary visa allowing parents of Australian citizens,
                                    permanent residents, or eligible New Zealand citizens
                                    to stay in Australia for 3 or 5 years at a time
                                    (maximum cumulative stay generally up to 10 years).
                                    <span className="font-semibold"> No Balance of Family Test required.</span>
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-100/50">
                                        <h4 className="font-bold text-slate-900 mb-3 text-lg">
                                            Core Requirements
                                        </h4>
                                        <ul className="space-y-2 text-sm text-slate-600">
                                            <li>• Approved parent sponsor.</li>
                                            <li>• Sponsor must meet minimum income threshold.</li>
                                            <li>• Valid private health insurance required.</li>
                                            <li>• No work rights under this visa.</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-100/50">
                                        <h4 className="font-bold text-slate-900 mb-3 text-lg">
                                            Government Visa Charges
                                        </h4>
                                        <ul className="space-y-4">
                                            <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                                                <span className="text-slate-600">3-Year Visa</span>
                                                <span className="font-bold text-amber-700">$5,000</span>
                                            </li>
                                            <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                                                <span className="text-slate-600">5-Year Visa</span>
                                                <span className="font-bold text-amber-700">$10,000</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200 rounded-full blur-[80px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                    </div>

                    {/* Contributory vs Non-Contributory */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

                        {/* Contributory */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-10 w-1 bg-amber-500 rounded-full"></div>
                                <h3 className="text-2xl font-bold text-slate-900 pt-1">
                                    Contributory Parent Visas
                                </h3>
                            </div>

                            <p className="text-slate-600 text-sm mb-6">
                                Higher government charges with significantly shorter processing queues
                                compared to non-contributory streams.
                            </p>

                            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                                <h4 className="text-lg font-bold text-slate-800 mb-2">
                                    Offshore Applications
                                </h4>

                                <div className="space-y-4 mt-4">
                                    <div>
                                        <div className="flex justify-between">
                                            <span className="font-semibold text-amber-600">
                                                Subclass 143 (Permanent)
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-500">
                                            Direct permanent residency with work and study rights.
                                        </p>
                                    </div>

                                    <div className="border-t border-slate-100 pt-3">
                                        <div className="flex justify-between">
                                            <span className="font-semibold text-amber-600">
                                                Subclass 173 (Temporary)
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-500">
                                            Two-year temporary visa pathway leading to Subclass 143.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                                <h4 className="text-lg font-bold text-slate-800 mb-2">
                                    Onshore (Aged Parent) Options
                                </h4>

                                <div className="space-y-4 mt-4">
                                    <div>
                                        <span className="font-semibold text-amber-600">
                                            Subclass 864 (Permanent)
                                        </span>
                                        <p className="text-xs text-slate-500">
                                            For aged parents in Australia meeting pension age criteria.
                                        </p>
                                    </div>

                                    <div className="border-t border-slate-100 pt-3">
                                        <span className="font-semibold text-amber-600">
                                            Subclass 884 (Temporary)
                                        </span>
                                        <p className="text-xs text-slate-500">
                                            Temporary pathway leading to permanent residence.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Non-Contributory */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-10 w-1 bg-slate-400 rounded-full"></div>
                                <h3 className="text-2xl font-bold text-slate-900 pt-1">
                                    Non-Contributory Parent Visas
                                </h3>
                            </div>

                            <p className="text-slate-600 text-sm mb-6">
                                Lower application charges but extremely long waiting periods
                                due to annual visa caps.
                            </p>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                <h4 className="text-lg font-bold text-slate-800 mb-2">
                                    Subclass 103 (Parent Visa)
                                </h4>
                                <ul className="text-xs text-slate-500 list-disc ml-4 space-y-1">
                                    <li>Offshore application.</li>
                                    <li>Must meet Balance of Family Test.</li>
                                    <li>Processing can exceed 20–30 years.</li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                <h4 className="text-lg font-bold text-slate-800 mb-2">
                                    Subclass 804 (Aged Parent)
                                </h4>
                                <ul className="text-xs text-slate-500 list-disc ml-4 space-y-1">
                                    <li>Onshore application.</li>
                                    <li>Applicant must meet pension age.</li>
                                    <li>Bridging visa may apply during processing.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-slate-900 rounded-2xl p-10 md:p-14 text-center text-white shadow-2xl max-w-5xl mx-auto">
                        <h3 className="text-3xl font-bold mb-4">
                            Considering a Parent Visa Application?
                        </h3>

                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
                            Parent visa categories require careful assessment of eligibility,
                            sponsorship obligations, and long-term planning.
                            Speak with our migration specialists for tailored advice.
                        </p>

                        <a
                            href="/#contact"
                            className="inline-block px-10 py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:-translate-y-1"
                        >
                            Request Consultation
                        </a>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ParentVisa;