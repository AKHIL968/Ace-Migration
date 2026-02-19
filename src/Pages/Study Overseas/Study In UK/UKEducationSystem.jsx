import React from 'react';
import heroBg from '../../../assets/education.png';

const UKEducationSystem = () => {
    return (
        <div className="pt-20 font-sans">
            {/* Hero Section */}
            <section className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="UK Higher Education"
                        className="w-full h-full object-cover top-0"
                    />
                    <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-600/20 text-red-200 text-xs md:text-sm font-semibold tracking-wider mb-6 border border-red-500/30 uppercase backdrop-blur-sm">
                        International Excellence
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        The UK Education Framework
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                        Experience an education system respected worldwide for academic quality, research strength, and global recognition.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">

                    {/* Intro Section */}
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            A Trusted Global Education System
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            The United Kingdom maintains strict academic standards through regulatory bodies such as
                            the <span className="text-blue-700 font-bold">Quality Assurance Agency (QAA)</span>.
                            This ensures institutions consistently deliver high-quality teaching, transparent assessment systems,
                            and internationally recognized qualifications.
                        </p>
                    </div>

                    {/* Institutions Grid */}
                    <div className="max-w-6xl mx-auto mb-20">
                        <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
                            Types of Higher Education Institutions
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            {/* Universities */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-blue-600 hover:-translate-y-1 transition-transform">
                                <div className="text-blue-600 mb-4">
                                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Universities</h4>
                                <p className="text-gray-600 text-sm">
                                    Public universities offering undergraduate, postgraduate, and doctoral programs.
                                    Known for strong research output and globally respected degrees.
                                </p>
                            </div>

                            {/* Institutes & Technical Universities */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-red-600 hover:-translate-y-1 transition-transform">
                                <div className="text-red-600 mb-4">
                                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M12 8c-4.418 0-8 1.79-8 4v4h16v-4c0-2.21-3.582-4-8-4z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Institutes & Technical Schools</h4>
                                <p className="text-gray-600 text-sm">
                                    Career-focused institutions providing practical and industry-oriented programs
                                    in engineering, technology, design, and business.
                                </p>
                            </div>

                            {/* Independent Colleges */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-blue-600 hover:-translate-y-1 transition-transform">
                                <div className="text-blue-600 mb-4">
                                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M12 6v6l4 2" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Independent Colleges</h4>
                                <p className="text-gray-600 text-sm">
                                    Private institutions offering foundation courses, diplomas, and specialized
                                    programs tailored to international students.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Qualification Levels */}
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 mb-20">
                        <div className="bg-blue-900 text-white p-8 relative overflow-hidden">
                            <h4 className="text-2xl font-bold relative z-10">
                                Academic Levels & Qualifications
                            </h4>
                            <p className="text-blue-200 mt-2 relative z-10">
                                Overview of the structured qualification framework.
                            </p>
                        </div>

                        <div className="divide-y divide-gray-100">
                            {[
                                { level: "Level 4–5", title: "Foundation / Higher Diploma", desc: "Entry-level higher education qualifications preparing students for advanced study." },
                                { level: "Level 6", title: "Bachelor’s Degree", desc: "Typically a 3-year undergraduate program (4 years in Scotland)." },
                                { level: "Level 7", title: "Master’s Degree", desc: "One-year postgraduate program such as MA, MSc, or MBA." },
                                { level: "Level 8", title: "Postgraduate Certificate/Diploma", desc: "Specialist qualification for professional development." },
                                { level: "Level 9–10", title: "Doctorate (PhD)", desc: "Research-based qualification demonstrating subject expertise." }
                            ].map((item, index) => (
                                <div key={index} className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-center hover:bg-gray-50 transition-colors">
                                    <div className="font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded w-fit">
                                        {item.level}
                                    </div>
                                    <div className="font-bold text-gray-900 md:col-span-1">
                                        {item.title}
                                    </div>
                                    <div className="text-gray-600 md:col-span-2">
                                        {item.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Study Destinations & CTA */}
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Study Cities */}
                        <div className="lg:col-span-2 bg-blue-50 rounded-2xl p-10 border border-blue-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Popular Student Cities
                            </h3>
                            <p className="text-gray-700 mb-6">
                                The UK offers dynamic cities combining academic excellence with vibrant student life:
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {["London", "Manchester", "Edinburgh", "Birmingham", "Leeds", "Glasgow"].map((city, i) => (
                                    <span key={i} className="px-4 py-2 bg-white rounded-full text-blue-700 font-semibold shadow-sm border border-blue-100">
                                        📍 {city}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-red-700 rounded-2xl p-10 text-white flex flex-col justify-center text-center shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">
                                Begin Your Study Journey
                            </h3>
                            <p className="text-red-100 mb-8 text-sm">
                                Get personalized guidance on course selection, university applications,
                                and visa procedures from our expert advisors.
                            </p>
                            <button className="w-full py-3 bg-white text-red-700 font-bold rounded-lg hover:bg-red-50 transition-colors shadow-md">
                                Speak to an Advisor
                            </button>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default UKEducationSystem;
