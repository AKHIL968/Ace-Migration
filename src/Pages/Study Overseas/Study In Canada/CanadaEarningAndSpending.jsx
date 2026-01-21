import React from 'react';
import heroBg from '../../../assets/students_group.png';

const CanadaEarningAndSpending = () => {
    return (
        <div className="pt-20 font-sans">
            {/* Hero Section */}
            <section className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Students Group in Canada"
                        className="w-full h-full object-cover top-0"
                    />
                    <div className="absolute inset-0 bg-red-900/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-600/30 text-red-200 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-red-500/30 uppercase backdrop-blur-md">
                        Financial Guide
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Earning & Spending in Canada
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        A guide to managing finances, understanding work rights, and cost of living for international students in Canada.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">

                    {/* Intro Section */}
                    <div className="max-w-4xl mx-auto mb-20 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Affordable Education & Living</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Canada is renowned for offering cost-effective education without compromising on quality. Tuition fees and living costs vary by province, but generally, it remains more affordable than the US, UK, or Australia.
                        </p>
                    </div>

                    {/* Cost of Living & Work Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-20 animate-fade-in-up">

                        {/* Earning / Work Section */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Work Opportunities</h3>
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-red-600 shadow-sm hover:shadow-md transition-all">
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Part-Time Work</h4>
                                <p className="text-gray-600 mb-4">Work up to <span className="font-bold text-red-600">20 hours per week</span> during academic sessions and full-time during scheduled breaks.</p>
                                <p className="text-sm text-gray-500">Sectors: Hospitality, Retail, Tourism, Tech Support.</p>
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-gray-800 shadow-sm hover:shadow-md transition-all">
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Post-Graduation Work Permit (PGWP)</h4>
                                <p className="text-gray-600">Graduates can work for up to <span className="font-bold text-gray-900">3 years</span> in Canada, paving the way for Permanent Residency.</p>
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-red-600 shadow-sm hover:shadow-md transition-all">
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Social Insurance Number (SIN)</h4>
                                <p className="text-gray-600">A 9-digit number essential to work in Canada and access government benefits. You must apply for this after arriving.</p>
                            </div>
                        </div>

                        {/* Spending / Costs Section */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-800">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Cost Breakdown</h3>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                                <div className="p-6 bg-red-600 text-white">
                                    <h4 className="font-bold text-lg">Accommodation Estimates</h4>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                                        <span className="text-gray-600">Off-Campus Housing</span>
                                        <span className="font-bold text-gray-900">$250 - $750 <span className="text-xs font-normal text-gray-500">/mo</span></span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                                        <span className="text-gray-600">Homestays</span>
                                        <span className="font-bold text-gray-900">$400 - $800 <span className="text-xs font-normal text-gray-500">/mo</span></span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600">University Residence</span>
                                        <span className="font-bold text-gray-900">$3k - $7.5k <span className="text-xs font-normal text-gray-500">/yr</span></span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                                <div className="p-6 bg-gray-800 text-white">
                                    <h4 className="font-bold text-lg">Daily Expenses</h4>
                                </div>
                                <div className="p-6 grid grid-cols-2 gap-4">
                                    <div className="p-3 bg-gray-50 rounded-lg text-center">
                                        <span className="block text-xs text-gray-500 uppercase">Groceries</span>
                                        <span className="block font-bold text-gray-800">$150 - $200/mo</span>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg text-center">
                                        <span className="block text-xs text-gray-500 uppercase">Transport</span>
                                        <span className="block font-bold text-gray-800">$2 - $3/ride</span>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg text-center">
                                        <span className="block text-xs text-gray-500 uppercase">Internet/Utils</span>
                                        <span className="block font-bold text-gray-800">~$300/mo</span>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg text-center">
                                        <span className="block text-xs text-gray-500 uppercase">Health Ins.</span>
                                        <span className="block font-bold text-gray-800">$300 - $500/yr</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pro Tip Section */}
                    <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center gap-8">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center shrink-0 backdrop-blur-sm">
                            <span className="text-2xl">💡</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Smart Saving Tip</h3>
                            <p className="text-red-100">
                                Always carry your Student ID card. It can get you discounts on transportation, museum entries, movie tickets, and even at some retail stores! Canadian cities are very student-friendly.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default CanadaEarningAndSpending;
