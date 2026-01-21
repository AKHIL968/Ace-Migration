import React from 'react';
import heroBg from '../../../assets/team.png';
import { Link } from 'react-router-dom';

const PartnerVisa = () => {
    return (
        <div className="pt-20 font-sans">
            {/* Hero Section */}
            <section className="relative bg-slate-900 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Couples and Family"
                        className="w-full h-full object-cover top-0 opacity-40"
                    />
                    <div className="absolute inset-0 bg-rose-900/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-rose-500/20 text-rose-200 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-rose-500/30 uppercase backdrop-blur-sm">
                        Family Visa
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Partner Visa
                    </h1>
                    <p className="text-lg md:text-xl text-rose-100 max-w-2xl mx-auto leading-relaxed">
                        Subclasses 820/801, 309/100 & 300. Bring your loved ones to Australia and build a future together.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">

                    {/* Intro */}
                    <div className="max-w-4xl mx-auto mb-20 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Change Your Life Today!</h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            We’re here when you need us, seven days a week. A number of visas allow Australian citizens, permanent residents, and eligible New Zealand citizens to bring their spouses and fiancés to Australia.
                        </p>
                    </div>

                    {/* Onshore Partner Visa (820/801) */}
                    <div className="mb-20">
                        <div className="flex items-center gap-4 mb-8 border-b-2 border-rose-100 pb-4">
                            <h3 className="text-3xl font-bold text-slate-900">Onshore Partner Visa <span className="text-rose-600">820/801</span></h3>
                        </div>

                        <div className="bg-rose-50 rounded-2xl p-8 md:p-10 border border-rose-100">
                            <h4 className="text-xl font-bold text-slate-800 mb-6">You could be granted this visa if:</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Your marriage is valid under Australian law OR",
                                    "You have been in a de facto relationship for at least 12 months",
                                    "You are inside Australia at the time of application",
                                    "You hold a valid substantive visa",
                                    "You do not have an '8503 – No further stay' condition",
                                    "You meet health and character requirements"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700">
                                        <span className="mt-1 text-rose-500">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Offshore Partner Visa (309/100) */}
                    <div className="mb-20">
                        <div className="flex items-center gap-4 mb-8 border-b-2 border-slate-100 pb-4">
                            <h3 className="text-3xl font-bold text-slate-900">Offshore Partner Visa <span className="text-slate-600">309/100</span></h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-6">
                                <p className="text-slate-600 leading-relaxed">
                                    The temporary Partner (Provisional) visa (subclass 309) is granted first and lets you stay in Australia while the permanent Partner (Migrant) visa (subclass 100) is processed.
                                </p>
                                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-slate-500">
                                    <h5 className="font-bold text-slate-900 mb-3">Eligibility</h5>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• Applying from outside Australia</li>
                                        <li>• Spouse or de facto partner of an Australian citizen/PR/Eligible NZ citizen</li>
                                        <li>• Genuine intention to live together as spouses</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden flex flex-col justify-center">
                                <div className="relative z-10">
                                    <h4 className="text-2xl font-bold mb-4">Processing Time</h4>
                                    <p className="text-slate-300 mb-6">
                                        Partner visa processing can be lengthy (sometimes years). It is crucial to get expert advice to ensure your application is decision-ready.
                                    </p>
                                    <div className="w-16 h-1 bg-rose-500"></div>
                                </div>
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-rose-500 rounded-full blur-[60px] opacity-30"></div>
                            </div>
                        </div>
                    </div>

                    {/* Prospective Marriage Visa (300) */}
                    <div className="mb-20">
                        <div className="bg-gradient-to-r from-rose-600 to-rose-700 rounded-3xl p-10 md:p-16 text-white text-center shadow-xl relative overflow-hidden">
                            <div className="relative z-10 max-w-3xl mx-auto">
                                <span className="text-rose-200 font-semibold tracking-widest uppercase text-sm mb-4 block">Subclass 300</span>
                                <h3 className="text-3xl md:text-4xl font-bold mb-6">Prospective Marriage Visa</h3>
                                <p className="text-rose-100 mb-8 text-lg">
                                    Come to Australia to marry your fiancé. You must marry within 9 months of the visa grant date, after which you can apply for a Partner Visa (820/801).
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-10">
                                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                                        <h5 className="font-bold mb-1">Requirements</h5>
                                        <p className="text-sm text-rose-100">18+ years old, not closely related, free to marry.</p>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                                        <h5 className="font-bold mb-1">Relationship</h5>
                                        <p className="text-sm text-rose-100">Must have physically met and genuinely intend to marry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/pattern_bg.png')] opacity-10"></div>
                        </div>
                    </div>

                    {/* CTA / Contact */}
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Complex Case Specialists</h3>
                        <p className="text-slate-600 mb-8">
                            We specialize in complex spouse visa and family migration cases. Given the restrictive rules and costs, expert advice is essential.
                        </p>
                        <a href="/#contact" className="inline-block px-8 py-3 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-lg shadow-lg transition-all hover:-translate-y-1">
                            Contact Us for Assessment
                        </a>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default PartnerVisa;
