import React from 'react';
import heroBg from '../../../assets/students_group 1.png';

const NZEarningAndSpending = () => {
    return (
        <div className="pt-20 font-sans">
            {/* Hero Section */}
            <section className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Students Group New Zealand"
                        className="w-full h-full object-cover top-0 opacity-70"
                    />
                    <div className="absolute inset-0 bg-teal-900/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-teal-500/20 text-teal-300 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-teal-500/30 uppercase backdrop-blur-sm">
                        Financial Guide
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Earning & Spending in NZ
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        A comprehensive guide to tuition fees, living expenses, and work rights for international students in New Zealand.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">

                    {/* Intro */}
                    <div className="max-w-4xl mx-auto mb-20 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Affordable Excellence</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            New Zealand offers one of the lowest costs of living among developed countries while maintaining high educational standards. Understanding your expenses and work rights is key to a successful study experience.
                        </p>
                    </div>

                    {/* Tuition & Living Costs Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-20 animate-fade-in-up">

                        {/* Tuition Fees */}
                        <div className="bg-white rounded-2xl shadow-xl border-l-4 border-teal-500 overflow-hidden">
                            <div className="p-8 pb-4">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Tuition Fees</h3>
                                </div>
                                <p className="text-gray-600 mb-6">Approximate annual tuition fees for international students:</p>
                            </div>

                            <div className="bg-gray-50 p-6 space-y-4">
                                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                                    <span className="text-gray-700 font-medium">Arts & Social Sciences</span>
                                    <span className="font-bold text-teal-700">$20k - $25k</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                                    <span className="text-gray-700 font-medium">Science & Engineering</span>
                                    <span className="font-bold text-teal-700">$25k - $30k</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                                    <span className="text-gray-700 font-medium">Undergraduate Degrees</span>
                                    <span className="font-bold text-teal-700">$18k - $25k</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700 font-medium">Postgraduate / PhD</span>
                                    <span className="font-bold text-teal-700">$25k - $40k</span>
                                </div>
                            </div>
                        </div>

                        {/* Living Expenses */}
                        <div className="bg-white rounded-2xl shadow-xl border-l-4 border-gray-800 overflow-hidden">
                            <div className="p-8 pb-4">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-800">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Living Costs</h3>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    Estimated annual living expenses range from <span className="font-bold text-gray-900">NZ $12,000 to $15,000</span>.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 p-6 pt-0">
                                <div className="bg-teal-50 p-4 rounded-xl text-center">
                                    <div className="text-2xl mb-2">🏠</div>
                                    <div className="text-sm text-gray-600 font-semibold uppercase">Accommodation</div>
                                </div>
                                <div className="bg-teal-50 p-4 rounded-xl text-center">
                                    <div className="text-2xl mb-2">🛒</div>
                                    <div className="text-sm text-gray-600 font-semibold uppercase">Groceries</div>
                                </div>
                                <div className="bg-teal-50 p-4 rounded-xl text-center">
                                    <div className="text-2xl mb-2">🚌</div>
                                    <div className="text-sm text-gray-600 font-semibold uppercase">Transport</div>
                                </div>
                                <div className="bg-teal-50 p-4 rounded-xl text-center">
                                    <div className="text-2xl mb-2">📱</div>
                                    <div className="text-sm text-gray-600 font-semibold uppercase">Utilities</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Work Rights Section */}
                    <div className="max-w-5xl mx-auto bg-gradient-to-r from-teal-900 to-gray-900 rounded-3xl p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4"></div>

                        <h3 className="text-3xl font-bold mb-10 text-center relative z-10">Work Rights for Students</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center shrink-0 text-xl font-bold">20</div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-teal-300">Part-Time Work</h4>
                                    <p className="text-gray-300">
                                        Permitted to work up to <strong>20 hours per week</strong> during the academic semester. Ideal for covering daily expenses.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-full bg-white text-teal-900 flex items-center justify-center shrink-0 text-xl font-bold">FT</div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-white">Full-Time Work</h4>
                                    <p className="text-gray-300">
                                        Allowed during scheduled semester breaks and holidays (e.g., Christmas/Summer break).
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-white/10 text-center relative z-10">
                            <p className="text-lg">
                                Minimum Wage: <span className="font-bold text-teal-400">NZ $22.70 per hour</span> <span className="text-sm text-gray-400">(Approx, subject to change)</span>
                            </p>
                            <p className="text-sm text-gray-400 mt-2">
                                Popular jobs: Supermarket attendant, Restaurant staff, Marketing, Call center, Campus roles.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NZEarningAndSpending;
