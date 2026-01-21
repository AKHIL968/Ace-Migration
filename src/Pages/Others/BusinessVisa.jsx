import React from 'react';
import heroBg from '../../assets/meeting.png';
import { Link } from 'react-router-dom';

const BusinessVisa = () => {
    return (
        <div className="pt-20 font-sans">
            {/* Hero Section */}
            <section className="relative bg-slate-900 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Business Meeting"
                        className="w-full h-full object-cover top-0 opacity-50"
                    />
                    <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-yellow-600/20 text-yellow-500 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-yellow-600/30 uppercase backdrop-blur-sm">
                        Migration
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Business Visa
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Start or manage a business in Australia. Leverage a favorable tax environment and government support.
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
                            Starting a business in Australia is ideal because of its modern metropolises, high quality of life, and stunning weather. Australia fosters a favourable tax environment, transparent government practices, and progressive support.
                        </p>
                    </div>

                    {/* Visa Types Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-white mb-6 font-bold text-xl">
                                188
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Business Innovation & Investment (Provisional)</h3>
                            <p className="text-slate-600">
                                This visa allows you to own and manage a business in Australia, conduct business and investment activity, or undertake an entrepreneurial activity.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-white mb-6 font-bold text-xl">
                                888
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Business Innovation Stream (Permanent)</h3>
                            <p className="text-slate-600">
                                The permanent stage for the Business Innovation and Investment (Provisional) visa holders. Continue your business success in Australia.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1 md:col-span-2">
                            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-white mb-6 font-bold text-xl">
                                132
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Business Talent (Permanent) Visa</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                <div className="bg-white p-4 rounded-xl border border-slate-100">
                                    <h4 className="font-bold text-slate-800 mb-2">Significant Business History</h4>
                                    <p className="text-sm text-slate-500">For high-calibre business owners who want to do business in Australia.</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-slate-100">
                                    <h4 className="font-bold text-slate-800 mb-2">Venture Capital Entrepreneur</h4>
                                    <p className="text-sm text-slate-500">For people who have sourced at least AUD 1 million in venture capital funding.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Why Australia Section */}
                    <div className="bg-slate-900 text-white rounded-3xl p-10 md:p-16 relative overflow-hidden mb-20 shadow-2xl">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-[100px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-8 text-center">Why Australia?</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    "Strong & growing economy",
                                    "Connected globally",
                                    "Easy doing business",
                                    "Wealthy citizens",
                                    "Talented workforce",
                                    "Diverse market",
                                    "Financing options",
                                    "Quality Lifestyle"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        <span className="font-medium text-slate-200">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA / Contact */}
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8 text-left">
                            <p className="text-slate-700 italic">
                                "A migration journey based on business visas can be extremely complex, and even determining whether you have a chance of qualifying can be difficult."
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Need Expert Advice?</h3>
                        <p className="text-slate-600 mb-8">
                            Get in touch with our experienced migration agents to assess your eligibility and guide you through the process.
                        </p>
                        <a href="/#contact" className="inline-block px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg shadow-lg transition-all hover:-translate-y-1">
                            Contact Us
                        </a>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default BusinessVisa;
