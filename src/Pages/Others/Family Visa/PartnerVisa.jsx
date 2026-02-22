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
                        alt="Australia Partner Visa"
                        className="w-full h-full object-cover top-0 opacity-40"
                    />
                    <div className="absolute inset-0 bg-rose-900/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-rose-500/20 text-rose-200 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-rose-500/30 uppercase backdrop-blur-sm">
                        Family Migration
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Australia Partner Visa Pathways
                    </h1>
                    <p className="text-lg md:text-xl text-rose-100 max-w-2xl mx-auto leading-relaxed">
                        Temporary and permanent visa options for spouses, de facto partners, and fiancés of Australian citizens, permanent residents, or eligible New Zealand citizens.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">

                    {/* Intro */}
                    <div className="max-w-4xl mx-auto mb-20 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            Partner Migration Made Clear
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Partner visa applications require detailed evidence of a genuine and continuing relationship.
                            The process typically involves a two-stage pathway: a temporary visa followed by permanent residence.
                            Proper documentation and compliance are essential for a successful outcome.
                        </p>
                    </div>

                    {/* Onshore Partner Visa (820/801) */}
                    <div className="mb-20">
                        <div className="flex items-center gap-4 mb-8 border-b-2 border-rose-100 pb-4">
                            <h3 className="text-3xl font-bold text-slate-900">
                                Onshore Partner Visa <span className="text-rose-600">820 / 801</span>
                            </h3>
                        </div>

                        <div className="bg-rose-50 rounded-2xl p-8 md:p-10 border border-rose-100">
                            <p className="text-slate-700 mb-6">
                                This pathway is for applicants who are inside Australia at the time of application.
                                Subclass 820 (temporary) is granted first, followed by Subclass 801 (permanent)
                                once ongoing relationship requirements are satisfied.
                            </p>

                            <h4 className="text-xl font-bold text-slate-800 mb-6">
                                General Eligibility Requirements:
                            </h4>

                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Legally married OR in a de facto relationship (usually 12+ months)",
                                    "Physically present in Australia when applying",
                                    "Holding a valid substantive visa",
                                    "No 'No Further Stay' condition (unless waived)",
                                    "Genuine and continuing relationship",
                                    "Meet health and character criteria"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700">
                                        <span className="mt-1 text-rose-500">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
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
                            <h3 className="text-3xl font-bold text-slate-900">
                                Offshore Partner Visa <span className="text-slate-600">309 / 100</span>
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-6">
                                <p className="text-slate-600 leading-relaxed">
                                    Applicants outside Australia may apply for Subclass 309 (temporary),
                                    followed by Subclass 100 (permanent).
                                    The permanent stage is assessed after approximately two years
                                    if the relationship remains genuine and ongoing.
                                </p>

                                <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-slate-500">
                                    <h5 className="font-bold text-slate-900 mb-3">
                                        Key Requirements
                                    </h5>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• Applying from outside Australia.</li>
                                        <li>• Spouse or de facto partner of eligible sponsor.</li>
                                        <li>• Evidence of shared life and mutual commitment.</li>
                                        <li>• Sponsor approval required.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden flex flex-col justify-center">
                                <div className="relative z-10">
                                    <h4 className="text-2xl font-bold mb-4">
                                        Processing Considerations
                                    </h4>
                                    <p className="text-slate-300 mb-6">
                                        Processing times vary depending on case complexity
                                        and documentation quality. Submitting a complete,
                                        well-prepared application significantly reduces delays.
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
                                <span className="text-rose-200 font-semibold tracking-widest uppercase text-sm mb-4 block">
                                    Subclass 300
                                </span>

                                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                                    Prospective Marriage (Fiancé) Visa
                                </h3>

                                <p className="text-rose-100 mb-8 text-lg">
                                    This temporary visa allows an applicant to enter Australia
                                    to marry their Australian sponsor within 9 months of visa grant.
                                    After marriage, the applicant may apply for the Partner Visa (820/801).
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-6">
                                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                                        <h5 className="font-bold mb-1">Eligibility</h5>
                                        <p className="text-sm text-rose-100">
                                            Must be 18+, legally free to marry, and not closely related.
                                        </p>
                                    </div>

                                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                                        <h5 className="font-bold mb-1">Relationship Evidence</h5>
                                        <p className="text-sm text-rose-100">
                                            Must have met in person and demonstrate genuine intention to marry.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/pattern_bg.png')] opacity-10"></div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                            Partner Visa Assessment
                        </h3>

                        <p className="text-slate-600 mb-8">
                            Partner visa applications involve strict evidentiary requirements
                            and sponsorship obligations. Our migration specialists can assess
                            your situation and provide tailored strategic advice.
                        </p>

                        <a
                            href="/#contact"
                            className="inline-block px-8 py-3 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-lg shadow-lg transition-all hover:-translate-y-1"
                        >
                            Request Consultation
                        </a>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default PartnerVisa;