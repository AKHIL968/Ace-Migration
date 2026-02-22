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
                        alt="Australia Business Visa"
                        className="w-full h-full object-cover top-0 opacity-50"
                    />
                    <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-yellow-600/20 text-yellow-400 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-yellow-600/30 uppercase backdrop-blur-sm">
                        Business & Investment Migration
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Australia Business Visa Pathways
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Establish, manage, or invest in a business in Australia through structured migration programs designed for entrepreneurs and investors.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">

                    {/* Intro */}
                    <div className="max-w-4xl mx-auto mb-20 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">
                            Strategic Migration for Business Leaders
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Australia offers a stable regulatory framework, transparent governance,
                            and strong economic performance — making it an attractive destination
                            for global entrepreneurs and high-net-worth investors seeking expansion opportunities.
                        </p>
                    </div>

                    {/* Visa Types Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">

                        {/* 188 Visa */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-white mb-6 font-bold text-xl">
                                188
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                Business Innovation & Investment (Provisional)
                            </h3>
                            <p className="text-slate-600">
                                A temporary visa pathway for business owners and investors
                                to operate a business, manage investments, or undertake entrepreneurial activity in Australia.
                                This visa can lead to permanent residency upon meeting performance requirements.
                            </p>
                        </div>

                        {/* 888 Visa */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-white mb-6 font-bold text-xl">
                                888
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                Business Innovation & Investment (Permanent)
                            </h3>
                            <p className="text-slate-600">
                                The permanent stage for eligible Subclass 188 visa holders
                                who have successfully established or invested in Australia
                                and meet the nomination and residency criteria.
                            </p>
                        </div>

                        {/* 132 Visa (Historical / Closed but referenced carefully) */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1 md:col-span-2">
                            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-white mb-6 font-bold text-xl">
                                132
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                Business Talent (Permanent) – Closed to New Applications
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                <div className="bg-white p-4 rounded-xl border border-slate-100">
                                    <h4 className="font-bold text-slate-800 mb-2">
                                        Significant Business History
                                    </h4>
                                    <p className="text-sm text-slate-500">
                                        Previously available to established business owners
                                        with a strong record of commercial success.
                                    </p>
                                </div>

                                <div className="bg-white p-4 rounded-xl border border-slate-100">
                                    <h4 className="font-bold text-slate-800 mb-2">
                                        Venture Capital Entrepreneur
                                    </h4>
                                    <p className="text-sm text-slate-500">
                                        Designed for applicants with substantial venture capital
                                        funding secured for high-value innovative projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Why Australia Section */}
                    <div className="bg-slate-900 text-white rounded-3xl p-10 md:p-16 relative overflow-hidden mb-20 shadow-2xl">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-[100px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-8 text-center">
                                Why Invest in Australia?
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    "Stable and resilient economy",
                                    "Transparent legal system",
                                    "Strong international trade links",
                                    "Innovation-driven sectors",
                                    "Highly skilled workforce",
                                    "Access to Asia-Pacific markets",
                                    "Robust financial infrastructure",
                                    "High standard of living"
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
                                Business migration pathways involve complex eligibility criteria,
                                state nomination requirements, and financial thresholds.
                                Professional assessment is strongly recommended.
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                            Request a Business Visa Assessment
                        </h3>
                        <p className="text-slate-600 mb-8">
                            Our registered migration professionals can evaluate your profile
                            and advise on the most suitable pathway for your investment or business goals.
                        </p>

                        <a
                            href="/#contact"
                            className="inline-block px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg shadow-lg transition-all hover:-translate-y-1"
                        >
                            Speak With an Advisor
                        </a>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default BusinessVisa;