import React from 'react';
import heroBg from '../../../assets/students_group.png';

const EarningAndSpending = () => {
    return (
        <div className="pt-20 font-sans">
            {/* Hero Section */}
            <section className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Students Group"
                        className="w-full h-full object-cover top-0"
                    />
                    <div className="absolute inset-0 bg-green-900/70 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-green-400/20 text-green-300 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-green-400/30 uppercase backdrop-blur-sm">
                        Financial Guide
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Earning & Spending in Australia
                    </h1>
                    <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed">
                        Navigating finances as an international student. A guide to cost of living, part-time work, and financial rights.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">

                    {/* Intro Section */}
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Your Finances</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Working while studying is a great way to gain experience and manage expenses. Australia offers robust opportunities and protections for student workers.
                        </p>
                    </div>

                    {/* Cost of Living Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20 animate-fade-in-up">
                        {/* Accommodation */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-green-500 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-600">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Accommodation</h3>
                            <p className="text-gray-600">
                                Biggest expense. Costs vary by city and type (on-campus vs private rental).
                            </p>
                        </div>

                        {/* Living Expenses */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-emerald-500 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mb-6 text-emerald-600">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Daily Expenses</h3>
                            <p className="text-gray-600">
                                Groceries, transport, internet, and electricity. Budgeting is key.
                            </p>
                        </div>

                        {/* Lifestyle */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-teal-500 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-6 text-teal-600">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Lifestyle</h3>
                            <p className="text-gray-600">
                                Entertainment, dining out, and travel. Australia offers many free activities too!
                            </p>
                        </div>
                    </div>

                    {/* Work Opportunities Section */}
                    <div className="bg-gradient-to-br from-green-900 to-emerald-900 rounded-3xl p-10 md:p-16 text-white overflow-hidden relative shadow-2xl">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-6">Work While You Study</h3>
                                <p className="text-emerald-100 text-lg mb-8">
                                    International students have the right to work, helping you support yourself and gain local experience.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-emerald-800 rounded-lg flex items-center justify-center shrink-0 text-emerald-400 font-bold text-xl">40h</div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white">Fortnightly Limit</h4>
                                            <p className="text-emerald-200 text-sm">You can work up to 40 hours every two weeks while your course is in session.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-emerald-800 rounded-lg flex items-center justify-center shrink-0 text-emerald-400 font-bold text-xl">∞</div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white">Result Breaks</h4>
                                            <p className="text-emerald-200 text-sm">Work unrestricted hours during scheduled semester breaks.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                                <h4 className="text-xl font-bold text-white mb-6">Where to find work?</h4>
                                <ul className="space-y-4">
                                    {[
                                        "Hospitality (Cafes, Restaurants)",
                                        "Retail & Sales",
                                        "Tutoring & Administration",
                                        "Tourism & Events",
                                        "University Campus Jobs"
                                    ].map((job, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-emerald-100">
                                            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                            {job}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 pt-6 border-t border-white/20">
                                    <p className="text-emerald-200 text-sm">
                                        <span className="text-yellow-400 font-bold">Pro Tip:</span> Use online job sites like Seek, LinkedIn, or your university's career hub.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Worker Rights */}
                    <div className="mt-20 max-w-5xl mx-auto bg-yellow-50 rounded-2xl p-8 border border-yellow-100 flex flex-col md:flex-row items-center gap-6">
                        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 shrink-0">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Know Your Rights</h3>
                            <p className="text-gray-700">
                                Everyone working in Australia, including international students, is entitled to basic rights and protections at work. This includes a <strong>minimum wage</strong> and a safe working environment.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default EarningAndSpending;
