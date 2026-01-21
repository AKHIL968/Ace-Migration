import React from 'react';
import heroBg from '../../../assets/education.png';

const EducationSystem = () => {
    return (
        <div className="pt-20 font-sans">
            {/* Hero Section */}
            <section className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Australian Education System"
                        className="w-full h-full object-cover top-0"
                    />
                    <div className="absolute inset-0 bg-indigo-900/70 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-400/20 text-red-300 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-red-400/30 uppercase backdrop-blur-sm">
                        Academic Excellence
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Education System in Australia
                    </h1>
                    <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed">
                        A world-class framework ensuring quality, innovation, and global recognition for every student.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">

                    {/* Intro Section */}
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">The Australian Qualifications Framework (AQF)</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            The AQF distinguishes the Australian education system from many others. It is a national policy that covers qualifications from the tertiary education sector (higher education and vocational education and training) in addition to the school leaving certificate.
                        </p>
                    </div>

                    {/* Sectors Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20 animate-fade-in-up">
                        {/* School Education */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-indigo-500 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center mb-6 text-indigo-600">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">School Education</h3>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li>• Primary School (Years 1-6/7)</li>
                                <li>• Secondary School (Years 7/8-10)</li>
                                <li>• Senior Secondary (Years 11-12)</li>
                            </ul>
                        </div>

                        {/* VET */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-500 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-6 text-red-600">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Vocational (VET)</h3>
                            <p className="text-sm text-gray-600 mb-3">Practical skills for work (TAFE & Private Colleges).</p>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li>• Certificates I-IV</li>
                                <li>• Diplomas</li>
                                <li>• Advanced Diplomas</li>
                            </ul>
                        </div>

                        {/* Higher Education */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purple-500 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mb-6 text-purple-600">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Higher Education</h3>
                            <p className="text-sm text-gray-600 mb-3">Universities offering academic degrees.</p>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li>• Bachelor Degree</li>
                                <li>• Masters (Coursework/Research)</li>
                                <li>• Doctoral Degree (PhD)</li>
                            </ul>
                        </div>
                    </div>

                    {/* VET & CRICOS Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                        {/* VET Deep Dive */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-red-100 p-2 rounded-lg text-red-600">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                </span>
                                Vocational Education (VET)
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Australia is globally recognized for its VET sector. The focus is on practical, career-oriented skills. It places emphasis on individual assessment of competencies relevant to specialized fields.
                            </p>
                            <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                                <p className="text-red-800 text-sm font-semibold">Great for: Career changes, upskilling, and pathways to university.</p>
                            </div>
                        </div>

                        {/* CRICOS */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </span>
                                CRICOS Registration
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                The <strong>Commonwealth Register of Institutions and Courses for Overseas Students (CRICOS)</strong> is crucial. It guarantees that the course and institution meet the high standards expected by international students.
                            </p>
                            <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                                <p className="text-indigo-800 text-sm font-semibold">Important: Only study with CRICOS registered providers to maintain visa compliance.</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-gradient-to-r from-indigo-900 to-red-900 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-12 translate-x-12"></div>
                        <h3 className="text-3xl font-bold text-white mb-6 relative z-10">Need Help Choosing a Course?</h3>
                        <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                            Our education counselors can help you navigate the Australian education system and find the perfect course for your career goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                            <button className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-lg hover:bg-indigo-50 transition-colors">
                                Explore Courses
                            </button>
                            <button className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                                Talk to a Counselor
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default EducationSystem;
