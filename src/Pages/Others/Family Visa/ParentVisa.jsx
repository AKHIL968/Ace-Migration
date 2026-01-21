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
                        alt="Family Reunion"
                        className="w-full h-full object-cover top-0 opacity-40"
                    />
                    <div className="absolute inset-0 bg-amber-900/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-200 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-amber-500/30 uppercase backdrop-blur-sm">
                        Family Visa
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Parent Visa
                    </h1>
                    <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
                        Subclasses 103, 143, 173, 804, 884, 864, 870. Reunite with your children in Australia.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">

                    {/* Intro */}
                    <div className="max-w-4xl mx-auto mb-20 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Simple Approach To Immigration</h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            We specialize in complex parent migration cases. Whether you are onshore or offshore, we help navigate the balance of family tests, health requirements, and sponsorship obligations to bring your family together.
                        </p>
                    </div>

                    {/* Sponsored Parent Visa (870) */}
                    <div className="mb-20">
                        <div className="bg-amber-50 rounded-2xl p-8 md:p-12 border border-amber-100 relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="bg-amber-500 text-white font-bold py-1 px-3 rounded text-sm">New</span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Sponsored Parent Visa <span className="text-amber-600">870</span></h3>
                                </div>
                                <p className="text-slate-700 mb-6 max-w-3xl">
                                    A temporary visa allowing parents to stay for up to 3 or 5 years (cumulative generally up to 10 years).
                                    <span className="font-bold text-slate-900"> No Balance of Family Test required.</span>
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-100/50">
                                        <h4 className="font-bold text-slate-900 mb-3 text-lg">Key Requirements</h4>
                                        <ul className="space-y-2 text-sm text-slate-600">
                                            <li className="flex items-start gap-2"><span>•</span> Sponsor must be an approved parent sponsor.</li>
                                            <li className="flex items-start gap-2"><span>•</span> Sponsor income requirement (~$83k).</li>
                                            <li className="flex items-start gap-2"><span>•</span> Applicant requires health insurance.</li>
                                            <li className="flex items-start gap-2"><span>•</span> Must be outside Australia (unless invited).</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-100/50">
                                        <h4 className="font-bold text-slate-900 mb-3 text-lg">Visa Charges</h4>
                                        <ul className="space-y-4">
                                            <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                                                <span className="text-slate-600">Up to 3 Years</span>
                                                <span className="font-bold text-amber-700">$5,000</span>
                                            </li>
                                            <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                                                <span className="text-slate-600">Up to 5 Years</span>
                                                <span className="font-bold text-amber-700">$10,000</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200 rounded-full blur-[80px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                    </div>

                    {/* Contributory vs Non-Contributory Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

                        {/* Contributory */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-10 w-1 bg-amber-500 rounded-full"></div>
                                <h3 className="text-2xl font-bold text-slate-900 pt-1">Contributory Parent Visas</h3>
                            </div>
                            <p className="text-slate-600 text-sm mb-6">
                                Higher visa charges for significantly faster processing. Includes both Permanent and Temporary options.
                            </p>

                            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                                <h4 className="text-lg font-bold text-slate-800 mb-2">Offshore Applications</h4>
                                <div className="space-y-4 mt-4">
                                    <div className="flex justify-between items-baseline">
                                        <span className="font-semibold text-amber-600">Subclass 143</span>
                                        <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded">Permanent</span>
                                    </div>
                                    <p className="text-xs text-slate-500">~$47k/parent. Indefinite stay, work, study. Sponsor required.</p>

                                    <div className="flex justify-between items-baseline border-t border-slate-100 pt-3">
                                        <span className="font-semibold text-amber-600">Subclass 173</span>
                                        <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Temporary</span>
                                    </div>
                                    <p className="text-xs text-slate-500">~$29k/parent. 2 years stay. Path to 143.</p>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                                <h4 className="text-lg font-bold text-slate-800 mb-2">Onshore (Aged) Applications</h4>
                                <div className="space-y-4 mt-4">
                                    <div className="flex justify-between items-baseline">
                                        <span className="font-semibold text-amber-600">Subclass 864</span>
                                        <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded">Permanent</span>
                                    </div>
                                    <p className="text-xs text-slate-500">For aged parents in Australia. Direct permanent residence.</p>

                                    <div className="flex justify-between items-baseline border-t border-slate-100 pt-3">
                                        <span className="font-semibold text-amber-600">Subclass 884</span>
                                        <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Temporary</span>
                                    </div>
                                    <p className="text-xs text-slate-500">2 years temporary stay for aged parents.</p>
                                </div>
                            </div>
                        </div>

                        {/* Non-Contributory */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="h-10 w-1 bg-slate-400 rounded-full"></div>
                                <h3 className="text-2xl font-bold text-slate-900 pt-1">Non-Contributory Visas</h3>
                            </div>
                            <p className="text-slate-600 text-sm mb-6">
                                Lower costs but extreme waiting periods (up to 30 years).
                            </p>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                <h4 className="text-lg font-bold text-slate-800 mb-2">Parent Visa (103)</h4>
                                <p className="text-sm text-slate-600 mb-2">Offshore Application</p>
                                <ul className="text-xs text-slate-500 list-disc ml-4 space-y-1">
                                    <li>Lower cost.</li>
                                    <li>Wait time up to 30 years.</li>
                                    <li>Must meet Balance of Family test.</li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                <h4 className="text-lg font-bold text-slate-800 mb-2">Aged Parent Visa (804)</h4>
                                <p className="text-sm text-slate-600 mb-2">Onshore Application</p>
                                <ul className="text-xs text-slate-500 list-disc ml-4 space-y-1">
                                    <li>For applicants meeting age pension age.</li>
                                    <li>Must be in Australia (no 'No Further Stay' condition).</li>
                                    <li>Long bridging visa period (no work rights usually).</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CTA / Contact */}
                    <div className="bg-slate-900 rounded-2xl p-10 md:p-14 text-center text-white relative overflow-hidden shadow-2xl max-w-5xl mx-auto">
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-4">Complex Family Migration?</h3>
                            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
                                Parent visas involve complex criteria including the "Balance of Family Test" and "Assurance of Support". Let our experts guide you to the right subclass.
                            </p>
                            <a href="/#contact" className="inline-block px-10 py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:-translate-y-1">
                                Book a Consultation
                            </a>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/world_map.png')] opacity-10 bg-contain bg-no-repeat bg-center"></div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ParentVisa;
