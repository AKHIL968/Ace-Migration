import React from 'react';
import heroBg from '../../../assets/students_group.png';

const UKEarningAndSpending = () => {
    return (
        <div className="pt-20 font-sans">
            {/* Hero Section */}
            <section className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="International Students in UK"
                        className="w-full h-full object-cover top-0 opacity-70"
                    />
                    <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-600/20 text-red-300 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-red-500/30 uppercase backdrop-blur-sm">
                        UK Student Finance Guide
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Understanding Student Finances in the UK
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        Prepare for your academic journey with clarity. Explore tuition fees, estimated living costs,
                        and part-time work opportunities available to international students in the United Kingdom.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">

                    {/* Intro */}
                    <div className="max-w-4xl mx-auto mb-20 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Financial Planning for Your UK Education
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            The overall cost of studying in the UK depends on your university, course selection,
                            and city of residence. Proper budgeting and understanding your work permissions
                            will help you manage expenses effectively and maintain financial stability.
                        </p>
                    </div>

                    {/* Tuition & Living Costs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto mb-20">

                        {/* Tuition Fees */}
                        <div className="bg-white rounded-2xl shadow-xl border-l-4 border-blue-600 overflow-hidden hover:-translate-y-1 transition-transform">
                            <div className="p-8 pb-4">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Tuition Fees</h3>
                                </div>
                            </div>

                            <div className="bg-blue-50/50 p-6 space-y-6">
                                <div>
                                    <h4 className="font-bold text-blue-800 mb-3 border-b border-blue-200 pb-2">
                                        Undergraduate Programs
                                    </h4>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li className="flex justify-between">
                                            <span>Arts & Humanities</span>
                                            <span className="font-bold">£10,500 – £13,000</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Business & Management</span>
                                            <span className="font-bold">£13,000 – £16,000</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Engineering & Sciences</span>
                                            <span className="font-bold">£13,500 – £19,000</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-red-800 mb-3 border-b border-red-200 pb-2">
                                        Postgraduate Programs
                                    </h4>
                                    <ul className="space-y-2 text-sm text-gray-700">
                                        <li className="flex justify-between">
                                            <span>Arts & Humanities</span>
                                            <span className="font-bold">£15,000 – £17,500</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Business & MBA</span>
                                            <span className="font-bold">£19,000 – £26,000</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Engineering & Scientific Courses</span>
                                            <span className="font-bold">£19,500 – £27,000</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Living Expenses */}
                        <div className="bg-white rounded-2xl shadow-xl border-l-4 border-red-600 overflow-hidden hover:-translate-y-1 transition-transform">
                            <div className="p-8 pb-4">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Living Expenses</h3>
                                </div>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Your yearly expenses will vary depending on your lifestyle and
                                    whether you live in London or other UK cities.
                                </p>
                            </div>

                            <div className="bg-red-50/50 p-8 text-center">
                                <div className="text-4xl font-extrabold text-red-600 mb-2">
                                    £11,000 – £16,000
                                </div>
                                <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
                                    Approximate Annual Budget
                                </div>

                                <div className="grid grid-cols-2 gap-4 text-left">
                                    <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                                        <span className="text-xl">🚆</span>
                                        <span className="text-sm font-medium">Public Transport</span>
                                    </div>
                                    <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                                        <span className="text-xl">🏡</span>
                                        <span className="text-sm font-medium">Rent & Housing</span>
                                    </div>
                                    <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                                        <span className="text-xl">🥗</span>
                                        <span className="text-sm font-medium">Food & Essentials</span>
                                    </div>
                                    <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                                        <span className="text-xl">📶</span>
                                        <span className="text-sm font-medium">Utilities & Internet</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Work Rights */}
                    <div className="max-w-5xl mx-auto bg-gray-900 rounded-3xl p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">

                        <div className="relative z-10 text-center">
                            <h3 className="text-3xl font-bold mb-10">
                                Employment Opportunities During Study
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                            <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
                                <div className="text-blue-400 font-bold text-lg mb-2">
                                    Part-Time Work (During Term)
                                </div>
                                <div className="text-4xl font-bold text-white mb-2">
                                    Up to 20 Hours
                                </div>
                                <p className="text-gray-300 text-sm">
                                    International students enrolled full-time can typically work up to
                                    20 hours per week during academic sessions, as per visa conditions.
                                </p>
                            </div>

                            <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
                                <div className="text-red-400 font-bold text-lg mb-2">
                                    Full-Time Work (Break Periods)
                                </div>
                                <div className="text-4xl font-bold text-white mb-2">
                                    Full-Time Allowed
                                </div>
                                <p className="text-gray-300 text-sm">
                                    During official university holidays and semester breaks,
                                    students are generally permitted to work full-time.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 text-center relative z-10 pt-8 border-t border-white/10">
                            <p className="text-lg mb-2">
                                Estimated Minimum Wage:
                                <span className="font-bold text-yellow-400"> £10 – £11 per hour</span>
                            </p>
                            <p className="text-xs text-gray-400 uppercase tracking-widest">
                                *Wages vary depending on age and UK government regulations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UKEarningAndSpending;
